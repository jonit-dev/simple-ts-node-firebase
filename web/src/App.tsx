import React, { useState } from "react";

import firebase from "./firebase";

interface ICredentials {
  email: string;
  password: string;
}

function App() {
  const [credentials, setCredentials] = useState<ICredentials>({
    email: "tes222t@live.com",
    password: "abc232321",
  });

  const [accessToken, setAccessToken] = useState<string>();

  const onInputChange = (e, field: string) => {
    const value = e.target.value as string;

    setCredentials((prevState) => {
      return {
        ...prevState,
        [field]: value,
      };
    });
  };

  const onLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(async (userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log(user);

        if (user) {
          setAccessToken(await user.getIdToken());
        }
      })
      .catch((error) => {
        // var errorCode = error.code;
        // var errorMessage = error.message;
        console.log(error);
      });
  };

  return (
    <>
      <h1>Login</h1>
      {JSON.stringify(credentials)}
      accessToken: {JSON.stringify(accessToken)}
      <p>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={credentials.email}
          onChange={(e) => onInputChange(e, "email")}
        />
      </p>
      <p>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={(e) => onInputChange(e, "password")}
        />
      </p>
      <button onClick={onLogin}>Login</button>
    </>
  );
}

export default App;
