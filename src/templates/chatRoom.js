
import io from "socket.io-client";
import { useState, useEffect } from "react";
import Base from "./base";
import { BgBtn } from "../components/btn";
import { onForegroundMessage,getFirebaseToken } from "../utils/firebase";
import localforage from "localforage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
let socket;

export default function ChatRoom() {
    const [username, setUsername] = useState("");
    const [chosenUsername, setChosenUsername] = useState("");
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const [fcmToken,setFCMToken] = useState()
    useEffect(() => {
      socketInitializer();
    }, []);
    useEffect(() => {
        handleGetFirebaseToken()
    }, [])
    const handleGetFirebaseToken = async() => {
        const tokenInLocalForage = await localforage.getItem("fcm_token");
        // Return the token if it is alredy in our local storage
        if (tokenInLocalForage !== null) {
            setFCMToken(tokenInLocalForage)
            return ;
        }
        let firebaseToken = getFirebaseToken()
        if (firebaseToken) {
            localforage.setItem("fcm_token", firebaseToken);
            
            
            setFCMToken(firebaseToken)
            return;
        }
           
    } 
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
          const tokenInLocalForage =await  localforage.getItem("fcm_token");
          let fcm = fcmToken || tokenInLocalForage
          if (fcm){
              let objectWithData = {
                  "to": fcm,
                  "priority": "high",
                  "notification": {
                      "title": "You got a new chat message",
                      "body": msg.message
                  },
              }
              fetch('https://fcm.googleapis.com/fcm/send', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                      'Authorization': 'key=AAAAfMvvKjA:APA91bG0ogWNGXOgmMK2Ffnx9C-NoiiJ3WLtiu18GW_etu5CM9UYz9jJT0TBYKE1i0nv2_0Eg9pE_Zt8aaUoN5ENrYXmzHxUt2KIzfCo7b85SqRY8-ikQyA3ceZQtyOfaWP7DN9a103F'
                  },
                  body: JSON.stringify(objectWithData),
              })
          }
          
      });
    };
    const showToastMessage = (msg) => {
        toast(msg.author+": "+msg.message, {
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
      <div className="flex items-center justify-center min-h-screen p-4 mx-auto">
        <main className="flex flex-col items-center justify-center w-full h-full gap-4">
          {!chosenUsername ? (
            <>
              <h3 className="text-xl font-bold text-black">
                How people should call you?
              </h3>
              <input
                type="text"
                placeholder="Enter your name"
                value={username}
                className="text-gray-700 bg-gray-100 border-black input input-bordered"
                onChange={(e) => setUsername(e.target.value)}
              />
              <BgBtn
          onClick={() => {
           setChosenUsername(username);
          }}
          text={
           "Go!"
          }
          
        />
             
            </>
          ) : (
            <>
              <p className="text-xl font-bold text-black">
                Your username: {username}
              </p>
              <div className="flex flex-col justify-end border-t-2 bg-white h-[20rem] min-w-[33%] rounded-md shadow-md ">
                <div className="h-full overflow-y-scroll last:border-b-0">
                  {messages.map((msg, i) => {
                    return (
                      <div
                        className="w-full px-2 py-1 border-b border-gray-200"
                        key={i}
                      >
                        {msg.author} : {msg.message}
                      </div>
                    );
                  })}
                </div>
                <div className="flex w-full border-t border-gray-300 rounded-bl-md">
                  <input
                    type="text"
                    placeholder="New message..."
                    value={message}
                    className="flex-1 px-2 py-2 outline-none rounded-bl-md"
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyUp={handleKeypress}
                  />
                  <div className="flex items-center justify-center transition-all border-l border-gray-300 rounded-br-md group hover:bg-purple-500">
                    <button
                      className="h-full px-3 group-hover:text-white"
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