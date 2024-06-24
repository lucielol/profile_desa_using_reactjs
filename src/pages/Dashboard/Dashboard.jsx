import React from "react";
import App from "../Templates/App";
import Navbar from "../Templates/Navbar";

const Dashboard = () => {
  return (
    <>
      <App>
        <Navbar>Home</Navbar>
        <section class="bg-white dark:bg-gray-900">
          <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
            <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Welcome to Your Dashboard
            </h1>
            <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
              Here at Flowbite we focus on markets where technology, innovation,
              and capital can unlock long-term value and drive economic growth.
            </p>
          </div>
        </section>
      </App>
    </>
  );
};

export default Dashboard;
