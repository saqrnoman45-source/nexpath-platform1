"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email && password) {
      localStorage.setItem("user", email);
      router.push("/dashboard");
    } else {
      alert("اكتب البيانات أولاً 😄");
    }
  };

  return (
    <div style={styles.container}>
      <h1>تسجيل الدخول</h1>

      <input
        placeholder="الإيميل"
        onChange={(e) => setEmail(e.target.value)}
        style={styles.input}
      />

      <input
        type="password"
        placeholder="كلمة المرور"
        onChange={(e) => setPassword(e.target.value)}
        style={styles.input}
      />

      <button onClick={handleLogin} style={styles.button}>
        دخول
      </button>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px"
  },
  input: {
    padding: "10px",
    width: "200px"
  },
  button: {
    padding: "10px 20px",
    background: "blue",
    color: "white",
    border: "none"
  }
};
