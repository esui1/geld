import { Tsenherzurag } from "@/assets/tsenherzurag";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex h-screen">
      <div className=" flex justify-center items-center w-1/2">
        <div className="flex flex-col items-center gap-1 ">
          <Tsenherzurag />
          <h1>Welcome back</h1>
          <h3>Welcome back, please enter your details</h3>
          <div className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Password"
              className="input input-bordered w-full max-w-xs"
            />
            <button className="btn btn-primary ">Login</button>
            <div className="flex items-center">
              <h2>Don't have an account?</h2>
              <a className=" pl-2 link link-primary">sign up</a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-1/2 bg-blue-700"></div>
    </main>
  );
}
