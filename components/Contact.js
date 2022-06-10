import Link from 'next/link';
import React, { useState, useRef } from 'react';
import { AiFillGithub, AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaUserAlt } from 'react-icons/fa'
import { BiPaperPlane } from 'react-icons/bi'
import { FiFacebook } from 'react-icons/fi'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import emailJs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailJs.sendForm("service_kvphf27", "template_5cnihm3", form.current, "3T-0y-eW2odvD04gZ")
      .then((result) => {
        if (result.status === 200)
          toast.success("Message sent successfully. I will cantact you soon..!");
        e.target.reset();
      }), (error) => {
        toast.error("Some Error happend..!")
      }

  };

  return (
    <div id='contact' className='w-full'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Contact
        </p>
        <h2 className='py-4'>Get In Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <div data-aos="fade-right" className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full '>
              <div>
                <img
                  className='rounded-xl hover:scale-105 ease-in duration-300'
                  src='https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80'
                  alt='/'
                />
              </div>
              <div>
                <h2 className='py-2'>Mehedi Hasan</h2>
                <p>MERN Stack Developer</p>
                <p className='py-4'>
                  I am available for remote or onsite full-time positions. Contact
                  me and let&apos;s talk.
                </p>
              </div>
              <div>
                <p className='uppercase pt-8'>Connect With Me</p>
                <div className='flex items center justify-between max-w-[250px] py-4'>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-500">

                    <a target={'_blank'} rel='noreferrer' href="https://www.linkedin.com/in/mehedy-hasan-linkon/"> <FaLinkedinIn size={25} /></a>

                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-500">
                    <a target={'_blank'} rel='noreferrer' href="https://github.com/Mehedyh259"><AiFillGithub size={25} /></a>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-500">
                    <a target={'_blank'} rel='noreferrer' href="https://web.facebook.com/mehedy.hasan.linkon999/"><FiFacebook size={25} /></a>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div data-aos="fade-left" className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
              <form
                ref={form}
                onSubmit={handleSubmit}
                action='https://getform.io/f/08ebcd37-f5b5-45be-8c13-714f011ce060'
                method='POST'
              >
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Name</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='text'
                    name='name'
                    placeholder='Enter your name'
                    required
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='email'
                    name='email'
                    placeholder='Enter you email'
                    required
                  />
                </div>

                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Message</label>
                  <textarea
                    className='border-2 rounded-lg p-3 border-gray-300'
                    rows='10'
                    name='message'
                    placeholder='Message...'
                    required
                  ></textarea>
                </div>
                <button className='w-full p-4 flex justify-center text-gray-100 mt-4'>
                  <BiPaperPlane className='mr-2' size={25} /> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <HiOutlineChevronDoubleUp className='text-[#5651e5]' size={30} />
            </div>
          </Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
