function About() {
  return (
    <section className="px-6 py-20 sm:px-20 sm:py-32">
      {/* <div className="w-full h-full border-2 border-indigo-600 border-solid">About</div> */}
      <div className="w-full pb-14">
        <div className="flex items-center">
          <h3 className="inline text-[25px] font-semibold">Hey there! </h3>
          <span>
            <img
              src="/wave.png"
              className="w-[35px] inline ml-4"
              alt="waving hand"
            />
          </span>
        </div>
        <p className="text-[14px]">Curious Frontend dev here.</p>
      </div>

      <div className="w-full max-w-xl pb-8 ">
        <p className="tracking-wider sm:text-[18px] text-[16px] lg:leading-8 leading-7">
          I'm <span className="font-semibold text-[20px]">Sanyam Jain</span>,
          I'm a Frontend Developer with a keen eye
          <br className="hidden lg:block" /> for visual communication, I'm
          passionate to develop the high
          <br className="hidden lg:block" /> quality Frontend Products, I love
          exploring and creating,
          <br className="hidden lg:block" /> I'm a lifelong learner!
        </p>
      </div>

      <div className="w-full max-w-xl pb-14">
        <p className="tracking-wider sm:text-[18px] text-[16px] lg:leading-8 leading-7">
          In my spare time i Read, Write, Listen Music, Watch movie/series or
          Watch something on youtube.
          <br className="hidden lg:block" />
        </p>
      </div>

      <div className="w-full ">
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/sanyam-jain-0a4b421a6/"
            target="_blank"
          >
            <img
              src="/linkedin.png"
              className="w-[30px] cursor-pointer"
              alt="linkedin"
            />
          </a>

          <a href="https://github.com/SayamJain1" target="_blank">
            <img
              src="/gitimg.png"
              className="w-[30px] cursor-pointer"
              alt="github"
            />
          </a>

          <a href="https://twitter.com/Sayamjain16941" target="_blank">
            <img
              src="/twitter.png"
              className="w-[30px] cursor-pointer"
              alt="twitter"
            />
          </a>

          <a
            type="button"
            target="_blank"
            href="https://drive.google.com/file/d/1dWYKqGUwKrYrPTURDhGLuodrCnQFuYME/view?usp=sharing"
            className="px-5 py-2 text-sm font-semibold text-black bg-gray-200 border rounded-full cursor-pointer focus:outline-none hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
