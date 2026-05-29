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
import LotteryGamesPage from "@/pages/admin/lottery-games/LotteryGamesPage";
import MyLotteryPage from "@/pages/admin/my-lottery/MyLotteryPage";
import IntelligenceLibraryPage from "@/pages/admin/intelligence-library/IntelligenceLibraryPage";
import BeginnersGuidePage from "@/pages/admin/intelligence-library/BeginnersGuidePage";
import HotColdNumbersPage from "@/pages/admin/intelligence-library/HotColdNumbersPage";
import MythsVsFactsPage from "@/pages/admin/intelligence-library/MythsVsFactsPage";
import ResponsiblePlayPage from "@/pages/admin/intelligence-library/ResponsiblePlayPage";
import SmartPicksPage from "@/pages/admin/intelligence-library/SmartPicksPage";
import SettingsPage from "@/pages/admin/settings/SettingsPage";
import SubscriptionPage from "@/pages/admin/subscription/SubscriptionPage";

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
        path: "/dashboard/intelligence-library/beginner-guide",
        element: <BeginnersGuidePage />,
      },
      {
        path: "/dashboard/intelligence-library/hot-cold-numbers",
        element: <HotColdNumbersPage />,
      },
      {
        path: "/dashboard/intelligence-library/myths-vs-facts",
        element: <MythsVsFactsPage />,
      },
      {
        path: "/dashboard/intelligence-library/responsible-play",
        element: <ResponsiblePlayPage />,
      },
      {
        path: "/dashboard/intelligence-library/smart-picks",
        element: <SmartPicksPage />,
      },
      {
        path: "/dashboard/settings",
        element: <SettingsPage />,
      },
      {
        path: "/dashboard/subscription",
        element: <SubscriptionPage />,
      },
    ],
  },
]);

export default router;
