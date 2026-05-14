import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Card from "@/components/Card";

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <div className="p-6 grid grid-cols-3 gap-4">
          <Card title="المستخدمين" value="1,240" />
          <Card title="الدروس" value="320" />
          <Card title="الزيارات" value="8,540" />
        </div>
      </div>
    </div>
  );
}
