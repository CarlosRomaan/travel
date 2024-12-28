import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-20 pb-32 md:gap:28 lg:py-20 xl:flex-row">
      <div className="hero-map" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image
          src="/camp.svg"
          alt="camp"
          height={50}
          width={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
        <h1 className="bold-52 lg:bold-88">Yosemite RV Resort</h1>
        {/*<p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible 
          beauty of nature. We can help you on an adventure around the world in just one app.
        </p>*/}

        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          Enjoy the beauty of nature with the Yosemite RV Resort. We provide a solution for 
          you to be able to use our application when climbing, yes offline maps you can use at any 
          time there is no signal at the location.
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5).fill(1).map((_, index) => (
              <Image
                key={index}
                src="/star.svg"
                alt="star"
                height={24}
                width={24}
              />
            ))}
          </div>

          <p className="bold-16 lg:bold-20">
            125k 
            <span className="regular-16 lg-regular-20 ml-1">Excellent Reviews</span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button
            type="button"
            title="Download App"
            variant="btn_green"
          />

          <Button
            type="button"
            title="How we work?"
            icon="/play.svg"
            variant="btn_white_text"
          />
        </div>
      </div>

      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Location</p>
              <Image
                src="/close.svg"
                alt="close"
                height={24}
                width={24}
              />
            </div>
            <p className="bold-20 text-white">Yosemite National Park</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Distance</p>
              <p className="bold-20 text-white">84.50 miles</p>
            </div>

            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Elevation</p>
              <p className="bold-20 text-white">3.25 km</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;