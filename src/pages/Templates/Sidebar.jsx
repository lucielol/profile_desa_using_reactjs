import React from "react";
import { Sidebar as SideBar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";

const Sidebar = () => {
  return (
    <aside className="w-64 shadow-md">
      <div className="p-4">
        <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>
      </div>
      <SideBar aria-label="Default sidebar example">
        <SideBar.Items>
          <SideBar.ItemGroup>
            <SideBar.Item href="#" icon={HiChartPie}>
              Dashboard
            </SideBar.Item>
            <SideBar.Item
              href="#"
              icon={HiViewBoards}
              label="Pro"
              labelColor="dark"
            >
              Kanban
            </SideBar.Item>
            <SideBar.Item href="#" icon={HiInbox} label="3">
              Inbox
            </SideBar.Item>
            <SideBar.Item href="#" icon={HiUser}>
              Users
            </SideBar.Item>
            <SideBar.Item href="#" icon={HiShoppingBag}>
              Products
            </SideBar.Item>
            <SideBar.Item href="#" icon={HiArrowSmRight}>
              Sign In
            </SideBar.Item>
            <SideBar.Item href="#" icon={HiTable}>
              Sign Up
            </SideBar.Item>
          </SideBar.ItemGroup>
        </SideBar.Items>
      </SideBar>
    </aside>
  );
};

export default Sidebar;
