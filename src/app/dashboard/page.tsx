import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) return redirect("/signin");

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Navigation Bar */}
      <header className="bg-blue-600 text-white py-4 shadow-md">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Dashboard</h2>
          <div className="space-x-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-8 px-4 max-w-7xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h1 className="text-3xl font-semibold text-gray-900">
            Hey {user.given_name} {user.family_name} 👋
          </h1>
        </div>
      </main>
    </div>
  );
}
