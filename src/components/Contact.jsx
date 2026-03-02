const Contact = () => {
  return (
    <div className="my-20 p-10 flex gap-5 flex-col items-center justify-center rounded-md">
      <h1 className="text-2xl font-extrabold text-[#011b3e]">Message me</h1>
      <div className="w-full flex gap-5 justify-center">
        <form className="w-[50%] mx-auto flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ca2fe5]"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ca2fe5]"
          />
          <textarea
            placeholder="Your Message"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ca2fe5] resize-none"
            rows="5"
          />
          <button
            type="submit"
            className="bg-[#ca2fe5] text-white font-medium py-3 px-6 rounded-md hover:bg-[#a104bc] transition-all duration-200 ease-linear"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
