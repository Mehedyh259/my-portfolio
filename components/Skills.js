import Image from 'next/image';
import React from 'react';
import HtmlLogo from '../public/assets/skills/html.png';
import CssLogo from '../public/assets/skills/css.png';
import JavaScriptLogo from '../public/assets/skills/javascript.png';
import ReactLogo from '../public/assets/skills/react.png';
import TailwindLogo from '../public/assets/skills/tailwind.png';
import FirebaseLogo from '../public/assets/skills/firebase.png';
import MongodbLogo from '../public/assets/skills/mongo.png';
import GithubLogo from '../public/assets/skills/github.png';

const Skills = () => {
    return (
        <div id='skills' className='w-full lg:h-screen px-3 lg:px-0'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
                    Skills
                </p>
                <h2 className='py-4'>What I Can Do</h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src={HtmlLogo}
                                    width='64px'
                                    height='64px'
                                    alt='/'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>HTML</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src={CssLogo}
                                    width='64px'
                                    height='64px'
                                    alt='/'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>CSS</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src={JavaScriptLogo}
                                    width='64px'
                                    height='64px'
                                    alt='/'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>JavaScript</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src={ReactLogo}
                                    width='64px'
                                    height='64px'
                                    alt='/'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>React</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src={TailwindLogo}
                                    width='64px'
                                    height='64px'
                                    alt='/'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Tailwind CSS</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src={FirebaseLogo}
                                    width='64px'
                                    height='64px'
                                    alt='/'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Firebase</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src={MongodbLogo}
                                    width='64px'
                                    height='64px'
                                    alt='/'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>MongoDB</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src={GithubLogo}
                                    width='64px'
                                    height='64px'
                                    alt='/'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Github</h3>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Skills;
