import { AiFillGithub, AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaUserAlt } from 'react-icons/fa'
import { FiFacebook } from 'react-icons/fi'
import { BsCloudDownload } from 'react-icons/bs'


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
                    <div className="flex justify-center py-2 mt-[25px]">

                        <a target={'_blank'} rel='noreferrer' href='https://drive.google.com/file/d/1QrEUzdgvN056ptryjf9TJs92pgS2NVhq/view?usp=sharing' >
                            <button className="rounded-full shadow-lg p-4 cursore-pointer bg-primary flex items-center space-x-2">
                                <BsCloudDownload size={25} className={'mr-2'} /> Download Resume
                            </button>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Main;

