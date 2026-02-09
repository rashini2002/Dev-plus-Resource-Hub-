import { UserProfile } from "@clerk/nextjs";
import Link from "next/link";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const UserProfilePage = () => {
  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      {/* Header Section */}
      <div className="bg-[#1596C4] pt-12 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <Link 
            href="/" 
            className="flex items-center gap-2 text-white/80 hover:text-white transition-all mb-6 w-fit"
          >
            <FaArrowAltCircleLeft size={20} />
            <span className="font-medium">Back to Home</span>
          </Link>
          <h1 className="text-4xl font-black text-white">My Account</h1>
          <p className="text-white/70 mt-2">Manage your profile settings and security preferences.</p>
        </div>
      </div>

      {/* Clerk UserProfile Component */}
      <div className="max-w-5xl mx-auto -mt-10 px-6">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
          <UserProfile 
            path="/user-profile" 
            routing="path"
            appearance={{
              elements: {
                rootBox: "w-full",
                card: "shadow-none w-full border-none",
                navbar: "hidden md:flex border-r border-slate-100 p-6",
                headerTitle: "text-2xl font-bold text-slate-800",
                headerSubtitle: "text-slate-500",
                profileSectionTitleText: "text-[#1596C4] font-bold uppercase tracking-wider text-sm",
                formButtonPrimary: "bg-[#1596C4] hover:bg-[#127ea5] text-sm font-bold",
              }
            }}
          />
        </div>
      </div>
    </main>
  );
};

export default UserProfilePage;