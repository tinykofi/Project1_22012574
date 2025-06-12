import Image from "next/image";

export default function Home() {
  return (
    <div className=" grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full flex-grow">
        <div className="bg-cyan-200 text-black rounded-2xl shadow-2xl shadow-cyan-400/30 flex w-3/4 max-w-4xl items-center mx-auto">
          <div className="w-3/5 text-center bg-stone-300 rounded-tl-2xl rounded-bl-2xl">
            <div className="text-left"></div>
            <p className=" p-4">EAK</p>
          </div>
          <div className="w-2/5 text-center  inline-block py-36 px-12 ">
            <h2 className="text-3xl font-bold ">Register</h2>
            <div className="border-2 w-10 inline-block mt-0 rounded-4xl border-black"></div>
            <p className="text-sm mt-0.5 align-middle mb-5">
              Sign up with us for an out-of-the-world experience!
            </p>
            <a
              href="#"
              className="ring-black font-semibold ring-1 rounded-full px-7 py-1 hover:bg-white hover:text-cyan-200 hover:ring-white"
            >
              {" "}
              Sign Up{" "}
            </a>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
