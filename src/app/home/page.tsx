"use client";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Contactus from "./contact";
import DomainPage from "./domains";

import Loader from "@/components/loader";
import { ImagesSlider } from "@/components/ui/image-slider";
import { motion, useScroll } from "framer-motion";
import navbarItems from "../../components/navbaritems";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full lg:hidden top-0 left-0 h-16 flex justify-between items-center p-4 bg-[#171616] z-50">
      <Link
        href="/"
        className="flex items-center text-white no-underline hover:text-gray-300"
      >
        <div className="mt-4">
          <Image
            src="/assets/images/util/iste_logo-01-removebg-preview.webp"
            width={60}
            height={40}
            alt="ISTE Logo"
          />
        </div>
        <div className="font-barlowb text-3xl -ml-2">ISTE</div>
      </Link>

      {/* Regular navbar items (hidden on mobile) */}
      <div className="hidden md:flex items-center font-actor text-1.3xl space-x-12">
        {navbarItems.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            className="text-white no-underline hover:text-gray-300"
          >
            {item.title}
          </Link>
        ))}
      </div>

      {/* Hamburger menu (visible on mobile) */}
      <div
        className={`md:hidden  flex flex-col justify-center items-center cursor-pointer transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
        onClick={toggleMenu}
      >
        <div
          className={`bg-white h-0.5 w-6 transition-transform duration-300 mb-1 ${isOpen ? "translate-y-1 rotate-30" : ""}`}
        />
        <div
          className={`bg-white h-0.5 w-6 transition-transform duration-300 mb-1 ${isOpen ? "opacity-0" : ""}`}
        />
        <div
          className={`bg-white h-0.5 w-6 transition-transform duration-300 ${isOpen ? "-translate-y-2 -rotate-90" : ""}`}
        />
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full h-screen bg-[#171616] z-50 md:hidden">
          <div className="flex flex-col px-[37%] space-y-2 pt-16">
            {navbarItems.map((item, index) => (
              <Link
                href={item.link}
                key={index}
                className="text-white text-2xl no-underline hover:text-gray-300"
                onClick={toggleMenu}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div className="flex flex-col items-center mt-16">
            <Image
              src="/assets/images/util/iste_logo-01-removebg-preview.webp"
              alt="Website Logo"
              width={150}
              height={80}
            />
            <p className="text-3xl lg:mb-2 mb-0 -mt-12 font-barlowb text-white">
              ISTE NITH
            </p>
            <hr className="w-3/4 lg:w-full border-white my-4 py-4" />
          </div>
        </div>
      )}
    </nav>
  );
};

const Homepage = () => {
  const pagenames = [
    { name: "HOME", href: "/home" },
    { name: "MEMBERS", href: "/members" },
    { name: "EVENTS", href: "/events" },
    { name: "GALLERY", href: "/gallery" },
    { name: "BLOGS", href: "/blogs" },
    { name: "PROJECTS", href: "/projects" },
  ];

  const [menu, setmenu] = useState(false);

  const imageUrl = [
    "/assets/images/util/Copy of DCS_0632 (1).webp",

    "/assets/images/aboutus/Hult_12N.webp",

    "/assets/images/aboutus/Technex 04.webp",
  ];

  const [loading, setLoading] = useState(true);

  const { scrollYProgress } = useScroll();
  useEffect(() => {
    // Simulate data fetching or any other asynchronous operation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulate a 1 second loading time

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-2 bg-custom-white origin-left z-50"
      />
      <div className="lg:h-[320rem]  bg-[#171616]  text-white">
        <div className="full pt-3  lg:pt-0">
          <Image
            src="/assets/images/util/iste_logo-01-removebg-preview.webp"
            height={200}
            width={200}
            quality={100}
            unoptimized={true}
            className=" -left-1 logo-44 relative hidden lg:block md:block w-20 h-auto z-50 text-white/70"
            alt="ISTE Logo"
          />
          {/*<Link href="https://prody.istenith.com/" target="_blank" rel="noopener noreferrer">
  <div className='text-white text-4xl font-barlowb absolute lg:right-8 lg:top-7   top-20'>
    <span className="coming-soon text-4xl">PRODYOGIKI'25</span>
  </div>
</Link>

<style jsx>{`
  .coming-soon {
    display: inline-block;
    padding-left: 10px;
    animation: marquee 3s linear infinite;
  }

  @keyframes marquee {
    0% {
      transform: translateX(50%);
    }
    100% {
      transform: translateX(0%);
    }
  }

  @media (min-width: 1024px) {
    .coming-soon {
      animation: marqueeLarge 5s linear infinite;
    }

    @keyframes marqueeLarge {
      0% {
        transform: translateX(200%);
      }
      100% {
        transform: translateX(-200%);
      }
    }
  }
`}</style>
*/}

          <div className="text-[#ffffff] font-actor lg:pt-0 md:pt-0 pt-28 ml-nith text-7xl">
            NITH
          </div>

          <div className="flex flex-col items-center justify-center absolute top-iste left-1/4">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="flex flex-col items-center justify-center"
            >
              <motion.h1
                className="text-iste font-barlowlight lg:-ml-[30%] lg:mt-0 -ml-[40%] -mt-12 text-4xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                ISTE
              </motion.h1>
              <motion.h1
                className="text-white/30 font-barlowlight text-iste lg:-ml-[30%] -ml-[40%] -mt-iste2 "
                style={{ clipPath: "inset(60% 0 0 0)" }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
              >
                ISTE
              </motion.h1>
              <motion.h1
                className="text-white/10 font-barlowlight text-iste lg:-ml-[30%] -ml-[40%] -mt-iste3 "
                style={{ clipPath: "inset(60% 0 0 0)" }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 1.2 }}
              >
                ISTE
              </motion.h1>
            </motion.div>
          </div>
          <div className="relative bg-black">
            {/* Hamburger butt
      on for mobile view */}
            <Navbar />

            {/* Overlay background for mobile menu */}
            {menu && (
              <div
                className="fixed inset-0  bg-[#171616] z-0"
                onClick={() => setmenu(false)}
                style={{ pointerEvents: "none" }} // Prevents the overlay from blocking clicks
              ></div>
            )}

            {/* Navigation menu */}
            <nav
              className={`absolute lg:top-44 h-100vh top-20 lg:right-20 right-auto mx-[30%] lg:mx-0  text-white lg:flex md:space-y-4 ${menu ? "block bg-1e1e1e p-4" : "hidden"}`}
            >
              <ul className="lg:block flex flex-col md:space-y-8 spa -mt-20  md:flex md:items-center">
                {pagenames.map((item, index) => (
                  <motion.li
                    key={item.name}
                    className="relative group text-3xl flex items-center"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  >
                    <Link href={item.href}>
                      <div className="text-white/60 space-x-5 font-actor hover:text-white transition-transform duration-300 group-hover:-translate-y-1.5 mr-4 cursor-pointer">
                        {item.name}
                      </div>
                    </Link>

                    <span className="hidden md:flex w-24 h-px bg-white"></span>
                    <span className="hidden md:flex w-3 h-3 bg-white rounded-full"></span>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="lg:mt-[45rem] md:mt-[47rem] mt-[35rem]  relative text-white">
          <div className="relative mt-40">
            <div className="flex flex-col overflow-hidden"></div>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl mb-8 font-barlowmedium pt-16 pb-4 lg:text-[88px] text-center"
            >
              ABOUT US
            </motion.div>

            <div className="px-[.5%]">
              <ImagesSlider
                className="lg:h-[40rem] border-3 rounded-md h-[20rem] w-full  shadow-neon p-6"
                images={imageUrl}
              >
                <motion.div
                  initial={{
                    opacity: 0,
                    y: -80,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                  className="z-50 flex flex-col justify-center items-center opacity-50 lg:px-0 lg:mx-auto lg:w-full lg:h-full md:w-full md:h-full   md:px-0 px-[5%]  "
                ></motion.div>
              </ImagesSlider>
            </div>

            <div className="absolute inset-0 -mt-12 flex items-center justify-center"></div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl mb-8 font-barlowmedium pt-16 pb-4 lg:text-[88px] text-center"
          >
            <div className="flex flex-col items-center justify-center min-h-screen lg:mt-8 md:-mt-24 mt-8">
              <div className="lg:mx-[15%] lg:px-8 lg:py-7  mx-[5%] bg-[rgba(255,255,255,0.25)] shadow-custom backdrop-blur-2xl rounded-lg border border-custom mt-4 sm:mt-aboutcontent p-3">
                <p className="text-white font-actor text-center text-1.5xl sm:text-left md:text-2xl lg:text-3xl ">
                  The Indian Society for Technical Education (ISTE) is the
                  leading National Professional non-profit making Society for
                  the Technical Education System in our country. The Students
                  Chapter NIT Hamirpur is the representative at NIT Hamirpur to
                  promote such technical culture in our college. We at NITH,
                  conduct various events within the college and also participate
                  in inter-college fests.
                </p>
              </div>

              <div className="relative mt-64 ml-72 h-80 w-auto">
                <div className="relative inset-grey  opacity-70 z-0 h-96 w-56 right-20 top-20  hidden sm:block "></div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className=""
        >
          <DomainPage />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 170 }}
          whileInView={{ opacity: 1, y: -50 }}
          transition={{ duration: 0.4 }}
          className=""
        >
          <Contactus />
        </motion.div>
        <div className="lg:pt-40 pt-0"></div>
        <Footer />
      </div>
    </>
  );
};

export default Homepage;
