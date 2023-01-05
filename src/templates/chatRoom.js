import io from "socket.io-client";
import { useState, useEffect } from "react";
import Base from "./base";
import { BgBtn } from "../components/btn";
import { onForegroundMessage, getFirebaseToken } from "../utils/firebase";
import localforage from "localforage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
let socket;

export default function ChatRoom() {
  const [username, setUsername] = useState("");
  const [chosenUsername, setChosenUsername] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [fcmToken, setFCMToken] = useState();
  useEffect(() => {
    socketInitializer();
  }, []);
  useEffect(() => {
    handleGetFirebaseToken();
  }, []);
  const handleGetFirebaseToken = async () => {
    const tokenInLocalForage = await localforage.getItem("fcm_token");
    console.log(tokenInLocalForage);
    // Return the token if it is alredy in our local storage
    if (tokenInLocalForage !== null) {
      setFCMToken(tokenInLocalForage);
      console.log("tokenInLocalForage");
      return;
    }
    let firebaseToken = getFirebaseToken();
    console.log(firebaseToken);
    if (firebaseToken) {
      localforage.setItem("fcm_token", firebaseToken);

      setFCMToken(firebaseToken);
      console.log("firebaseToken");
      return;
    }
  };
  const socketInitializer = async () => {
    // We just call it because we don't need anything else out of it
    await fetch("/api/socket");

    socket = io();

    socket.on("newIncomingMessage", async (msg) => {
      setMessages((currentMsg) => [
        ...currentMsg,
        { author: msg.author, message: msg.message },
      ]);

      showToastMessage(msg);
      //send notification
      const tokenInLocalForage = await localforage.getItem("fcm_token");
      let fcm = fcmToken || tokenInLocalForage;
      console.log("fcm", fcm);
      if (fcm) {
        let objectWithData = {
          to: fcm,
          priority: "high",
          notification: {
            title: "You got a new chat message",
            body: msg.message,
          },
        };
        fetch("https://fcm.googleapis.com/fcm/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "key=AAAAfMvvKjA:APA91bG0ogWNGXOgmMK2Ffnx9C-NoiiJ3WLtiu18GW_etu5CM9UYz9jJT0TBYKE1i0nv2_0Eg9pE_Zt8aaUoN5ENrYXmzHxUt2KIzfCo7b85SqRY8-ikQyA3ceZQtyOfaWP7DN9a103F",
          },
          body: JSON.stringify(objectWithData),
        });
      }

      console.log(messages);
    });
  };
  const showToastMessage = (msg) => {
    toast(msg.author + ": " + msg.message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const sendMessage = async () => {
    socket.emit("createdMessage", { author: chosenUsername, message });
    setMessages((currentMsg) => [
      ...currentMsg,
      { author: chosenUsername, message },
    ]);
    setMessage("");
  };

  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.keyCode === 13) {
      if (message) {
        sendMessage();
      }
    }
  };

  return (
    <Base title={"Chat Room"}>
      <div className="flex items-center p-4 mx-auto min-h-screen justify-center">
        <main className="gap-4 flex flex-col items-center justify-center w-full h-full">
          {!chosenUsername ? (
            <>
              <h3 className="font-bold text-black text-xl">
                How people should call you?
              </h3>
              <input
                type="text"
                placeholder="Enter your name"
                value={username}
                className=" input input-bordered bg-gray-100 border-black text-gray-700"
                onChange={(e) => setUsername(e.target.value)}
              />
              <BgBtn
                onClick={() => {
                  setChosenUsername(username);
                }}
                text={"Go!"}
              />
            </>
          ) : (
            <>
              <p className="font-bold text-black text-xl">
                Your username: {username}
              </p>
              <div className="flex flex-col justify-end border-t-2 bg-white h-[20rem] min-w-[33%] rounded-md shadow-md ">
                <div className="h-full last:border-b-0 overflow-y-scroll">
                  {messages.map((msg, i) => {
                    return (
                      <div
                        className="w-full py-1 px-2 border-b border-gray-200"
                        key={i}
                      >
                        {msg.author} : {msg.message}
                      </div>
                    );
                  })}
                </div>
                <div className="border-t border-gray-300 w-full flex rounded-bl-md">
                  <input
                    type="text"
                    placeholder="New message..."
                    value={message}
                    className="outline-none py-2 px-2 rounded-bl-md flex-1"
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyUp={handleKeypress}
                  />
                  <div className="border-l border-gray-300 flex justify-center items-center  rounded-br-md group hover:bg-purple-500 transition-all">
                    <button
                      className="group-hover:text-white px-3 h-full"
                      onClick={() => {
                        sendMessage();
                      }}
                    >
                      Send
                    </button>
                  </div>
                </div>
                <ToastContainer />
              </div>
            </>
          )}
        </main>
      </div>
    </Base>
  );
}
