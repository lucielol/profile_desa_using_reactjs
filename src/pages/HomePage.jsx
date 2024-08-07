import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import News from "../components/News";
import Layout from "../components/Layout";
import Slider from "react-slick";
import { FaArrowUp } from "react-icons/fa6";
import Gallery from "../components/Gallery";
import ProfileCard from "../components/ProfileCard";
import ProgressBar from "../components/ProgressBar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PhotoIman from "../assets/images/iman.png";
import PhotoWawan from "../assets/images/wawan.png";
import PhotoRawuh from "../assets/images/rawuh.jpeg";
import PhotoSejarah from "../assets/images/sejarah.png";
import PhotoShahrir from "../assets/images/SYAHRIR.png";
import dompyong from "../assets/images/dompyong-kulon.jpg";
import PhotoSlamet from "../assets/images/slametwiyadi.jpeg";
import PhotoAmanTujaha from "../assets/images/amantujaha.png";
import PhotoKhumaidi from "../assets/images/Khumaidi_kuwu.png";

const Home = () => {
  const [showGoToTop, setShowGoToTop] = useState(false);
  const [progress, setProgress] = useState([]);
  const location = useLocation();
  const state = location.state;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    centerPadding: "60px",
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  const images = [
    {
      src: "https://fastly.picsum.photos/id/793/536/354.jpg?hmac=XIFVAzAu0yVaOvzskKwSbjpxtJ4eBif_HtCf92kxsMs",
      alt: "Foto 1",
    },
    {
      src: "https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU",
      alt: "Foto 2",
    },
    {
      src: "https://fastly.picsum.photos/id/6/5000/3333.jpg?hmac=pq9FRpg2xkAQ7J9JTrBtyFcp9-qvlu8ycAi7bUHlL7I",
      alt: "Foto 3",
    },
    {
      src: "https://fastly.picsum.photos/id/4/5000/3333.jpg?hmac=ghf06FdmgiD0-G4c9DdNM8RnBIN7BO0-ZGEw47khHP4",
      alt: "Foto 4",
    },
    {
      src: "https://fastly.picsum.photos/id/8/5000/3333.jpg?hmac=OeG5ufhPYQBd6Rx1TAldAuF92lhCzAhKQKttGfawWuA",
      alt: "Foto 5",
    },
    {
      src: "https://fastly.picsum.photos/id/26/4209/2769.jpg?hmac=vcInmowFvPCyKGtV7Vfh7zWcA_Z0kStrPDW3ppP0iGI",
      alt: "Foto 6",
    },
  ];

  const getProgress = async () => {
    const response = await axios.get("api/progress");
    setProgress(response.data);
  };

  useEffect(() => {
    getProgress();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setShowGoToTop(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (state && state.id) {
      const { id } = state;
      scrollTo(id);
      location.state = null;
    }
  }, [state, location]);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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
          <div id="profile" className="mb-24"></div>
          <div className="mx-5 sm:mx-10">
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4 sm:mx-0">
              <div>
                <h1 className="text-3xl">Profil Desa Dompyong Kulon</h1>
                <p className="mt-5 italic text-pretty">
                  Desa Dompyong Kulon adalah salah satu desa di Kecamatan Gebang
                  yang mempunyai luas wilayah 234,47 Ha , 136 Ha Tanah
                  Pertanian,30,47 Ha dan 68 Ha Perumahan Tanah Bubulak dan
                  Jumlah penduduk sebanyak 4.343 jiwa yang terdiri dari 2.119
                  laki-laki dan 2.096 perempuan dengan jumlah Kepala Keluarga
                  sebanyak 1461 KK. Sedangkan jumlah Keluarga Miskin (Gakin)
                  1201 KK dengan prosentasi 10 % dari jumlah keluarga yang ada
                  di Kec. Gebang
                </p>
                <p className="mt-4">
                  Batas-batas administratif pemerintah Kecamatan Gebang sebagai
                  berikut :
                </p>
                <ul className="ms-8 list-disc">
                  <li>Sebelah Utara : Desa Kalimaro Kec. Gebang</li>
                  <li>Sebelah Timur : Desa Dompyongwetan Kec. Gebang</li>
                  <li>Sebelah Selatan : Desa Genbongan Mekar Kec. Babakan</li>
                  <li>Sebelah Barat : Desa Getrakmoyan Kec. Pangenan</li>
                </ul>
                <p className="mt-4">
                  Dilihat dari topografi dan kontur tanah, Kecamatan Gebang
                  secara umum berupa Dataran yang berada pada ketinggian antara
                  1 s/d 1,5m di atas permukaan air laut. Dengan suhu rata-rata
                  berkisar antara 28 s/d 32.° C. terdiri dari 4 (Empat) Dusun, 4
                  (Enam) RW dan 16 (Enam Belas) RT. Orbitasi dan jarak tempuh
                  dari ibu kota kecamatan 3 km dengan waktu tempuh 15 menit
                  dengan menggunakan sepeda motor,dan dari ibu kota kabupaten 45
                  km, dengan waktu tempuh ± 60 menit dengan menggunakan sepeda
                  motor.
                </p>
              </div>
              <div className="mb-[400px] md:mb-0 h-full">
                <div className="relative h-full w-full">
                  <div
                    className="absolute top-0 left-0 w-full h-full bg-cover bg-center rounded-xl"
                    style={{ backgroundImage: `url(${dompyong})` }}
                  ></div>
                  <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>
                  <div className="absolute w-full top-0 p-6 text-white h-full flex flex-col justify-between z-20">
                    {progress.map((value, index) => (
                      <div key={index} className="mb-3">
                        <ProgressBar
                          value={value.percentage}
                          title={value.title}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-7 sm:mx-10 mt-24">
            <div className="text-center mb-10">
              <h1 className="text-3xl">SOTK</h1>
              <span className="text-xl">
                Susunan Organisasi dan Tata Kerja Desa Dompyong Kulon
              </span>
            </div>
            <Slider {...settings}>
              <div>
                <ProfileCard
                  image={PhotoKhumaidi}
                  name="KHUMAIDI"
                  description="Kuwu"
                />
              </div>
              <div>
                <ProfileCard
                  image={PhotoAmanTujaha}
                  name="AMAN TUJAHA"
                  description="Sekretaris Desa"
                />
              </div>
              <div>
                <ProfileCard
                  image={PhotoSlamet}
                  name="slamet wiyadi"
                  description="Kaur Keuangan"
                />
              </div>
              <div>
                <ProfileCard
                  image={PhotoShahrir}
                  name="syahrir ramadhan"
                  description="Kaur Perencanaan"
                />
              </div>
              <div>
                <ProfileCard
                  image={PhotoShahrir}
                  name="syahrir ramadhan"
                  description="Kaur Perencanaan"
                />
              </div>
              <div>
                <ProfileCard
                  image={PhotoWawan}
                  name="wawan munawar"
                  description="Kaur Tata Usaha & Umum"
                />
              </div>
              <div>
                <ProfileCard
                  image={PhotoIman}
                  name="iman sumantri"
                  description="Kasi Pemerintahan"
                />
              </div>
              <div>
                <ProfileCard
                  image={PhotoRawuh}
                  name="rawuh"
                  description="Kasi Kesejahteraan"
                />
              </div>
            </Slider>
          </div>
          <div id="infografis" className="mb-24"></div>
          <div className="mx-0 sm:mx-5">
            <h1 className="text-3xl mb-10 text-center">
              Berita dan Sejarah Desa Dompyong
            </h1>
            <div className="flex justify-center items-center">
              <img
                src={PhotoSejarah}
                className="rounded-none sm:rounded-xl"
                alt="Sejarah"
              />
            </div>
          </div>
          <div id="gallery" className="mb-24"></div>
          <div className="mx-5 sm:mx-10">
            <h1 className="text-3xl text-center">
              Gallery Desa Dompyong Kulon
            </h1>
            <div className="mt-10">
              <Gallery images={images} />
            </div>
          </div>
          <div id="news" className="mb-24"></div>
          <div className="mx-5 sm:mx-10">
            <div className="text-center">
              <h1 className="text-3xl">SARPRAS</h1>
              <span className="text-xl">
                Sarana dan Prasarana Desa Dompyong Kulon
              </span>
            </div>
            <div className="mt-10">
              <News />
            </div>
          </div>
        </div>

        {showGoToTop && (
          <button
            className="fixed bottom-10 right-6 sm:right-10 bg-gray-800/70 border border-gray-600/40 shadow-lg text-white p-2 rounded-full hover:bg-gray-700 transition-colors duration-300 backdrop-blur-md z-20"
            onClick={scrollToTop}
          >
            <FaArrowUp />
          </button>
        )}
      </Layout>
    </>
  );
};

export default Home;
