function Intro() {
  return (
    <section className=" sm:px-20 sm:py-14 lg:px-40 px-6 py-16">
      <div className=" w-full h-full flex">
        <div className="w-[20px] sm:w-[90px] lg:w-[150px] border-solid">
          <h2 className="font-semibold text-[25px]">About</h2>
        </div>

        <div className="flex-1 pt-14 max-w-2xl">
          <p className="tracking-wider sm:text-[16px] text-[14px] lg:leading-8 leading-7">
            A{" "}
            <span className="text-gray-200 font-medium text-[16px] lg:text-[19px]">
              self-taught{" "}
            </span>
            Front-end developer from{" "}
            <span className="text-gray-200 font-medium text-[16px] lg:text-[19px]">
              India
            </span>
            , who has a additional background in{" "}
            <span className="text-gray-200 font-medium text-[16px] lg:text-[19px]">
              Biology
            </span>{" "}
            and enthusiasm for learning new skills and becoming a better
            Frontend developer, I'm a design minded guy who{" "}
            <span className="text-gray-200 font-medium text-[16px] lg:text-[19px]">
              focuses
            </span>{" "}
            on building beautiful interfaces & experiences.
          </p>

          <p className="tracking-wider pt-8 sm:text-[16px] text-[14px] lg:leading-8 leading-7">
            I'm an extremely curious individual with a huge passion for design
            and development in general.
          </p>

          <p className="tracking-wider pt-8 sm:text-[16px] text-[14px] lg:leading-8 leading-7">
            I'm very passionate about technology, education and music and
            exploring opportunities to kick start my frontend career.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Intro;
