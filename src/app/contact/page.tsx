import React from "react";

const Contact = () => {
  return (
    <div className="mb-8">
      <section className="text-myBlackHead body-font relative">
        <div className="container px-5 py-5 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder={0}
              title="map"
              marginHeight={0}
              marginWidth={0}
              scrolling="no"
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=PIB%20Colony%20Karachi+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed
"
              style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
            />
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-myBlackHead tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">
                  House # N26 PIB Colony Karachi
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-myBlackHead tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="text-myBlackPara leading-relaxed">
                usmannaseem2005@email.com
                </a>
                <h2 className="title-font font-semibold text-myBlackHead tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed text-myBlackPara">+92 3190142526</p>
              </div>
            </div>
          </div>
          <div className="px-4 lg:w-1/3 md:w-1/2 bg-myWhite/30 border-2 shadow-lg border-myBlackPara/5 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="scroll-m-20 text-myBlackHead text-xl font-semibold tracking-tight first:mt-0">
            Get in Touch
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-4 mb-1 text-myBlackPara">
            Please provide your name, email, and a message (if any) below.
            </p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-myBlackPara">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-myWhite rounded border border-myBlackPara/20 focus:border-myBlackPara/80  text-base outline-none text-myBlackHead py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-myBlackPara"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-myWhite rounded border border-myBlackPara/20  focus:border-myBlackPara/80   text-base outline-none text-myBlackHead py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-myBlackPara"
              >
                Message (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-myWhite rounded border border-myBlackPara/20 focus:border-myBlackPara/80  h-32 text-base outline-none text-myBlackHead py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                defaultValue={""}
              />
            </div>
            <button className="text-myWhite bg-myBlackHead border-0 py-2 px-6  hover:bg-myBlackHead/80 rounded text-lg">
              Button
            </button>
            <p className="text-xs text-myBlackPara mt-3">
            Connect with us for the latest news and exclusive offers Thank you!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
