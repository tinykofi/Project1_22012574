"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const router = useRouter();
  async function handleSubmit(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      router.push("/dashboard");
    } else {
      alert("Login failed");
    }
  }

  function SignUpForm(e) {
    e.preventDefault();
    router.push("/register");
  }

  return (
    <div className="bg-black grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full flex-grow">
        <div className="bg-cyan-200 text-black rounded-2xl shadow-2xl shadow-cyan-400/30 flex w-3/4 max-w-4xl items-center mx-auto md:flex-row ">
          <div className="w-3/5 bg-stone-300 h-130 rounded-tl-2xl rounded-bl-2xl">
            <div className="text-left"></div>
            <p className="font-semibold-4 p-3">
              <span className=" text-cyan-700 ">CPEN</span>208
            </p>
            <div className="text-center">
              <h2 className=" text-cyan-700 text-2xl grid place-content-center font-bold">
                Sign Into Your Account
              </h2>
              <div className="border-2 w-10 inline-block mt-0 rounded-4xl border-cyan-700"></div>
            </div>
            <div className="flex justify-center">
              <a href="#" className="m-2">
                <svg
                  className="hover:fill-cyan-200 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
                </svg>
              </a>
              <a href="#" className="m-2">
                <svg
                  className="hover:fill-cyan-200 w-6"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                </svg>
              </a>
              <a href="#" className="m-2">
                <svg
                  className="hover:fill-cyan-200 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </svg>
              </a>
            </div>
            <div>
              <form
                name="login-form"
                aria-label="Login Form"
                onSubmit={handleSubmit}
                className="grid justify-center py-7"
              >
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2 "
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-black rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="example@example.com"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="password"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="w-full px-4 py-2 border  border-black rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="••••••••"
                  />
                </div>

                <button
                  type="submit"
                  className="md:w-full w-2/3 bg-cyan-600 text-white py-2 rounded-xl hover:bg-cyan-700 transition-colors"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
          <div className="w-2/5 text-center inline-block py-36 ">
            <h2 className="text-3xl font-bold ">Register</h2>
            <div className="border-2 w-10 inline-block mt-0 rounded-4xl border-black"></div>
            <p className="text-sm mt-0.5 align-middle mb-5">
              Sign up with us for an out-of-the-world experience!
            </p>
            <form
              name="register-button"
              aria-label="Register Button"
              onSubmit={SignUpForm}
            >
              <button
                type="submit"
                className="ring-black font-semibold ring-1 rounded-full px-7 py-1 hover:bg-white hover:text-cyan-400 hover:ring-white"
              >
                {" "}
                Sign Up{" "}
              </button>
            </form>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
