export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-indigo-700 text-white p-5">
      <h2 className="text-xl font-bold mb-6">NexPath</h2>

      <ul className="space-y-4">
        <li>🏠 الرئيسية</li>
        <li>📊 لوحة التحكم</li>
        <li>👨‍🎓 الطلاب</li>
        <li>⚙️ الإعدادات</li>
      </ul>
    </div>
  );
}
