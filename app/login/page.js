"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const login = () => {
    if (email.trim().length < 3) {
      alert("اكتب بيانات صحيحة 😄");
      return;
    }

    localStorage.setItem("user", JSON.stringify({
      email,
      time: Date.now()
    }));

    router.push("/dashboard");
  };

  return (
    <div className="container">
      <div className="box">
        <h2>تسجيل الدخول</h2>

        <input
          placeholder="الإيميل"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button onClick={login}>دخول</button>
      </div>

      <style jsx>{`
        .container {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #0f172a;
        }

        .box {
          background: #1e293b;
          padding: 30px;
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          width: 280px;
          color: white;
        }

        input {
          padding: 10px;
          border-radius: 8px;
          border: none;
        }

        button {
          padding: 10px;
          border: none;
          border-radius: 8px;
          background: #22c55e;
          color: white;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
