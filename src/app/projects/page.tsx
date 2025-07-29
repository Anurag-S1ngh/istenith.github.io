"use client";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../globals.css";
import { motion } from "framer-motion";
import Navbar from "../../components/navbar1";
import Footer from "../../components/footer";
import { topics } from "../../../data/project_data.mjs";
import Link from "next/link";
import Image from "next/image";
import SkeletonLoader from "../../components/skeltonloader";
import Loader from "@/components/loader";

const CustomPrevArrow: React.FC<any> = (props) => (
  <div onClick={props.onClick} className="slick-prev">
    Previous
  </div>
);

const CustomNextArrow: React.FC<any> = (props) => (
  <div onClick={props.onClick} className="slick-next">
    Next
  </div>
);

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  prevArrow: <CustomPrevArrow />,
  nextArrow: <CustomNextArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Projects = () => {
  const [_, setLoading] = useState(true);
  const [showImage, setShowImage] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Handle the main loader (appears on page refresh)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Main loader disappears after 1 second
    }, 1000);

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleImageLoad = () => {
    setLoading(false);
    setShowImage(true);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />
      <div className="lg:text-[80px] md:text-8xl text-5xl font-barlowb text-white lg:pt-20 lg:mx-20 lg:pl-2 pl-0 mx-16 pt-20">
        PROJECTS
      </div>
      <div className="border-t-2 border-gray-200 md:mx-20 lg:mx-24 mx-4 lg:mt-0"></div>
      <div className="lg:w-9/12 md:w-8/12 sm:w-9/12 sm:m-auto lg:m-auto mx-6">
        <div className="lg:mt-16 md:mt-20 mt-12">
          <div className="hidden md:block">
            <Slider {...settings}>
              {topics.map((d: any) => (
                <motion.div
                  key={d._id}
                  className="bg-custom-white md:h-[600px] h-[450px] lg:w-[550px] lg:h-[500px] text-black rounded-xl"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.3 }}
                >
                  <div className="flex flex-col items-center justify-center p-2">
                    <p className="lg:text-3xl font-actor md:text-3xl text-3xl md:mt-7 lg:mt-4 text-text-black mt-5">
                      {d.title.toUpperCase()}
                    </p>
                    <div className="h-48 w-80 transition-transform duration-500 ease-in-out my-4 hover:scale-105">
                      {!showImage ? (
                        <SkeletonLoader />
                      ) : (
                        <Image
                          quality={100}
                          unoptimized={true}
                          width={64}
                          height={32}
                          src={d.img}
                          alt=""
                          className="w-full h-full rounded-xl object-cover group-hover:scale-[1.02] group-hover:brightness-[40%] duration-300"
                          onLoad={handleImageLoad}
                        />
                      )}
                    </div>
                    <p className="lg:text-1xl font-actor md:mt-10 px-3 sm:py-7 pt-5 lg:py-0 md:py-0 lg:mt-0 md:px-8 text-text-black lg:px-7 lg:line-clamp-7">
                      {d.description}
                    </p>
                    <button className="bg-custom-black text-white fixed bottom-4 text-lg md:fixed md:bottom-6 font-actor px-6 py-1 rounded-xl lg:fixed lg:bottom-6">
                      <Link href={d.link}> Read More </Link>
                    </button>
                  </div>
                </motion.div>
              ))}
            </Slider>
          </div>
          <div className="md:hidden">
            {topics.map((d: any, index: number) => (
              <motion.div
                key={d._id}
                className="bg-custom-white text-black rounded-xl mb-6 p-4 transition-transform duration-300 ease-in-out hover:scale-105"
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <div className="flex flex-col items-center justify-center gap-4 p-2">
                  <p className="text-2xl font-actor text-text-black mb-3">
                    {d.title.toUpperCase()}
                  </p>
                  <div className="h-44 w-full transition-transform duration-500 ease-in-out hover:scale-105">
                    {!showImage ? (
                      <SkeletonLoader />
                    ) : (
                      <Image
                        quality={100}
                        unoptimized={true}
                        width={64}
                        height={32}
                        src={d.img}
                        alt=""
                        className="w-full h-full rounded-xl object-cover group-hover:scale-[1.02] group-hover:brightness-[40%] duration-300"
                        onLoad={handleImageLoad}
                      />
                    )}
                  </div>
                  <p className="text-base font-actor text-text-black mb-3">
                    {d.description}
                  </p>
                  <button className="bg-custom-black text-white text-lg font-actor px-6 py-2 rounded-xl transition-transform duration-300 ease-in-out hover:scale-105">
                    Read More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="lg:h-20 h-0"></div>
      </div>
      <Footer />
    </>
  );
};

export default Projects;
