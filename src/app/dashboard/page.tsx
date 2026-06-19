// pages/HomePage.tsx
"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { Home, Settings, ExitToApp } from "@mui/icons-material";
import Card from "../../components/Card";
import { ChartBar, ChartLine, ChartPie } from "../../components/Chart"; // Correct import path for Chart components
import Navbar from "../../components/Navbar";
import Button from "../../components/Button";
import InputText from "../../components/InputText";
import CustomDrawerSidebar from "../../components/Drawer";
import { motion } from "framer-motion";

const menuItems = [
  { label: "Home", icon: <Home />, action: () => console.log("Home clicked") },
  { label: "Settings", icon: <Settings />, action: () => console.log("Settings clicked") },
  { label: "Logout", icon: <ExitToApp />, action: () => console.log("Logout clicked") },
];

const sidebarItems = [
  { title: "Dashboard", icon: <Home />, onClick: () => console.log("Dashboard clicked") },
  { title: "Settings", icon: <Settings />, onClick: () => console.log("Settings clicked") },
  { title: "Logout", icon: <ExitToApp />, onClick: () => console.log("Logout clicked") },
];

const HomePage = () => {
  useEffect(() => {
    gsap.from(".card", { opacity: 0, y: 50, stagger: 0.2, duration: 1.5 });
  }, []);

  const handleSearch = (query: string) => {
    console.log("Search query:", query);
  };

  const handleChartHover = (chartType: string) => {
    gsap.to(`.${chartType}`, { scale: 1.2 });
  };

  const handleChartLeave = (chartType: string) => {
    gsap.to(`.${chartType}`, { scale: 1 });
  };

  const cardData = [
    {
      title: "Dashboard",
      subtitle: "Jan 20, 2023 - Feb 09, 2023",
      content: (
        <div className="space-y-4">
          <InputText
            label="Name"
            placeholder="Enter your name"
            onChange={(value) => console.log("Name:", value)}
          />
          <InputText
            label="Email"
            placeholder="Enter your email"
            onChange={(value) => console.log("Email:", value)}
          />
          <Button label="Submit" onClick={() => console.log("Form submitted")} />
        </div>
      ),
    },
    {
      title: "Analytics",
      subtitle: "Last 7 days",
      content: (
        <ChartBar
          data={{
            labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
            datasets: [
              {
                label: "Analytics Data",
                data: [12, 19, 3, 5, 2, 3, 8],
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(255, 159, 64, 0.2)",
                  "rgba(255, 99, 132, 0.2)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)",
                  "rgba(255, 99, 132, 1)",
                ],
                borderWidth: 1,
              },
            ],
          }}
          options={{ maintainAspectRatio: false }}
          className="analytics-chart"
          onMouseOver={() => handleChartHover("analytics-chart")}
          onMouseOut={() => handleChartLeave("analytics-chart")}
        />
      ),
    },
  ];

  return (
    <div className="bg-black min-h-screen text-white">
      {/* Navbar */}
      <Navbar
        logo="ACME"
        title="Dashboard"
        menuItems={menuItems}
        avatarSrc="https://via.placeholder.com/150"
        onSearch={handleSearch}
        styles={{
          appBarBgColor: "black",
          titleColor: "white",
          searchBgColor: "rgba(255, 255, 255, 0.15)",
          menuIconColor: "white",
          avatarSize: 40,
        }}
        sidebarItems={sidebarItems}
      />

      {/* Sidebar */}
      <CustomDrawerSidebar items={sidebarItems} />

      {/* Content */}
      <div className="p-8 md:p-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Cards */}
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.2 }}
            className="bg-white rounded-lg p-6 shadow-lg">
            <Card title={card.title} subtitle={card.subtitle}>
              {card.content}
            </Card>
          </motion.div>
        ))}

        {/* Charts */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="col-span-3 md:col-span-2 bg-white rounded-lg p-6 shadow-lg">
          <ChartBar
            data={{
              labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
              datasets: [
                {
                  label: "Analytics Data",
                  data: [12, 19, 3, 5, 2, 3, 8],
                  backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                    "rgba(255, 99, 132, 0.2)",
                  ],
                  borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                    "rgba(255, 99, 132, 1)",
                  ],
                  borderWidth: 1,
                },
              ],
            }}
            options={{ maintainAspectRatio: false }}
            className="analytics-chart"
            onMouseOver={() => handleChartHover("analytics-chart")}
            onMouseOut={() => handleChartLeave("analytics-chart")}
          />
          {/* Additional Charts */}
          <ChartLine
            data={{
              labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
              datasets: [
                {
                  label: "Analytics Data",
                  data: [5, 8, 15, 20, 10, 7, 12],
                  backgroundColor: "rgba(54, 162, 235, 0.2)",
                  borderColor: "rgba(54, 162, 235, 1)",
                  borderWidth: 1,
                },
              ],
            }}
            options={{ maintainAspectRatio: false }}
            className="analytics-chart"
            onMouseOver={() => handleChartHover("analytics-chart")}
            onMouseOut={() => handleChartLeave("analytics-chart")}
          />
          <ChartPie
            data={{
              labels: ["Red", "Blue", "Yellow"],
              datasets: [
                {
                  label: "Analytics Data",
                  data: [300, 50, 100],
                  backgroundColor: ["red", "blue", "yellow"],
                  borderColor: ["red", "blue", "yellow"],
                  borderWidth: 1,
                },
              ],
            }}
            options={{ maintainAspectRatio: false }}
            className="analytics-chart"
            onMouseOver={() => handleChartHover("analytics-chart")}
            onMouseOut={() => handleChartLeave("analytics-chart")}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
