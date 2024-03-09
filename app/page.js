import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import "./globals.css";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main>
      <Navbar />
      {/* hero section */}
      <section className="relative flex w-full h-[80vh] lg:h-[73vh] overflow-hidden">
        {/* desktop hero */}
        <div
          className="hidden lg:flex w-full h-[100] bg-cover  bg-center bg-no-repeat relative"
          style={{
            backgroundImage: "url('/desk.svg')",
          }}
        >
          <Container>
            <div className="flex z-[100]">
              <div className="flex-1  pt-[8rem] lg:pl-16 xl:pl-[10rem]">
                <h1 className="text-5xl text-center lg:text-left font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                  Find the right <br /> Person for the job
                </h1>
                <p className="mt-4 text-center lg:text-left">
                  Get started by editing <code>pages/index.js</code>
                </p>
                <div className="flex space-x-2 items-center justify-center lg:justify-start mt-4 mb-20 lg:mb-8">
                  <Button variant="main" className="rounded-md">
                    Start for free
                  </Button>
                  <Button variant="outline">Learn more</Button>
                </div>
              </div>
              <div className="hidden lg:flex flex-1 ">
                <Image
                  src="/hero.svg"
                  alt="hero-image"
                  height={100}
                  width={100}
                  className="w-[460px]"
                />
              </div>
            </div>
          </Container>
        </div>

        {/* mobile hero */}
        <div
          className="flex lg:hidden w-full h-[100] bg-cover  bg-center bg-no-repeat relative"
          style={{
            backgroundImage: "url('/mobile.svg')",
          }}
        >
          <div className="  pt-[8rem] lg:pl-16 xl:pl-[10rem]">
            <h1 className="text-5xl text-center lg:text-left font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              Find the right <br /> Person for the job
            </h1>
            <p className="mt-4 text-center lg:text-left">
              Get started by editing <code>pages/index.js</code>
            </p>
            <div className="flex space-x-2 items-center justify-center lg:justify-start mt-4 mb-20 lg:mb-8">
              <Button variant="main" className="rounded-md">
                Start for free
              </Button>
              <Button variant="outline">Learn more</Button>
            </div>
          </div>
        </div>
      </section>
      {/* feature section */}

      {/* about section */}

      <section>
        <Container>
          <div className="flex flex-col lg:flex-row py-16">
            <div className=" flex  items-center justify-center flex-1">
              <Image
                src="/account.svg"
                alt="account"
                width={100}
                height={100}
                className="w-[470px]"
              />
            </div>
            <div className="flex-1 mt-10 px-4 lg:px-0">
              <h2 className="text-sem  font-bold text-center lg:text-left bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                Find the right Person for the job
              </h2>
              <h2 className="text-4xl font-bold mt-4 text-center lg:text-left">
                We Help Your <br /> Company To Grow
              </h2>
              <p className="mt-4 font-light text-center lg:text-left w-[100%] lg:w-[80%]">
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industrys standard dummy
              </p>
              <p className="mt-2 font-light text-center lg:text-left w-[100%] lg:w-[80%] ">
                Ipsum has been the industrys standard dummy
              </p>
              <div className="flex space-x-2 items-center justify-center lg:justify-start mt-4 mb-20 lg:mb-8">
                <Button variant="main" className="rounded-md">
                  Start for free
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="bg-[#F5F8FF] py-10">
        <Container>
          <div className="flex flex-col lg:flex-row">
            <div className=" flex-1  px-4 lg:px-0">
              <h2 className="text-sm lg:mt-[7rem]  font-bold text-center lg:text-left bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                Find the right Person for the job
              </h2>
              <h2 className="text-4xl font-bold mt-4 text-center lg:text-left">
                We Help Your <br /> Company To Grow
              </h2>
              <p className="mt-4 font-light text-center lg:text-left w-[100%] lg:w-[80%]">
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industrys standard dummy
              </p>
            </div>
            <div className="flex-1 mt-10 px-4 lg:px-0">
              <div className="w-[100%] flex justify-evenly items-center mt-4 ">
                <div className="w-[180px] lg:w-[300px] rounded-xl text-blue-500 hover:text-white bg-white  shadow-md p-4   hover:bg-blue-500  transition-all duration-300 ease-in-out">
                  <h2 className="text-xl text-inherit  font-bold mt-4 text-center ">
                    We Help Your
                  </h2>
                  <p className="mt-4 font-light text-center  ">
                    is simply dummy text of the printing and typesetting
                  </p>
                </div>

                <div className="w-[180px] lg:w-[300px] rounded-xl text-blue-500 hover:text-white  bg-white  shadow-md  hover:bg-blue-500 p-4 transition-all duration-300 ease-in-out">
                  <h2 className="text-xl text-inherit  font-bold mt-4 text-center ">
                    We Help Your
                  </h2>
                  <p className="mt-4 font-light text-center ">
                    is simply dummy text of the printing and typesetting
                  </p>
                </div>
              </div>
              <div className="w-[100%] flex justify-evenly items-center mt-4 ">
                <div className="w-[180px] lg:w-[300px] rounded-xl text-blue-500 hover:text-white  bg-white  shadow-md p-4   hover:bg-blue-500  transition-all duration-300 ease-in-out">
                  <h2 className="text-xl text-inherit  font-bold mt-4 text-center ">
                    We Help Your
                  </h2>
                  <p className="mt-4 font-light text-center  ">
                    is simply dummy text of the printing and typesetting
                  </p>
                </div>

                <div className="w-[180px] lg:w-[300px] rounded-xl text-blue-500 hover:text-white  bg-white  shadow-md  hover:bg-blue-500 p-4 transition-all duration-300 ease-in-out">
                  <h2 className="text-xl text-inherit  font-bold mt-4 text-center ">
                    We Help Your
                  </h2>
                  <p className="mt-4 font-light text-center ">
                    is simply dummy text of the printing and typesetting
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="mt-4 lg:mt-12 px-3 ">
        <Container>
          <div className="flex flex-col lg:flex-row items-center py-12">
            <div className="w-[100%] mx-auto flex-1 flex justify-center items-center mt-6">
              <Image
                src="/oder.svg"
                alt="hero-image"
                height={100}
                width={100}
                className="w-[460px]"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-sm lg:mt-[7rem]  font-bold text-center lg:text-left bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                Find the right Person for the job
              </h2>
              <h2 className="text-4xl font-bold mt-4 text-center lg:text-left">
                We Help Your <br /> Company To Grow
              </h2>
              <p className="mt-4 font-light text-center lg:text-left w-[100%] lg:w-[80%]">
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industrys standard dummy
              </p>
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </main>
  );
}
