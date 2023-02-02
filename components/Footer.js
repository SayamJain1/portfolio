function Footer() {
  return (
    <section>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center pt-10">
          <p className="text-[14px] pb-3">Send me an email at</p>
          <a
            href="mailto:sayamjain99300@gmail.com"
            className="text-[28px] hover:underline"
          >
            sayamjain99300@gmail.com
          </a>
          <p className="pt-10 pb-3 text-[14px]">Follow</p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/sanyam-jain-0a4b421a6/"
              target="_blank"
            >
              <img
                src="/linkedin.png"
                className="w-[30px] cursor-pointer"
                alt="linkedin"
                name="linkedin"
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
          </div>
        </div>
        <div className="flex justify-center pb-10 w-full pt-[300px]">
          <p className="text-[14px]">
            Developed by Sanyam with ♥️ <span className="pl-[4px]">· 2023</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
