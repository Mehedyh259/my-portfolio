import doctorsPortalImg from '../../public/assets/projects/doctorPortal.png'
import doctorsPortalImg2 from '../../public/assets/projects/doctorsportalImage2.JPG'
import doctorsPortalImg3 from '../../public/assets/projects/doctorsportalImage3.JPG'
import Image from 'next/image'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

const DoctorsPortalDetails = () => {
    return (
        <div className='w-full'>
            <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
                <Image
                    className='absolute z-1'
                    layout='fill'
                    objectFit='cover'
                    src={doctorsPortalImg}
                    alt='/'
                />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2'>Doctors Portal</h2>
                    <h3>React JS / Tailwind / Firebase / Mongodb / NodeJS</h3>
                </div>
            </div>

            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                    <div className='my-4'>
                        <p>Project</p>
                        <h2>Overview</h2>
                        <p>
                            This app was built using React JS and is hosted on Firebase. Users
                            are able to book appointment to doctor. User
                            authentication is available so you can signup & signin to your
                            account with an email address and google login system.
                            Users can pay their order cost via cards and also there will be a email notification after booking an appointment.
                        </p>
                        <a target={'_blank'} rel='noreferrer' href='https://doctors-portal-743a3.web.app/' >
                            <button className='px-8 py-2 mt-4 mx-2'>Live Demo</button>
                        </a>
                        <a target={'_blank'} rel='noreferrer' href='https://github.com/Mehedyh259/doctors-portal-frontend' >
                            <button className='px-8 py-2 mt-4 mx-2'>Front-End Code</button>
                        </a>
                        <a target={'_blank'} rel='noreferrer' href='https://github.com/Mehedyh259/warehouse-server' >
                            <button className='px-8 py-2 mt-4 mx-2'>Back-End Code</button>
                        </a>
                    </div>

                    {/* project Screenshots */}

                    <h2 className='my-5'>Screenshots of the project</h2>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                        <div className='p-3 shadow-lg rounded'>
                            <Image src={doctorsPortalImg}
                                alt='..'
                            />
                        </div>
                        <div className='p-3 shadow-lg rounded'>
                            <Image src={doctorsPortalImg2}
                                alt='..'
                            />
                        </div>
                        <div className='p-3 shadow-lg rounded'>
                            <Image src={doctorsPortalImg3}
                                alt='..'
                            />
                        </div>

                    </div>

                </div>
                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='p-2'>
                        <p className='text-center font-bold pb-2'>Technologies</p>
                        <div className='grid grid-cols-3 md:grid-cols-1'>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> React
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Tailwind
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Javascript
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Firebase
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Heroku
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Mongodb
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Node JS
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Expresss JS
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Stripe
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='pr-1' /> Send Grid
                            </p>
                        </div>
                    </div>
                </div>
                <Link href='/#projects'>
                    <p className='underline cursor-pointer'>Back</p>
                </Link>
            </div>
        </div>
    );
};


export default DoctorsPortalDetails;