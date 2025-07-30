import Lottie from "lottie-react";
import animatiomcall from "./call3.json";
import animationcontact from "./contact7.json";
import animatiomcontact from "./mail1.json";
import animationmap from "./map2.json";
export default function contact() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#171616] mt-20 lg:mt-16 text-white ">
        <h1 className=" text-5xl lg:text-[88px] md:text-[70px] font-barlowmedium mb-12">
          CONTACT
        </h1>
        <div className="  w-[74%] text-1.2xl mx-[13%] lg:text-[32px] md:text-[24px] lg:mx-[5%] lg:w-[85%] md:w-[85%]  text-[#FFFFFF]  mb-0 lg:mb-0  font-actor">
          Have a question or need assistance? Our team is always ready to help.
          Feel free to reach out, and we will be delighted to aid you by
          providing heartfelt support.
        </div>

        <div className="w-[80%] mx-[10%] lg:w-[30%] md:w-[40%] ">
          {" "}
          <Lottie animationData={animationcontact} />
        </div>
      </div>

      <footer className="  bg-[#171616] z-50">
        <div className=" flex flex-col md:flex-row lg:flex-row w-full lg:px-28 px-0 flex-wrap justify-between lg:-mt-24  md:-mt-60 -mt-16 ">
          <div className=" flex lg:flex-row  lg:mx-20 mx-[20%]   md:mx-[24%] items-center">
            <div className="lg:h-20 lg:w-20 md:h-28 md:w-28 h-20 w-20">
              {" "}
              <Lottie animationData={animationmap} />
            </div>
            <div className="lg:ml-8 ml-8 md:ml-20">
              <p className="text-1xl lg:text-1.5xl md:text-1.5xl  font-barlow">
                Address
              </p>
              <p className="text-1xl   lg:text-1.5xl md:text-1.5xl font-barlow">
                NIT Hamirpur
                <br />
                Himachal Pradesh,
                <br /> India, 177005
              </p>
            </div>
          </div>
          <div className=" flex lg:flex-row  lg:mx-12 mx-[20%] md:mt-12 lg:mt-0 mt-7 md:mx-[24%] items-center ">
            <div className="lg:h-16 lg:w-16 md:h-24 md:w-24 h-16 w-16">
              {" "}
              <Lottie animationData={animatiomcall} />
            </div>
            <div className=" ml-10 lg:ml-8 md:ml-24">
              <p className="text-1xl lg:text-1.5xl md:text-1.5xl font-barlow">
                Phone
              </p>
              <p className="text-1xl lg:text-1.5xl md:text-1.5xl font-actor">
                +91 8580788014
              </p>
            </div>
          </div>
          <div className="lg:mr-20 flex lg:flex-row mt-7 lg:mx-12 md:mx-[24%] mx-[20%] items-center">
            <div className="lg:h-28 lg:w-28  md:h-40 md:w-40 h-28 w-28  -ml-6">
              {" "}
              <Lottie animationData={animatiomcontact} />
            </div>
            <div className="lg:ml-8 ml-4 md:ml-12 ">
              <p className="text-1xl  lg:text-1.5xl md:text-1.5xl font-barlow ">
                Email
              </p>
              <p className="text-1xl lg:text-1.5xl md:text-1.5xl font-barlow ">
                iste@nith.ac.in
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

