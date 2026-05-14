import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <div className="card">
        <h1>🚀 NexPath Platform</h1>
        <p>منصة احترافية قيد التطوير</p>

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
        }

        .card {
          background: rgba(255,255,255,0.08);
          padding: 40px;
          border-radius: 20px;
          text-align: center;
          color: white;
          width: 320px;
        }

        button {
          margin-top: 15px;
          padding: 10px 20px;
          border: none;
          border-radius: 10px;
          background: #3b82f6;
          color: white;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
