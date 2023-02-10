import React from "react";

function Blog() {
  return (
    <section className="min-h-[80vh] px-6 py-16 sm:px-20 sm:py-14 lg:px-40">
      <div className="flex w-full h-full ">
        <div className="w-[20px] sm:w-[90px] lg:w-[150px] border-solid">
          <h2 className="font-semibold text-[25px]">Blog/writings</h2>
        </div>

        <div className="flex-1 pt-20">
          <div className="flex flex-col flex-wrap items-center gap-8 sm:gap-y-10 sm:gap-x-0 justify-evenly">
            <div className="p-4 rounded-lg glassmorphism">
              <a
                className="hover:underline hover:text-gray-300"
                target="_blank"
                href="https://medium.com/@vij99300/what-is-firebase-for-frontend-web-developer-80dd46a206e4"
              >
                What is Firebase? For Frontend web developer.
              </a>
              <span className="pl-4 text-[13px] text-gray-400">
                Jan 23 · 3 min read
              </span>
            </div>

            <div className="p-4 rounded-lg glassmorphism">
              <a
                className="hover:underline hover:text-gray-300"
                target="_blank"
                href="https://medium.com/@vij99300/javascript-array-and-its-5-most-used-methods-837ea3ae9d85"
              >
                JavaScript Array and Its 5 most used methods.
              </a>
              <span className="pl-4 text-[13px] text-gray-400">
                Fab 9 · 3 min read
              </span>
            </div>
            {/* <p>Publish Another Soon</p> */}
            <p>More to come</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
