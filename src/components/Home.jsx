import React from "react";
import Layout from "./Layout";
import Carousel from "./Carousel";
import ProgressBar from "./ProgressBar";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <Layout>
        <div className="grid grid-cols-1 mb-8 mx-10">
          <div className="-mx-10">
            <Carousel />
          </div>
          <div className="mt-40">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:mx-0">
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
          <div className="mt-12">
            <div className="mx-10 text-center mb-10">
              <h1 className="text-3xl">LEADERSHIP PARTNER</h1>
              <span className="text-2xl">Sinergitas Kami</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:mx-0">
              <div>
                <div className="max-w-sm mx-auto bg-white shadow-lg border border-gray-300 rounded-lg overflow-hidden">
                  <div className="sm:flex sm:items-center px-6 py-4">
                    <img
                      className="block mx-auto sm:mx-0 sm:flex-shrink-0 h-24 w-24 rounded-full"
                      src="https://jojogan.desa.id/wp-content/uploads/2020/01/LURAHE-scaled-1-400x400.jpg"
                      alt="Woman's Face"
                    />
                    <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
                      <p className="text-xl leading-tight">Irman Faozi</p>
                      <p className="text-sm text-gray-600">Kepala Desa</p>
                      <div className="mt-4 flex justify-center sm:justify-start">
                        <a
                          href="#"
                          className="mr-4 text-blue-500 hover:text-blue-600"
                        >
                          <FaFacebookSquare size="1.5em" />
                        </a>
                        <a
                          href="#"
                          className="mr-4 text-black hover:text-black/80"
                        >
                          <FaSquareXTwitter size="1.5em" />
                        </a>
                        <a
                          href="#"
                          className="text-pink-500 hover:text-pink-600"
                        >
                          <FaInstagramSquare size="1.5em" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="max-w-sm mx-auto bg-white shadow-lg border border-gray-300 rounded-lg overflow-hidden">
                  <div className="sm:flex sm:items-center px-6 py-4">
                    <img
                      className="block mx-auto sm:mx-0 sm:flex-shrink-0 h-24 w-24 rounded-full"
                      src="https://jojogan.desa.id/wp-content/uploads/2020/01/SUROSO-scaled-1-400x400.jpg"
                      alt="Woman's Face"
                    />
                    <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
                      <p className="text-xl leading-tight">Suroso</p>
                      <p className="text-sm text-gray-600">Ketua BPD</p>
                      <div className="mt-4 flex justify-center sm:justify-start">
                        <a
                          href="#"
                          className="mr-4 text-blue-500 hover:text-blue-600"
                        >
                          <FaFacebookSquare size="1.5em" />
                        </a>
                        <a
                          href="#"
                          className="mr-4 text-black hover:text-black/80"
                        >
                          <FaSquareXTwitter size="1.5em" />
                        </a>
                        <a
                          href="#"
                          className="text-pink-500 hover:text-pink-600"
                        >
                          <FaInstagramSquare size="1.5em" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="max-w-sm mx-auto bg-white shadow-lg border border-gray-300 rounded-lg overflow-hidden">
                  <div className="sm:flex sm:items-center px-6 py-4">
                    <img
                      className="block mx-auto sm:mx-0 sm:flex-shrink-0 h-24 w-24 rounded-full"
                      src="https://jojogan.desa.id/wp-content/uploads/2020/01/UNTUNG-1-scaled-1-400x400.jpg"
                      alt="Untung Profile"
                    />
                    <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
                      <p className="text-xl leading-tight">Untung</p>
                      <p className="text-sm text-gray-600">Sekretaris Desa</p>
                      <div className="mt-4 flex justify-center sm:justify-start">
                        <a
                          href="#"
                          className="mr-4 text-blue-500 hover:text-blue-600"
                        >
                          <FaFacebookSquare size="1.5em" />
                        </a>
                        <a
                          href="#"
                          className="mr-4 text-black hover:text-black/80"
                        >
                          <FaSquareXTwitter size="1.5em" />
                        </a>
                        <a
                          href="#"
                          className="text-pink-500 hover:text-pink-600"
                        >
                          <FaInstagramSquare size="1.5em" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="max-w-sm mx-auto bg-white shadow-lg border border-gray-300 rounded-lg overflow-hidden">
                  <div className="sm:flex sm:items-center px-6 py-4">
                    <img
                      className="block mx-auto sm:mx-0 sm:flex-shrink-0 h-24 w-24 rounded-full"
                      src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                      alt="Woman's Face"
                    />
                    <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
                      <p className="text-xl leading-tight">KPMD</p>
                      <p className="text-sm text-gray-600">KPMD IT</p>
                      <div className="mt-4 flex justify-center sm:justify-start">
                        <a
                          href="#"
                          className="mr-4 text-blue-500 hover:text-blue-600"
                        >
                          <FaFacebookSquare size="1.5em" />
                        </a>
                        <a
                          href="#"
                          className="mr-4 text-black hover:text-black/80"
                        >
                          <FaSquareXTwitter size="1.5em" />
                        </a>
                        <a
                          href="#"
                          className="text-pink-500 hover:text-pink-600"
                        >
                          <FaInstagramSquare size="1.5em" />
                        </a>
                      </div>
                    </div>
                  </div>
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
