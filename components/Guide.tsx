import Image from "next/image";

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <Image
          src="/camp.svg"
          alt="camp"
          height={50}
          width={50}
        />

        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          We are here for you
        </p>

        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
            Guide you to your path
          </h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            We provide a solution for you to be able to use our application when climbing, 
            yes offline maps you can use at any time there is no signal at the location.
            Invite your friends to climb together and get interesting offers from us.
          </p>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full">
        <Image
          src="/yosemite.jpg"
          alt="yosemite"
          height={580}
          width={1440}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />

        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image
            src="/meter.svg"
            alt="meter"
            height={158}
            width={16}
            className="h-full w-auto"
          />

          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className="flextBetween w-full">
                <p className="regular-16 text-gray-20">Destination</p>
                <p className="bold-16 text-green-50">1:45 min</p>
              </div>
              <p className="bold-20 mt-2">Yosemite National Park</p>
            </div>

            <div className="flex w-full flex-col">
              <p className="regular-16 text-gray-20">Start track</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">Modesto, CA</h4>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Guide;