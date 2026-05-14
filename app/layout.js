export const metadata = {
  title: "NexPath Platform",
  description: "Modern Platform"
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body style={{ margin: 0, fontFamily: "Arial", background: "#0f172a" }}>
        {children}
      </body>
    </html>
  );
}
