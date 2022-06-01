import React from "react";

function Contact() {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#051033] flex justify-center items-center px-4 pt-[96px]"
    >
      <form
        method="POST"
        action="https://getform.io/f/59b601a7-f6bd-4d8c-9c02-89d9a5575c6a"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl text-gray-300 font-bold inline border-b-4 border-[#DF622C]">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Submit the form below or shoot me an email -
            hayriyebozdagsen@gmail.com
          </p>
        </div>
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          rows="4"
          className="my-4 p-2 bg-[#ccd6f6]"
          placeholder="Message"
          name="message"
        />
        <button className="text-white border-2 hover:bg-[#DF622C] hover:border-[#DF622C] px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
}

export default Contact;
