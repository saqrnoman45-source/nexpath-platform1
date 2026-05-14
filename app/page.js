export default function Home() {
  return (
    <main style={styles.container}>
      <h1 style={styles.title}>🚀 NexPath Platform</h1>
      <p style={styles.subtitle}>
        منصة احترافية قيد التطوير
      </p>

      <button style={styles.button}>
        ابدأ الآن
      </button>
    </main>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to right, #0f172a, #1e293b)",
    color: "white",
    textAlign: "center"
  },
  title: {
    fontSize: "40px",
    marginBottom: "10px"
  },
  subtitle: {
    fontSize: "18px",
    color: "#cbd5e1",
    marginBottom: "20px"
  },
  button: {
    padding: "12px 20px",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "#3b82f6",
    color: "white",
    cursor: "pointer"
  }
};
