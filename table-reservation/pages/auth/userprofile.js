import { useEffect, useState } from "react";
import axios from "axios";
import CustMain from "../../components/CustMain";

export default function Profile() {
  const [content, setMessage] = useState("");
  const [auth, setAuth] = useState(false);
  //   const token = window.localStorage.setItem("token", res.data.token);
  useEffect(() => {
    (async () => {
      try {
        const token = window.localStorage.getItem("token");
        console.log(token);
        const response = await fetch("http://localhost:5000/api/auth/user", {
          headers: {
            "x-auth-token": token,
          },
        });

        const content = await response.json();
        console.log(content);
        setMessage(content);
        setAuth(true);
      } catch (e) {
        console.log(e);
        setMessage("You are not logged in");
        setAuth(false);
      }
    })();
  }, []);

  return (
    <div>
      <CustMain data={content} />
    </div>
  );
}
