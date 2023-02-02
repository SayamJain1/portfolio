import { projects } from "@/constant";

function Projects() {
  return (
    <section className="px-6 py-16 sm:px-6 sm:py-14 lg:px-40">
      <div className="flex w-full h-full">
        <div className="w-[20px] sm:w-[90px] lg:w-[150px] border-solid">
          <h2 className="font-semibold text-[25px]">Projects</h2>
        </div>

        <div className="flex-1 pt-14">
          <div className="flex flex-col flex-wrap items-center gap-8 pb-10 sm:gap-y-10 sm:gap-x-0 sm:flex-row justify-evenly">
            {/* ..  */}
            {projects.map((item) => (
              <>
                {item.img && (
                  <div
                    key={item.id}
                    className="p-4 rounded-lg sm:w-5/12 glassmorphism"
                  >
                    <div>
                      <img src={item.img} alt={item.title} />
                      <p className="pt-3 text-[22px] font-medium">
                        {item.title}
                      </p>
                      <p className="text-[13px] pb-2 text-gray-400">
                        {item.tech}
                      </p>
                      <p className="text-[14px] sm:text-[16px]">{item.disc}</p>
                      <div className="flex items-center gap-2 pt-3">
                        <a
                          className="px-3 py-[6px] text-sm font-semibold text-black bg-gray-200 border rounded-full focus:outline-none hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                          href={item.gitLink}
                          target="_blank"
                        >
                          Code
                        </a>
                        <a
                          className="px-3 py-[6px] text-sm font-semibold text-black bg-gray-200 border rounded-full focus:outline-none hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                          href={item.demoLink}
                          target="_blank"
                        >
                          Live
                        </a>
                      </div>
                    </div>
                  </div>
                )}
                {item?.viewAll && (
                  <a
                    href="https://github.com/SayamJain1"
                    target="_blank"
                    className="hover:underline hover:text-gray-300"
                  >
                    {item?.viewAll}
                  </a>
                )}
              </>
            ))}

            {/* ..  */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
