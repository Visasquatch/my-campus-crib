const msalConfig = {
    auth: {
      clientId: "3f0d3390-ebcf-4bec-8bb1-f5523b66a34c", 
      authority: "https://mycampuscrib.b2clogin.com/mycampuscrib.onmicrosoft.com/B2C_1_signup_signin",
      knownAuthorities: ["mycampuscrib.b2clogin.com"],
      redirectUri: process.env.REACT_APP_REDIRECT_URI,
    }
  };
  
  export default msalConfig;
  
  