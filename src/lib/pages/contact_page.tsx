import { motion } from "framer-motion";
import "../../styles/contacts.module.css";
export default function ContactPage() {
  return (
    <div id="Contact" className="my-16 pb-15">
      {" "}
      <h1 className="text-8xl pb-20 text-white font-extrabold text-center  hover:transition-colors duration-700 animate-bounce hover:text-slate-400">
        Time is precious
      </h1>
      <div className="h-32"></div>
      <form className="mt-8 space-y-8 px-5 ">
        <input
          type="text"
          placeholder="Name"
          className="w-full rounded-md py-3 px-4 bg-gray-100 text-sm outline-blue-500"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full rounded-md py-3 px-4 bg-gray-100 text-sm outline-blue-500"
        />
        <input
          type="text"
          placeholder="Subject"
          className="w-full rounded-md py-3 px-4 bg-gray-100 text-sm outline-blue-500"
        />
        <textarea
          placeholder="Message"
          className="w-full rounded-md px-4 bg-gray-100 text-sm pt-3 outline-blue-500"
        ></textarea>{" "}
        <div
          className="text-4xl min-w-80 py-10 flex justify-center hover:scale-x-95 hover scale-y-105  focus:outline-none focus:shadow-outline bg-gradient-to-b hover:from-indigo-500 from-gray-900 to-black hover:text-slate-400  mx-auto align-middle
         "
        >
          Kontaktujte mě
        </div>
      </form>{" "}
      <div className="h-64"></div>
    </div>
  );
}
