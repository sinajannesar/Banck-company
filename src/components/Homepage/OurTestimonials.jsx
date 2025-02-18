import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import quot from "../../assets/dokhat.png";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useRef } from "react";

export default function OurTestimonials() {
  const testimonials = [
    {
      text: "I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.",
      author: "Sara T",
    },
    {
      text: "Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease.",
      author: "John D",
    },
    {
      text: "Stay connected to your finances on the go with our user-friendly mobile banking app. Easily manage your accounts, deposit checks, and make payments from your smartphone or tablet.",
      author: "Emily G",
    },
    {
      text: "Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease.",
      author: "John D",
    },
    {
      text: "Stay connected to your finances on the go with our user-friendly mobile banking app. Easily manage your accounts, deposit checks, and make payments from your smartphone or tablet.",
      author: "Emily G",
    },
  ];

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative w-full ">
      <div className="flex flex-col lg:flex-row  items-center justify-center lg:gap-28 gap-1 ">
        <div className="mt-36 flex flex-col lg:pb-20 ">
          <h1 className="text-5xl text-white flex sm:items-center sm:justify-center lg:justify-start lg:text-left pb-4">
            Our <span className="text-lime-400"> Products</span>
          </h1>
          <p className="text-neutral-300 z-20">
            Discover a range of comprehensive and customizable banking products
            at YourBank, designed to suit your <br /> unique financial needs and
            aspirations
          </p>
        </div>
        <div className=" flex  sm:flex-row bg-neutral-900 rounded-full text-neutral-200 p-2 mt-20  items-center justify-center gap-4 sm:space-x-4">
          <button className="hover:bg-lime-400 hover:text-neutral-900 py-3 px-6 sm:p-4 rounded-full hover:font-semibold   sm:text-sm lg:text-lg">
            For Individuals
          </button>
          <button className="hover:bg-lime-400 hover:text-neutral-900 py-3 px-6 sm:p-4 rounded-full hover:font-semibold w-full sm:w-auto">
            For Businesses
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden mt-6">
        <SwiperComponent>
          {testimonials.map((item, index) => (
            <SwiperSlide key={index} className="text-center text-gray-300">
              <div className="bg-neutral-950 rounded-xl p-6 md:p-10 max-w-lg mx-auto">
                <img src={quot} alt="quote" className="mx-auto mb-4" />
                <p className="text-sm md:text-base">{item.text}</p>
                <p className="text-lime-400 font-semibold mt-4">
                  {item.author}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </SwiperComponent>

        <div
          ref={prevRef}
          className=" rounded-full border border-neutral-800 bg-neutral-900 p-3 absolute top-1/2 left-8 -translate-y-1/2 prev text-lime-400 cursor-pointer text-3xl z-10 sm: "
        >
          <GoArrowLeft />
        </div>
        <div
          ref={nextRef}
          className=" absolute rounded-full border border-neutral-800 bg-neutral-900 p-3  top-1/2 right-8 -translate-y-1/2 next text-lime-400 cursor-pointer text-3xl z-10"
        >
          <GoArrowRight />
        </div>
      </div>
    </div>
  );
}

//https://swiperjs.com/react
//https://swiperjs.com/swiper-api#navigation
const SwiperComponent = ({ children }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, EffectCoverflow]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        effect="coverflow"
        coverflowEffect={{
          rotate: 10,
          stretch: 50,
          depth: 0,
          modifier: 1,
          slideShadows: false,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
          enabled: true,
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
          1280: { slidesPerView: 3 },
        }}
        className="relative"
      >
        {children}
      </Swiper>

      {/* Navigation Buttons */}
      <button
        ref={prevRef}
        className="absolute left-0 top-1/2 z-10 -translate-y-1/2 transform bg-white p-2 shadow-md"
        aria-label="Previous slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button
        ref={nextRef}
        className="absolute right-0 top-1/2 z-10 -translate-y-1/2 transform bg-white p-2 shadow-md"
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
};
