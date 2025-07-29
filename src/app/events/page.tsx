"use client";
import Loader from "@/components/loader"; // Import the Loader component
import Navbar from "@/components/navbar1";
import { BackgroundBeams } from "@/components/ui/background_beams";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Content } from "../../../data/events.mjs";
import Footer from "../../components/footer";
import SkeletonLoader from "../../components/skeltonloader";
import {
  CardBody,
  CardContainer,
  CardItem,
} from "../../components/ui/sticky-scroll-reveal";

export default function ThreeDCardDemo() {
  const [loading, setLoading] = useState(true);
  const [showImage, setShowImage] = useState(false);
  const { scrollYProgress } = useScroll();
  useEffect(() => {
    // Simulate data fetching or any other asynchronous operation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulate a 1 second loading time

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(true); // Show image after 2 seconds
    }, 4000);

    return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />
      <motion.div
        style={{ scaleY: scrollYProgress }}
        className="fixed top-0 right-0 bottom-0 w-2 bg-custom-white origin-top z-50"
      />
      <BackgroundBeams />
      <div className="overflow-hidden min-h-screen bg-[#171616]">
        <div className="lg:text-7xl md:text-8xl text-5xl font-barlowb text-white lg:pt-16 lg:mx-20 mx-20 pt-16">
          EVENTS
        </div>
        <div className="border-t-2 border-gray-200 md:mx-20 lg:mx-20 mx-4 lg:mt-2"></div>
        <div className="snap-y snap-mandatory overflow-y-auto grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 ">
          {Content.map((item, index) => (
            <CardContainer
              key={index}
              className="snap-center inter-var flex-shrink-0 sm:h-auto"
            >
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[80%] sm:w-[30rem] h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-3xl font-fontsemi text-black dark:text-white"
                >
                  {item.title}
                </CardItem>

                <CardItem translateZ="100" className="w-full mt-4">
                  {!showImage ? (
                    <SkeletonLoader />
                  ) : (
                    <Image
                      src={item.image}
                      height="1000"
                      width="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  )}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-black font-actor text-1xl max-w-sm mt-2 dark:text-neutral-300"
                >
                  {item.description}
                </CardItem>

                <div className="flex justify-between items-center mt-10">
                  <CardItem
                    translateZ={20}
                    target="__blank"
                    className="px-4 py-2 rounded-xl text-1.3xl font-actor dark:text-white"
                  >
                    {item.sem}
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-1xl font-barlowb"
                  >
                    {item.last}
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
