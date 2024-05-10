import React from "react";
import Layout from "./Layout";
import ProfileCard from "./ProfileCard";
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
  return (
    <>
      <Layout>
        <div className="grid grid-cols-1 mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-black opacity-80"></div>
            <div className="absolute inset-0 flex items-center text-slate-300">
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
          <div className="mx-5 sm:mx-10 mt-14">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:mx-0">
              <div>
                <h1 className="text-3xl text-slate-300">Profil Desa Dompyong Kulon</h1>
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
              <div>
                <img src={dompyong} className="rounded-lg h-auto" alt="" />
                {/* <div className="mb-3">
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
                </div> */}
              </div>
            </div>
          </div>
          <div className="mx-5 sm:mx-10 mt-14">
            <div className="mx-10 text-center mb-10 truncate text-slate-300">
              <h1 className="text-3xl">SOTK</h1>
              <span className="text-xl">
                Susunan Organisasi dan Tata Kerja Desa Dompyong Kulon
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:mx-0">
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
            </div>
          </div>
          <div className="mx-0 sm:mx-5 mt-14">
            <h1 className="text-3xl mb-10 text-center">Berita dan Sejarah Desa Dompyong</h1>
            <div className="flex justify-center items-center">
              <img src={PhotoSejarah} className="rounded-none sm:rounded-xl" alt="Sejarah" />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
