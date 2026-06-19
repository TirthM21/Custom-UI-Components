// pages/register-page.tsx
"use client";
// pages/register-page.tsx
import React from "react";
import { useRouter } from "next/navigation";
import { Dashboard } from "@/components/Design/dashboard";

const Admin: React.FC = () => {
  const router = useRouter();

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <Dashboard></Dashboard>
    </div>
  );
};

export default Admin;
