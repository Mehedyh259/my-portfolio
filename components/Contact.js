import Link from 'next/link';
import React, { useState } from 'react';
import { AiFillGithub, AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaUserAlt } from 'react-icons/fa'
import { FiFacebook } from 'react-icons/fi'

import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

const Contact = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    setName('');
    setPhone('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Contact
        </p>
        <h2 className='py-4'>Get In Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
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
                <div className='flex items center justify-between max-w-[350px] py-4'>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-500">

                    <a target={'_blank'} rel='noreferrer' href="https://www.linkedin.com/in/mehedy-hasan-linkon/"> <FaLinkedinIn size={25} /></a>

                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-500">
                    <a target={'_blank'} rel='noreferrer' href="https://github.com/Mehedyh259"><AiFillGithub size={25} /></a>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-500">
                    <AiOutlineMail size={25} />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-500">
                    <a target={'_blank'} rel='noreferrer' href="https://web.facebook.com/mehedy.hasan.linkon999/"><FiFacebook size={25} /></a>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
              <form
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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='email'
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Message</label>
                  <textarea
                    className='border-2 rounded-lg p-3 border-gray-300'
                    rows='10'
                    name='message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <button className='w-full p-4 text-gray-100 mt-4'>
                  Send Message
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
    </div>
  );
};

export default Contact;
