"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (!user) {
      router.push("/login");
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <div style={{ color: "white", textAlign: "center", marginTop: "50px" }}>
        جاري التحميل...
      </div>
    );
  }

  return (
    <div className="layout">
      <aside className="sidebar">
        <h2>🚀 NexPath</h2>

        <nav>
          <a href="/dashboard">🏠 الرئيسية</a>
          <a href="/login">🚪 تسجيل خروج</a>
        </nav>
      </aside>

      <main className="main">
        <h1>لوحة التحكم 📊</h1>

        <div className="cards">
          <div className="card">👤 المستخدم: نشط</div>
          <div className="card">⚡ الحالة: يعمل</div>
          <div className="card">🚀 المنصة: جاهزة</div>
        </div>
      </main>

      <style jsx>{`
        .layout {
          display: flex;
          min-height: 100vh;
          font-family: Arial;
          background: #0f172a;
          color: white;
        }

        .sidebar {
          width: 220px;
          background: #111827;
          padding: 20px;
        }

        nav {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        a {
          color: #cbd5e1;
          text-decoration: none;
        }

        a:hover {
          color: white;
        }

        .main {
          flex: 1;
          padding: 30px;
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
