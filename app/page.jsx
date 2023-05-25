

export const metadata = {
  title: "Home Page",
  description: "Main Landing Page",
};

export default function Home() {
  return (
    <main className="lg:flex lg:flex-row-reverse bg-purple-400 justify-around ">
      <div className="flex place-content-center lg:w-1/2">
        <img className = "lg:mt-32  lg:ml-28 lg:h-[400px] lg:w-[400px]" src="/web.png" alt="web development" width={300} height={300} />
      </div>
      <div className="main ml-5 py-12 lg:py-32 lg:pl-20 lg:ml-20 place-content-center  lg:w-1/2">
        <div className="flex">
          <img
            className="w-10 h-10 mt-1"
            src="/download.png"
            width={100}
            height={100}
            alt="new logo"
          />
          <p className="py-3 p-4 lg:w-1/2 text-white">
            Next Generation Templates
          </p>
        </div>
        <div class="text-4xl font-bold text-yellow-500">Core Web Vita |</div>
        <div class="text-4xl font-bold text-white mt-2">
          Template For StartU |
        </div>
        <p className="py-3 pr-3 text-justify">
          {" "}
          Next generation templates often 
          embrace component-based architectures,
          where the user interface is broken down into reusable and modular
          components. Frameworks like React, Vue.js, and Angular provide robust
          tools for building component-based templates.{" "}
        </p>
        <div className="my-4">
          <button className="before:content-['Buy_Now'] hover:before:content-['Click_Fast'] btn">
            {/* Buy Now */}
          </button>
          <button className="before:content-['Contact_Us'] hover:before:content-['Click_to_Message'] btn">
            {/* Contact Us */}
          </button>
        </div>
      </div>
      
    </main>
  );
}
