import React from 'react';
import Image from 'next/image'
import profile from '../public/assets/myPhoto.jpg';
import profile2 from '../public/assets/profileImage.png';

const About = () => {
    return (
        <div id='about' className='w-full bg-white py-16 flex items-center px-3 lg:px-0'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 items-center'>

                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
                        About
                    </p>
                    <h2 className='py-4'>Who I Am</h2>

                    <p className='py-2 text-gray-600'>
                        Recently completed my graduation in Compute Science and Engineering. In 2019 I started working
                        with HTML & CSS to make some minor edits on a small website
                        that I was operating. What I thought was just a few small edits
                        turned into a love for programming.
                    </p>
                    <p className='py-2 text-gray-600'>
                        Fascinated with how intricate programming can be I was quickly drawn
                        to learn more. I started learning javascript and was even more
                        enthused with making websites interactive. I am
                        now spending my time building projects with React JS, Node JS, Firebase, and
                        learning new technologies.
                    </p>

                </div>

                <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                    <Image
                        className='rounded-xl'
                        src={profile}
                        alt='/'
                    />
                </div>

            </div>


        </div>
    );
};

export default About;