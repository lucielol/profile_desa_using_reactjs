import React from "react";
import Layout from "./Layout";
import Carousel from "./Carousel";
import ProgressBar from "./ProgressBar";

const Home = () => {
  return (
    <>
      <Layout>
        <div className="grid grid-cols-1 mb-8">
          <div className="col-span-1">
            <Carousel />
          </div>
          <div className="col-span-1 mt-40 ">
            <div className="grid grid-cols-2 gap-4 mx-10">
              <div>
                <h1 className="text-3xl">SEKILAT DESA NAON</h1>
                <p className="mt-5">
                  <span className="font-bold">Lorem ipsum</span> dolor sit amet
                  consectetur, adipisicing elit. Placeat mollitia eligendi sed!
                  Et fugit ea ad repellat mollitia expedita, neque id ipsum
                  quasi sequi? Earum nam cumque veniam maxime aliquid.
                </p>
                <p className="mt-4">
                  Lorem ipsum dolor sit amet consectetur{" "}
                  <span className="font-bold">adipisicing</span> elit. In
                  perferendis molestias dolorem, explicabo tempora hic
                  exercitationem odit reprehenderit deserunt voluptate fugiat
                  magnam iste enim fuga sed? Laudantium voluptatibus nesciunt
                  voluptatem dolorum magni accusamus omnis impedit molestiae a,
                  ducimus, beatae quod ullam, corporis pariatur quaerat illo
                  explicabo assumenda quas. Unde, fugit?
                </p>
              </div>
              <div>
                <div className="mb-3">
                  <ProgressBar value="28" title="Pemerintahan" />
                </div>
                <div className="mb-3">
                  <ProgressBar value="12" title="Pembinaan Kemasyarakatan" />
                </div>
                <div className="mb-3">
                  <ProgressBar value="65" title="Pembangunan" />
                </div>
                <div className="mb-3">
                  <ProgressBar value="10" title="Pemberdayaan Kemasyarakatan" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
