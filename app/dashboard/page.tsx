import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { FaBookmark, FaGraduationCap, FaClock } from "react-icons/fa";
import { AiFillLayout } from "react-icons/ai";

export default async function DashboardPage() {
  const { userId } = await auth();
  const user = await currentUser();

  // ලොග් වී නැත්නම් Sign-in පිටුවට යොමු කරන්න
  if (!userId) {
    redirect("/sign-in");
  }

  const savedItems = [
    { title: "Next.js 15 Mastery", category: "Frontend", date: "2 mins ago" },
    { title: "Node.js Security Best Practices", category: "Backend", date: "1 day ago" },
  ];

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#020617] transition-colors duration-500">
      {/* Welcome Header */}
      <div className="bg-[#1596C4] dark:bg-[#051233] transition-colors duration-500 pt-20 pb-32 px-6">
        <div className="max-w-6xl mx-auto text-white">
          <h1 className="text-4xl font-black mb-2">Welcome back, {user?.firstName}! 👋</h1>
          <p className="opacity-80">Track your progress and access your saved developer resources.</p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 -mt-20 grid grid-cols-1 lg:grid-cols-3 gap-8 pb-20">
        
        {/* Left Side: Stats & Saved Items */}
        <div className="lg:col-span-2 space-y-8 dark:text-slate-600 dark:bg-[#2a3a67] bg-white p-8 rounded-3xl shadow-sm border border-slate-100 transition-colors duration-500">
          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
              <div className="bg-blue-100 w-12 h-12 rounded-2xl flex items-center justify-center text-[#1596C4] mb-4">
                <FaBookmark size={24} />
              </div>
              <h4 className="text-2xl font-bold">12</h4>
              <p className="text-slate-500 text-sm">Saved Resources</p>
            </div>
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
              <div className="bg-green-100 w-12 h-12 rounded-2xl flex items-center justify-center text-green-600 mb-4">
                <FaGraduationCap size={24} />
              </div>
              <h4 className="text-2xl font-bold">4</h4>
              <p className="text-slate-500 text-sm">Roadmaps Started</p>
            </div>
          </div>

          {/* Recent Saved Items List */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <FaClock size={20} className="text-[#1596C4]" />
              Recently Saved
            </h3>
            <div className="space-y-4">
              {savedItems.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors">
                  <div>
                    <h5 className="font-bold text-slate-800 dark:text-slate-500">{item.title}</h5>
                    <span className="text-xs text-slate-500 uppercase font-bold">{item.category}</span>
                  </div>
                  <span className="text-xs text-slate-400">{item.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: AI Assistant Sidebar */}
        <div className="bg-white dark:bg-[#2a3a67] rounded-3xl p-8 shadow-sm border border-slate-100 h-fit">
          <h3 className="text-xl font-bold mb-4 dark:text-slate-100">AI Study Partner 🤖</h3>
          <p className="text-slate-600 dark:text-slate-50 text-sm mb-6 leading-relaxed">
            I can generate a customized learning path for you based on your interests.
          </p>
          <button className="w-full bg-[#1596C4] dark:bg-[#051233] text-white py-4 rounded-2xl font-bold hover:shadow-lg transition-all flex items-center justify-center gap-2">
            <AiFillLayout size={18} />
            Generate Roadmap
          </button>
        </div>

      </div>
    </main>
  );
}