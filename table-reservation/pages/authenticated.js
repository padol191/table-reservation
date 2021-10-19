import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Auth = () => {
  const router = useRouter();

  return (
    <div className="not-found">
      <h1>Welcome</h1>
    </div>
  );
};

export default Auth;
