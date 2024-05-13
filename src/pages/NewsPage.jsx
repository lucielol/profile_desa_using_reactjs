import React from "react";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import newsData from "../data/NewsData.json";
import dompyong from "../assets/images/dompyong-kulon.jpg";

export const NewsPage = () => {
  const { id } = useParams();
  const item = newsData.newsData[id];
  return (
    <>
      <Layout>
        <div className="grid grid-cols-1 mb-8">
          <div id="home" className="relative">
            <div className="absolute inset-0 bg-black opacity-70"></div>
            <div className="absolute inset-0 flex items-center text-white">
              <div className="mx-0 md:mx-20 w-full text-center md:text-left">
                <h1 className="text-2xl mb-5 truncate">Selamat Datang di</h1>
                <p className="text-3xl md:text-5xl uppercase font-bold truncate">
                  desa dompyong kulon
                </p>
              </div>
            </div>
            <div
              className="bg-cover bg-center w-full h-screen"
              style={{
                backgroundImage: `url(${dompyong})`,
              }}
            ></div>
          </div>
          <div className="text-center">
            <h1 className="text-3xl">{item.title}</h1>
            <p>{item.description}</p>
          </div>
        </div>
      </Layout>
    </>
  );
};
