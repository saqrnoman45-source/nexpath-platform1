import Link from "next/link";

export default function Home() {
  return (
    <div style={styles.container}>
      <h1>🚀 NexPath Platform</h1>
      <p>منصة احترافية قيد التطوير</p>

      <Link href="/login">
        <button style={styles.button}>ابدأ الآن</button>
      </Link>
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
    padding: "10px 20px",
    background: "green",
    color: "white",
    border: "none",
    marginTop: "10px"
  }
};
