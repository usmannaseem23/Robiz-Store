import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div>
      <div className="text-center mt-10">
        <h1 className="text-myBlackHead scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          About Us
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
      </div>
      {/* another */}
      <div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-5 mb-5 mx-auto flex flex-col">
            <div className="lg:w-5/6 mx-auto">
              {/* <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="https://dummyimage.com/1200x500"
                />
              </div> */}
              <div className="flex flex-col sm:flex-row mt-10">
                <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                  <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                <Image src={"/pic/pro.png"} alt="shaf" width={100} height={100} className="rounded-full"/>
                  </div>
                  <div className="flex flex-col items-center text-center justify-center">
                    <h2 className="font-medium title-font mt-4 text-gray-900 text-lg hover:text-myOrange duration-200">
                      Muhammad Usman Naseem
                    </h2>
                    <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4" />
                    <p  className="text-base font-normal tracking-tight text-myBlackPara hover:text-myBlackPara/70 text-left md:text-left sm:text-left">
                    I am Muhammad Usman Naseem, a professional Front-End Developer with a strong passion for AI and emerging technologies. I excel in designing and developing visually captivating, user-centric websites, seamlessly blending creativity with technical expertise to deliver exceptional digital experiences 
                    </p>
                  </div>
                </div>
                
                <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                  <h1 className="scroll-m-20 text-2xl font-bold tracking-tight text-myBlackHead mb-3 hover:text-myOrange duration-200">
                    Welcome to Robiz
                  </h1>
                  <p className="text-base font-normal tracking-tight text-myBlackPara hover:text-myBlackPara/70 text-left md:text-left sm:text-left">
                    &#160;&#160;&#160;At Robiz, we&apos;re passionate about helping
                    you express your personal style through our unique and
                    affordable clothing. Our brand is built on the belief that
                    fashion should be accessible to everyone, without
                    compromising on quality or individuality.
                  </p>
                  <h1 className="scroll-m-20 text-2xl font-bold tracking-tight text-myBlackHead mb-3 mt-3 hover:text-myOrange duration-200">
                    Our Story
                  </h1>
                  <p className="text-base font-normal tracking-tight text-myBlackPara hover:text-myBlackPara/70 text-left md:text-left sm:text-left">
                    &#160;&#160;&#160;Robiz was founded on 2024 with a vision to
                    revolutionize the way people shop for clothing online. Our
                    team of fashion enthusiasts and industry experts came
                    together to create a platform that offers the latest trends,
                    must-have essentials, and statement pieces that make you
                    stand out from the crowd.
                  </p>
                  <h1 className="scroll-m-20 text-2xl font-bold tracking-tight text-myBlackHead mb-3 mt-3 hover:text-myOrange duration-200">
                    Our Mission
                  </h1>
                  <p className="text-base font-normal tracking-tight text-myBlackPara hover:text-myBlackPara/70 text-left md:text-left sm:text-left">
                    &#160;&#160;&#160;Our mission is to provide exceptional
                    customer service, high-quality products, and an unparalleled
                    shopping experience that makes you feel confident and
                    stylish. We strive to be the go-to destination for
                    fashion-conscious individuals who demand the best.
                  </p>
                  <h1 className="scroll-m-20 text-2xl font-bold tracking-tight text-myBlackHead mb-3 mt-3 hover:text-myOrange duration-200">
                    Our Values
                  </h1>
                  <p className="text-base font-normal tracking-tight text-myBlackPara hover:text-myBlackPara/70 text-left md:text-left sm:text-left">
                    &#160;&#160;&#160;Quality: We&apos;re committed to delivering
                    high-quality products that meet our high standards. Style:
                    We believe in empowering individuality through fashion.
                    Accessibility: We strive to make fashion accessible to
                    everyone, regardless of budget or location.
                    Customer-centricity: Your satisfaction is our top priority.
                  </p>
                  <h1 className="scroll-m-20 text-2xl font-bold tracking-tight text-myBlackHead mb-3 mt-3 hover:text-myOrange duration-200">
                    Join the Robiz Community{" "}
                  </h1>
                  <p className="text-base font-normal tracking-tight text-myBlackPara hover:text-myBlackPara/70 text-left md:text-left sm:text-left">
                    &#160;&#160;&#160;Stay tuned for new arrivals, exclusive
                    promotions, and style tips by following us on social media.
                    Share your Robiz style with us and become part of our
                    vibrant community! Feel free to modify this draft to fit
                    your brand&apos;s tone and voice. Good luck with your website!
                  </p>
                  <Link href={"https://www.linkedin.com/in/muhammad-usman-naseem-295720271/"} className="text-indigo-500 inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
