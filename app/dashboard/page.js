"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) router.push("/login");
  }, []);

  return (
    <div className="layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>🚀 NexPath</h2>

        <nav>
          <Link href="/dashboard">🏠 الرئيسية</Link>
          <Link href="/dashboard">📊 الإحصائيات</Link>
          <Link href="/login">🚪 تسجيل خروج</Link>
        </nav>
      </aside>

      {/* Main */}
      <main className="main">
        <h1>لوحة التحكم 📊</h1>

        <div className="cards">
          <div className="card">👤 المستخدمين: 1</div>
          <div className="card">⚡ الأداء: ممتاز</div>
          <div className="card">📦 المشاريع: 1</div>
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
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        nav {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        nav a {
          color: #cbd5e1;
          text-decoration: none;
          padding: 8px;
          border-radius: 8px;
        }

        nav a:hover {
          background: #1e293b;
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
