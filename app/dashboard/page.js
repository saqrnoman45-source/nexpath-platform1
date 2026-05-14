"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      router.push("/login");
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    router.push("/login");
  };

  return (
    <div style={styles.container}>
      <h1>📊 لوحة التحكم</h1>
      <p>مرحبًا بك في منصتك 🚀</p>

      <button onClick={logout} style={styles.button}>
        تسجيل خروج
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
    alignItems: "center"
  },
  button: {
    marginTop: "20px",
    padding: "10px 20px",
    background: "red",
    color: "white",
    border: "none"
  }
};
