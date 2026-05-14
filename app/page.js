import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <h1 className="text-4xl font-bold text-indigo-600">
        NexPath 🚀
      </h1>

      <p className="mt-3 text-gray-600">
        منصة تعليم وإدارة حديثة
      </p>

      <Link
        href="/dashboard"
        className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-xl"
      >
        دخول لوحة التحكم
      </Link>
    </div>
  );
}
