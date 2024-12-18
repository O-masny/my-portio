"use client"
import { motion } from "framer-motion";
import { globalStyles } from "../../styles/global_styles";


const ContactPage = () => {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        console.log("Falling over");
        throw new Error(`Response status: ${response.status}`);
      }

      const responseData: Response = await response.json();
      console.log(responseData.text);

      alert('Message successfully sent');
    } catch (err) {
      console.error(err);
      alert("Error, please try resubmitting the form");
    }
  }


  return <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
    <div className="absolute inset-0 -z-10 overflow-hidden">
    </div>

    <div className="relative z-10 flex flex-col items-center  p-8 text-center rounded-lg shadow-lg max-w-lg w-full bg-white bg-opacity-5">
      <h1 className={`${globalStyles.heading} text-white  mb-8`}>
        Get in Touch
      </h1>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Name"
            className={`block w-full px-4 py-2 border border-gray-300 bg-transparent backdrop-blur-sm rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 ${globalStyles.text}`}
          />
        </div>|

        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            className={`block w-full px-4 py-2 border border-gray-300 bg-transparent backdrop-blur-sm rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 ${globalStyles.text}`}
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Subject"
            className={`block w-full px-4 py-2 border border-gray-300 bg-transparent backdrop-blur-sm rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 ${globalStyles.text}`}
          />
        </div>

        <div className="mb-4">
          <textarea
            placeholder="Message"
            className={`block w-full px-4 py-2 border border-gray-300 bg-transparent backdrop-blur-sm rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 ${globalStyles.text}`}
            rows={4}
          ></textarea>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className={`w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${globalStyles.button}`}
        >
          Send Message
        </motion.button>
      </form>
    </div>
  </div>

};

export default ContactPage