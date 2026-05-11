import AuthLayout from "@/layout/AuthLayout";
import AdminLayout from "@/layout/AdminLayout";
import Login from "@/pages/authPages/Login";
import Register from "@/pages/authPages/Register";
import OTP from "@/pages/authPages/OTP";
import ConfirmPassword from "@/pages/authPages/ConfirmPassword";
import NewPassword from "@/pages/authPages/NewPassword";

// Admin Pages
import DashboardPage from "@/pages/admin/dashboard/DashboardPage";
import GeneratePicksPage from "@/pages/admin/generate-picks/GeneratePicksPage";
import PastResultsPage from "@/pages/admin/past-results/PastResultsPage";
import AIAnalysisPage from "@/pages/admin/ai-analysis/AIAnalysisPage";
import LotteryGamesPage from "@/pages/admin/lottery-games/LotteryGamesPage";
import MyLotteryPage from "@/pages/admin/my-lottery/MyLotteryPage";
import IntelligenceLibraryPage from "@/pages/admin/intelligence-library/IntelligenceLibraryPage";
import SettingsPage from "@/pages/admin/settings/SettingsPage";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/otp",
        element: <OTP />,
      },
      {
        path: "/confirm-password",
        element: <ConfirmPassword />,
      },
      {
        path: "/new-password",
        element: <NewPassword />,
      },
    ],
  },
  // Admin routes
  {
    path: "/dashboard",
    element: <AdminLayout />,
    children: [
      {
        path: "/dashboard",
        element: <DashboardPage />,
      },
      {
        path: "/dashboard/generate-picks",
        element: <GeneratePicksPage />,
      },
      {
        path: "/dashboard/past-results",
        element: <PastResultsPage />,
      },
      {
        path: "/dashboard/ai-analysis",
        element: <AIAnalysisPage />,
      },
      {
        path: "/dashboard/lottery-games",
        element: <LotteryGamesPage />,
      },
      {
        path: "/dashboard/my-lottery",
        element: <MyLotteryPage />,
      },
      {
        path: "/dashboard/intelligence-library",
        element: <IntelligenceLibraryPage />,
      },
      {
        path: "/dashboard/settings",
        element: <SettingsPage />,
      },
    ],
  },
]);

export default router;
