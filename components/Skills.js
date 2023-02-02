import { skills } from "@/constant";

function Skills() {
  return (
    <section className=" sm:px-20 sm:py-14 lg:px-40 px-6 py-16">
      <div className=" w-full h-full flex">
        <div className="w-[20px] sm:w-[90px] lg:w-[150px]">
          <h2 className="font-semibold text-[25px]">Skills</h2>
        </div>

        <div className="flex-1 pt-10">
          <div className="h-fit sm:pr-5 sm:p-2 flex min-w-[230px] sm:w-[400px] flex-wrap sm:mx-auto  sm:gap-2 sm:justify-center sm:items-start sm:flex-row">
            {skills.map((item) => (
              <div
                key={item.id}
                className="w-fit m-3 flex flex-col justify-center items-center gap-2"
              >
                <img
                  src={item.img}
                  className="w-[28px] sm:w-[48px]"
                  alt={item.name}
                />
                <p className="text-[12px] sm:text-[14px]">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
