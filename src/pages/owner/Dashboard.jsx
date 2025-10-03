import React, { useEffect, useState } from "react";
import { assets, dummyCarData } from "../../assets/assets";
import Title from "../../components/owner/Title";

const Dashboard = () => {
  const [data, setData] = useState({
    totalCars: 0,
    totalBookings: 0,
    pendingBookings: 0,
    completedBookings: 0,
    recentBookings: [],
    monthlyRevenue: 0,
  });

  const dashboardCards = [
    { title: "Total Car", value: data.totalCars, icon: assets.carIconColored },
    { title: "Total Bookings", value: data.totalBookings, icon: assets.listIconColored },
    { title: "Pending", value: data.pendingBookings, icon: assets.cautionIconColored },
    { title: "Confirmed", value: data.completedBookings, icon: assets.listIconColored },
  ];

  useEffect(() => {
    setData(dummyCarData);
  }, []);
  return (
    <div className="px-4 pt-10 md:px-10 flex-1">
      <Title title="Admin Dashboard" subTitle="Monitor overral platform performance including total cars, bookings, revenue, and recent activities" />
    </div>
  );
};

export default Dashboard;
