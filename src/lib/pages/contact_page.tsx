import { motion } from "framer-motion";
import "../../styles/contacts.module.css";
export default function ContactPage() {
  return (
    <div id="Contact" className=" contact">
      <h1 className="text-8xl pb-20 text-white font-extrabold text-center">
        Time is precious
      </h1>{" "}
      <motion.div
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold"
      >
        Váš text zde
      </motion.div>
      <form className="mt-8 space-y-4">
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
        ></textarea>
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Purple to pink
        </span>
      </form>
    </div>
  );
}
