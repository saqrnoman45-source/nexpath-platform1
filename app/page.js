import Link from "next/link";

export default function Home() {
  return (
    <main className="container">
      <div className="card">
        <h1>🚀 NexPath Platform</h1>
        <p>منصة حديثة قيد التطوير - تجربة احترافية قادمة</p>

        <Link href="/login">
          <button>ابدأ الآن</button>
        </Link>
      </div>

      <style jsx>{`
        .container {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #0f172a, #1e293b);
          font-family: Arial;
        }

        .card {
          background: rgba(255, 255, 255, 0.08);
          padding: 40px;
          border-radius: 20px;
          text-align: center;
          color: white;
          backdrop-filter: blur(10px);
          box-shadow: 0 10px 40px rgba(0,0,0,0.3);
          width: 320px;
        }

        h1 {
          margin-bottom: 10px;
        }

        p {
          color: #cbd5e1;
          margin-bottom: 20px;
        }

        button {
          padding: 12px 20px;
          border: none;
          border-radius: 12px;
          background: #3b82f6;
          color: white;
          cursor: pointer;
          transition: 0.3s;
        }

        button:hover {
          background: #2563eb;
          transform: scale(1.05);
        }
      `}</style>
    </main>
  );
}
