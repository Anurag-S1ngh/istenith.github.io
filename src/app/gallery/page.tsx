"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  ApolloClient,
  InMemoryCache,
  useQuery,
  gql,
  ApolloProvider,
} from "@apollo/client";
import Navbar from "@/components/navbar1";
import Footer from "../../components/footer";
import Loader from "@/components/loader";

import { motion, useScroll } from "framer-motion";
const client = new ApolloClient({
  uri:
    process.env.NEXT_PUBLIC_GRAPH_QL_URI ||
    "https://images.istenith.com/graphql/",
  cache: new InMemoryCache(),
});

const GET_EVENTS = gql`
  query GetEvents {
    gallery {
      image
      event
      set
      desc
      title
    }
  }
`;

interface GalleryItem {
  image: string;
  event: string;
  set: string;
  title: string;
  desc: string;
}

interface GetEventsData {
  gallery: GalleryItem[];
}

const Gallery: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true); // Maintain loading state

  const {
    loading: graphqlLoading,
    error,
    data,
  } = useQuery<GetEventsData>(GET_EVENTS, {
    client,
    fetchPolicy: "cache-first",
  });
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    // Simulate data fetching or any other asynchronous operation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Simulate a 1-second loading time

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  if (isLoading || graphqlLoading) {
    // Check both loading states
    return <Loader />;
  }

  if (error) return <p>Error: {error.message}</p>;

  const set1 = data?.gallery.filter((item) => item.set === "set1") || [];

  return (
    <>
      <Navbar />
      <motion.div
        style={{ scaleY: scrollYProgress }}
        className="fixed top-0 right-0  bottom-0 w-2 bg-custom-white origin-top z-50"
      />
      <div className="background-color: #171616; text-white min-h-screen">
        <div className="lg:text-7xl md:text-8xl text-5xl font-barlowb text-white lg:pt-16 lg:mx-24 mx-20 pt-16">
          GALLERY
        </div>
        <div className="border-t-2 border-gray-200 md:mx-20 lg:mx-24 mx-7 lg:mt-2"></div>
        <div className="grid grid-cols-2 sm:grid-cols-8 sm:grid-rows-21 lg:h-[1950px] h-[3200px] mt-8 sm:mx-24 mx-6 gap-3">
          {set1.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: i * 0.2 }}
              className={`border-2 rounded-xl flex flex-col relative group items-center justify-center
                ${i === 2 || i === 9 || i === 16 || i === 3 || i === 10 || i === 17 ? "sm:col-span-2 col-span-1" : ""}
                ${i === 0 || i === 7 || i === 14 ? "sm:col-span-2 col-span-2" : ""}
                ${i === 6 || i === 13 || i === 20 ? "sm:col-span-3 col-span-2" : ""}
                ${i === 1 || i === 8 || i === 15 || i === 4 || i === 11 || i === 18 ? "sm:col-span-4 col-span-1" : ""}
                ${i === 5 || i === 12 || i === 19 ? "sm:col-span-3 col-span-1" : ""}
                ${i === 0 || i === 7 || i === 14 || i === 1 || i === 8 || i === 15 ? "sm:row-span-3" : ""}
                ${i === 2 || i === 9 || i === 16 ? "sm:row-span-5" : ""}
                ${i === 3 || i === 10 || i === 17 ? "sm:row-span-4 row-span-2" : ""}
                ${i === 4 || i === 11 || i === 18 || i === 12 || i === 19 || i === 5 || i === 6 || i === 13 || i === 20 ? "sm:row-span-2" : ""}
              `}
            >
              <Image
                quality={100}
                unoptimized={true}
                width={250}
                height={250}
                src={item.image}
                alt=""
                className="w-full h-full rounded-xl object-cover group-hover:scale-[1.02] group-hover:brightness-[40%] duration-300"
              />
              <div className="absolute bottom-0 left-0 p-1 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
                <div className="font-barlowb md:text-xl text-[14px]">
                  {item.title}
                </div>
                <div className="font-actor md:text-lg text-[12px]">
                  {item.desc}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="lg:h-0"></div>
      </div>
      <Footer />
    </>
  );
};

const GalleryWithApollo: React.FC = () => (
  <ApolloProvider client={client}>
    <Gallery />
  </ApolloProvider>
);

export default GalleryWithApollo;
