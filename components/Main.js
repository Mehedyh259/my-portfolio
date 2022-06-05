import {AiFillGithub, AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaUserAlt } from 'react-icons/fa'

const Main = () => {
    return (
        <div id='home' className='w-full h-screen text-center'>
            <div className='max-w-[1240px] flex w-full h-full mx-auto p-2 justify-center items-center'>
                <div >
                    <p className="uppercase text-sm tracking-widest text-gray-600">
                        LET&apos;S BUILD SOMETHING INNOVATIVE
                    </p>
                    <h1 className='py-2 text-gray-700'>Hi, I&apos;m <span className='text-[#5651e5]'>Mehedi Hasan</span></h1>

                    <h1 className='py-2 text-gray-600'>
                        A MERN Stack Web Developer
                    </h1>

                    <p className="py-4 text-gray-600 mx-auto max-w-[70%]">
                        I am a MERN stack web developer specializing in building web projects. Currently I&apos;m focused on building responsive front-end and well maintained back-end technologies.
                    </p>
                    <div className='flex items center justify-between max-w-[350px] m-auto py-4'>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-500">
                            <FaLinkedinIn size={25} />
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-500">
                            <AiFillGithub size={25} />
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-500">
                            <AiOutlineMail size={25} />
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-500">
                            <FaUserAlt size={25} />
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Main;