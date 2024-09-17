import React, { useEffect } from "react";
import OneSignal from "react-onesignal";

const App = () => {
  useEffect(() => {
    OneSignal.init({
      appId: "f4cf0f43-f0e1-4b25-8ee0-557384ac63a0", 
      safari_web_id: "web.onesignal.auto.1560ab56-4a76-4fcb-b8cd-3f5423fe1d6c", 
      notifyButton: {
        enable: true,
      },
    });

  
    // OneSignal.showSlidedownPrompt();
  }, []);

  return <div className="App">Your App Content</div>;
};

export default App;
