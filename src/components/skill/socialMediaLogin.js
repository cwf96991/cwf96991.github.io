import React, { useCallback, useRef, useState, memo } from "react";
import { Header, SkillContainer, MobileDeskTopSection } from "./widget";
import { AppConfig } from "../../utils/AppConfig";
import {
  LoginSocialGoogle,
  LoginSocialAmazon,
  LoginSocialFacebook,
  LoginSocialGithub,
  LoginSocialInstagram,
  LoginSocialLinkedin,
  LoginSocialMicrosoft,
  LoginSocialPinterest,
  LoginSocialTwitter,
} from "reactjs-social-login";
import {
  FacebookLoginButton,
  GoogleLoginButton,
  GithubLoginButton,
  AmazonLoginButton,
  InstagramLoginButton,
  LinkedInLoginButton,
  MicrosoftLoginButton,
  TwitterLoginButton,
} from "react-social-login-buttons";
import { PinterestLogo } from "../img";
const User = memo(({ provider, profile, onLogout }) => {
  const avatar =
    profile?.avatar ||
    profile?.avatar_url ||
    profile?.picture?.data?.url ||
    profile?.profile_image_url_https ||
    "https://maxcdn.icons8.com/Share/icon/p1em/users//gender_neutral_user1600.png";

  return (
    <div className="card">
      <div className="avt">
        <img alt="avatar" src={avatar} />
      </div>

      <h3 className="provider">{provider.toUpperCase()}</h3>

      <div className="content">
        <div className="data">
          {Object.entries(profile).map(([key, value]) => (
            <div className="field" key={key}>
              <div className="label">{key}: </div>
              <div className="value">{JSON.stringify(value)}</div>
            </div>
          ))}
        </div>
        <button className="btnLogout" onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  );
});
const REDIRECT_URI = "http://localhost:3000/account/login";
const SocialMediaLoginWidget = () => {
  const [provider, setProvider] = useState("");
  const [profile, setProfile] = useState();
  const amazonRef = useRef(null);
  const instagramRef = useRef(null);
  const googleRef = useRef(null);
  const facebookRef = useRef(null);
  const microsoftRef = useRef(null);
  const linkedinRef = useRef(null);
  const githubRef = useRef(null);
  const pinterestRef = useRef(null);
  const twitterRef = useRef(null);
  const onLoginStart = useCallback(() => {
    // alert("login start");
  }, []);

  const onLogoutFailure = useCallback(() => {
    // alert("logout fail");
  }, []);

  const onLogoutSuccess = useCallback(() => {
    setProfile(null);
    setProvider("");
    // alert("logout success");
  }, []);

  const onLogout = useCallback(() => {
    switch (provider) {
      case "amazon":
        amazonRef.current?.onLogout();
        break;
      case "facebook":
        facebookRef.current?.onLogout();
        break;
      case "google":
        googleRef.current?.onLogout();
        break;
      case "instagram":
        instagramRef.current?.onLogout();
        break;
      case "microsoft":
        microsoftRef.current?.onLogout();
        break;
      case "github":
        githubRef.current?.onLogout();
        break;
      case "pinterest":
        pinterestRef.current?.onLogout();
        break;
      case "twitter":
        twitterRef.current?.onLogout();
        break;
      case "linkedin":
        linkedinRef.current?.onLogout();
        break;
      default:
        break;
    }
  }, [provider]);

  return (
    <>
      {/* {provider && profile && (
        <User provider={provider} profile={profile} onLogout={onLogout} />
      )} */}
      <div className="text-black">{process.env.REACT_APP_FB_APP_ID}</div>
      <div
        className={`flex flex-col items-center mx-auto my-auto ${
          provider && profile ? "hide" : ""
        }`}
      >
        <LoginSocialFacebook
          ref={facebookRef}
          appId={AppConfig.REACT_APP_FB_APP_ID || ""}
          onLoginStart={onLoginStart}
          onLogoutSuccess={onLogoutSuccess}
          onResolve={({ provider, data }) => {
            setProvider(provider);
            setProfile(data);
          }}
          onReject={(err) => {
            console.log(err);
          }}
        >
          <FacebookLoginButton />
        </LoginSocialFacebook>

        <LoginSocialGoogle
          ref={googleRef}
          client_id={process.env.REACT_APP_GG_APP_ID || ""}
          onLogoutFailure={onLogoutFailure}
          onLoginStart={onLoginStart}
          onLogoutSuccess={onLogoutSuccess}
          onResolve={({ provider, data }) => {
            setProvider(provider);
            setProfile(data);
          }}
          onReject={(err) => {
            console.log(err);
          }}
        >
          <GoogleLoginButton />
        </LoginSocialGoogle>

        <LoginSocialAmazon
          ref={amazonRef}
          client_id={process.env.REACT_APP_AMAZON_APP_ID || ""}
          redirect_uri={REDIRECT_URI}
          onResolve={({ provider, data }) => {
            setProvider(provider);
            setProfile(data);
          }}
          onReject={(err) => {
            console.log(err);
          }}
          onLoginStart={onLoginStart}
          onLogoutSuccess={onLogoutSuccess}
        >
          <AmazonLoginButton />
        </LoginSocialAmazon>

        <LoginSocialInstagram
          ref={instagramRef}
          client_id={AppConfig.REACT_APP_INSTAGRAM_APP_ID || ""}
          client_secret={AppConfig.REACT_APP_INSTAGRAM_APP_SECRET || ""}
          redirect_uri={REDIRECT_URI}
          onLoginStart={onLoginStart}
          onLogoutSuccess={onLogoutSuccess}
          onResolve={({ provider, data }) => {
            setProvider(provider);
            setProfile(data);
          }}
          onReject={(err) => {
            console.log(err);
          }}
        >
          <InstagramLoginButton />
        </LoginSocialInstagram>

        <LoginSocialMicrosoft
          ref={microsoftRef}
          client_id={process.env.REACT_APP_MICROSOFT_APP_ID || ""}
          redirect_uri={REDIRECT_URI}
          onLoginStart={onLoginStart}
          onLogoutSuccess={onLogoutSuccess}
          onResolve={({ provider, data }) => {
            setProvider(provider);
            setProfile(data);
          }}
          onReject={(err) => {
            console.log(err);
          }}
        >
          <MicrosoftLoginButton />
        </LoginSocialMicrosoft>

        <LoginSocialLinkedin
          ref={linkedinRef}
          client_id={process.env.REACT_APP_LINKEDIN_APP_ID || ""}
          client_secret={process.env.REACT_APP_LINKEDIN_APP_SECRET || ""}
          redirect_uri={REDIRECT_URI}
          onLoginStart={onLoginStart}
          onLogoutSuccess={onLogoutSuccess}
          onResolve={({ provider, data }) => {
            setProvider(provider);
            setProfile(data);
          }}
          onReject={(err) => {
            console.log(err);
          }}
        >
          <LinkedInLoginButton />
        </LoginSocialLinkedin>

        <LoginSocialGithub
          ref={githubRef}
          client_id={process.env.REACT_APP_GITHUB_APP_ID || ""}
          client_secret={process.env.REACT_APP_GITHUB_APP_SECRET || ""}
          redirect_uri={REDIRECT_URI}
          onLoginStart={onLoginStart}
          onLogoutSuccess={onLogoutSuccess}
          onResolve={({ provider, data }) => {
            setProvider(provider);
            setProfile(data);
          }}
          onReject={(err) => {
            console.log(err);
          }}
        >
          <GithubLoginButton />
        </LoginSocialGithub>
        <LoginSocialPinterest
          ref={pinterestRef}
          client_id={process.env.REACT_APP_PINTEREST_APP_ID || ""}
          client_secret={process.env.REACT_APP_PINTEREST_APP_SECRET || ""}
          redirect_uri={REDIRECT_URI}
          onLoginStart={onLoginStart}
          onLogoutSuccess={onLogoutSuccess}
          onResolve={({ provider, data }) => {
            setProvider(provider);
            setProfile(data);
          }}
          onReject={(err) => {
            console.log(err);
          }}
          className="pinterest-btn"
        >
          <div className="content ">
            <div className="icon">
              <PinterestLogo />
            </div>
            <span className="txt">Login With Pinterest</span>
          </div>
        </LoginSocialPinterest>

        <LoginSocialTwitter
          ref={twitterRef}
          client_id={process.env.REACT_APP_TWITTER_API_KEY || ""}
          client_secret={process.env.REACT_APP_TWITTER_APP_SECRET || ""}
          redirect_uri={REDIRECT_URI}
          onLoginStart={onLoginStart}
          onLogoutSuccess={onLogoutSuccess}
          onResolve={({ provider, data }) => {
            setProvider(provider);
            setProfile(data);
          }}
          onReject={(err) => {
            console.log(err);
          }}
        >
          <TwitterLoginButton />
        </LoginSocialTwitter>
      </div>
    </>
  );
};
const SocialMediaLogin = () => {
  return (
    <div className=" ">
      <Header header="Social Media Login" skill="socialMediaLogin" />

      <SkillContainer
        phone={<SocialMediaLoginWidget />}
        window={<SocialMediaLoginWidget />}
      />

      <MobileDeskTopSection>
        <SocialMediaLoginWidget />
      </MobileDeskTopSection>
    </div>
  );
};
export default SocialMediaLogin;

export const getServerSideProps = async () => {
  console.log(
    "process.env.REACT_APP_FB_APP_ID",
    process.env.REACT_APP_FB_APP_ID
  );
};
