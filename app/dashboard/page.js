"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("user");

    if (!data) {
      router.push("/login");
    } else {
      setUser(JSON.parse(data));
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    router.push("/login");
  };

  if (!user) return null;

  return (
    <div className="layout">
      <aside className="sidebar">
        <h2>🚀 NexPath</h2>
        <p>{user.email}</p>

        <button onClick={logout}>تسجيل خروج</button>
      </aside>

      <main className="main">
        <h1>لوحة التحكم 📊</h1>

        <div className="cards">
          <div className="card">👤 المستخدم: نشط</div>
          <div className="card">⚡ الحالة: ممتاز</div>
          <div className="card">🚀 النظام: يعمل</div>
        </div>
      </main>

      <style jsx>{`
        .layout {
          display: flex;
          min-height: 100vh;
          color: white;
          font-family: Arial;
        }

        .sidebar {
          width: 220px;
          background: #111827;
          padding: 20px;
        }

        button {
          margin-top: 20px;
          padding: 10px;
          background: red;
          border: none;
          color: white;
          cursor: pointer;
        }

        .main {
          flex: 1;
          padding: 30px;
          background: #0f172a;
        }

        .cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 20px;
          margin-top: 20px;
        }

        .card {
          background: #1e293b;
          padding: 20px;
          border-radius: 12px;
        }
      `}</style>
    </div>
  );
}
