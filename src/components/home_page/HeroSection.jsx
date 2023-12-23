import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import hero_img1 from "../../assets/hero_img1.png";
import hero_img2 from "../../assets/hero_img2.jpeg";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const HeroSection = () => {
  return (
      <div className="relative text-white text-[20px] w-full max-w-[1360px] mx-auto">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          infiniteLoop={true}
          showIndicators={false}
          showStatus={false}
          showArrows={false}
          renderArrowPrev={(clickHandler, hasPrev) => (
            <div
              onClick={clickHandler}
              className="absolute right-[31px] md:right-[51px] bottom-1 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
            >
              <ArrowForwardIcon className="text-sm md:text-lg rotate-180"/>
            </div>
          )}
          renderArrowNext={(clickHandler, hasPrev) => (
            <div
            onClick={clickHandler}
            className="absolute right-0 bottom-1 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
            >
            <ArrowForwardIcon className="text-sm md:text-lg"/>
            </div>
          )}
        >
          <div>
            <img
              src={hero_img1}
              className="w-[1200px] h-[530px] aspect-[16/10] md:aspect-auto object-cover"
            />
            <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
              Shop Now
            </div>
          </div>
          <div>
            <img
              src={hero_img2}
              className="w-[1200px] h-[530px] aspect-[16/10] md:aspect-auto object-cover"
            />
            <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
              Shop Now
            </div>
          </div>
          {/* <div>
            <img
              src={hero_img3}
              className="aspect-[16/10] md:aspect-auto object-cover"
            />
            <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
              Shop Now
            </div>
          </div> */}
        </Carousel>
      </div>
  );
};

export default HeroSection;
