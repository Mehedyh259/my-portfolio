import Image from "next/image";
import { useState, useEffect } from 'react';
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu, AiFillGithub, AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { FiFacebook } from 'react-icons/fi';
import logo from '../public/assets/navLogo.png';



const Navbar = () => {

    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 50) {
                setShadow(true);
            } else {
                setShadow(false)
            }
        };
        window.addEventListener('scroll', handleShadow)
    }, [])

    const handleNavFunction = () => {
        setNav(!nav);
    }

    return (
        <div className={shadow ? "fixed w-full h-20 shadow-xl z-[100] px-2 bg-[#ecf0f3]"
            :
            "fixed w-full h-20 z-[100] px-2 bg-[#ecf0f3]"
        }>
            <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">

                <Link href={'/'}><Image className="cursor-pointer" src={logo} alt="..." width={'125'} height={'50'} /></Link>

                <div>
                    <ul className="hidden md:flex">
                        <Link href={'/'}>
                            <li className="font-bold ml-10 text-sm uppercase  border-blue-500">Home</li>
                        </Link>
                        <Link href={'/#about'}>
                            <li className="font-bold ml-10 text-sm uppercase ">About</li>
                        </Link>
                        <Link href={'/#skills'}>
                            <li className="font-bold ml-10 text-sm uppercase ">Skills</li>
                        </Link>
                        <Link href={'/#projects'}>
                            <li className="font-bold ml-10 text-sm uppercase ">Projects</li>
                        </Link>
                        <Link href={'/#contact'}>
                            <li className="font-bold ml-10 text-sm uppercase ">Contact</li>
                        </Link>
                    </ul>
                </div>
                <div onClick={handleNavFunction} className="md:hidden cursor-pointer">
                    <AiOutlineMenu size={25} />
                </div>
            </div>

            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/60' : ''}>
                <div className={
                    nav ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[40%] h-screen bg-[#ecf0f3] p-7 ease-in duration-500"
                        :
                        "fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md:w-[40%] h-screen bg-[#ecf0f3] p-7 ease-in duration-500"
                }>
                    <div>
                        <div className="flex w-full items-center justify-between">
                            <Image src={logo} alt="..." width={'125'} height={'50'} />
                            <div onClick={handleNavFunction} className="rounded-full shadow-xl shadow-gray-400 p-3 cursor-pointer">
                                <AiOutlineClose size={25} />
                            </div>
                        </div>
                        <div className="shadow border-b border-gray-300 my-4">
                            <p className="w-[85%] md:w-[90%] py-4 px-2">Lets Build Something Innovative</p>
                        </div>
                    </div>

                    <div className="py-4 flex flex-col">
                        <ul className="uppercase">
                            <Link href={'/#home'}>
                                <li onClick={() => setNav(false)} className="py-3 font-bold text-sm">Home</li>
                            </Link>
                            <Link href={'/#about'}>
                                <li onClick={() => setNav(false)} className="py-3 font-bold text-sm">About</li>
                            </Link>
                            <Link href={'/#skills'}>
                                <li onClick={() => setNav(false)} className="py-3 font-bold text-sm">Skills</li>
                            </Link>
                            <Link href={'/#projects'}>
                                <li onClick={() => setNav(false)} className="py-3 font-bold text-sm">Project</li>
                            </Link>
                            <Link href={'/#contact'}>
                                <li onClick={() => setNav(false)} className="py-3 font-bold text-sm">Contact</li>
                            </Link>
                        </ul>
                        <div className="pt-20">
                            <p className="uppercase tracking-widest text-[#5651e5]">Let&apos;s Connect</p>
                            <div className="flex items-center justify-between w-full sm:w-[60%] mt-3">
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
            </div>

        </div>
    );
};

export default Navbar;