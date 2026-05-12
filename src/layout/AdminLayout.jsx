import CommonNavbar from "@/pages/admin/CommonNavbar";
import SideBar from "@/pages/admin/SideBar";

import React, { useEffect, useState } from "react";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import { 
  Home, 
  Sparkles, 
  BarChart2, 
  Brain, 
  LayoutGrid, 
  Bookmark, 
  Library, 
  Settings,
  ShieldCheck
} from "lucide-react";
import { useUserProfile } from "@/hooks/fetchUserProfile";

const AdminLayout = () => {
  useUserProfile();
  const [Open, setOpen] = useState(false);

  const sideBar = [
    {
      id: 1,
      icon: <Home size={20} />,
      text: "Dashboard",
      path: "/dashboard",
    },
    {
      id: 2,
      icon: <Sparkles size={20} />,
      text: "Generate Picks",
      path: "/dashboard/generate-picks",
    },
    {
      id: 3,
      icon: <BarChart2 size={20} />,
      text: "Past Results",
      path: "/dashboard/past-results",
    },

    { type: 'divider' },
    {
      id: 4,
      icon: <LayoutGrid size={20} />,
      text: "Lottery Games",
      path: "/dashboard/lottery-games",
    },
    {
      id: 5,
      icon: <Bookmark size={20} />,
      text: "My Lottery",
      path: "/dashboard/my-lottery",
    },
    {
      id: 6,
      icon: <Library size={20} />,
      text: "Lottery Intelligence Library",
      path: "/dashboard/intelligence-library",
    },
    { type: 'divider' },
    {
      id: 7,
      icon: <Settings size={20} />,
      text: "Settings",
      path: "/dashboard/settings",
    },
  ];
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location]);
  return (
    <>
      <ScrollRestoration />
      <div className="flex  h-screen min-h-screen w-full bg-[#0D0D0D]">
        <SideBar open={Open} setOpen={setOpen} sidebar={sideBar} />
        <div className="flex-1  text-white flex flex-col overflow-auto custom-scrollbar">
          <div className=" flex flex-col  ">
            <CommonNavbar open={Open} setOpen={setOpen} />
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
