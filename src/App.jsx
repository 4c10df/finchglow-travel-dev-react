import React, { useEffect } from "react";
import OneSignal from "react-onesignal";
import Homepage from "./components/hompage";
import "./App.css";
import ZohoChat from "./components/zohoChat";

function App() {
  useEffect(() => {
    // Initialize OneSignal
    OneSignal.init({
      appId: "f4cf0f43-f0e1-4b25-8ee0-557384ac63a0", // Your App ID
      safari_web_id: "web.onesignal.auto.1560ab56-4a76-4fcb-b8cd-3f5423fe1d6c", // Safari Web ID
      notifyButton: {
        enable: true, // Enable the notification button
      },
    });

    // Show the slidedown prompt directly
    OneSignal.showSlidedownPrompt().catch((error) => {
      console.error("Slidedown prompt failed to show:", error);
    });
  }, []);

  return (
    <div>
      <ZohoChat />
      <Homepage />
    </div>
  );
}

export default App;
