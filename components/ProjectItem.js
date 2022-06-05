import Image from 'next/image'

const ProjectItem = ({ title, using, backgroundImg, projectUrl, githubUrl }) => {
    return (
        <div className='relative flex items-center justify-center h-auto w-full max-h-md shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
            <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg} alt='/' />
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
                <p className='pb-4 pt-2 text-white text-center'>{using}</p>
                <a target={'_blank'} rel="noreferrer" href={projectUrl}>
                    <p className='text-center py-3 mb-2 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>Live Site</p>
                </a>
                <a target={'_blank'} rel="noreferrer" href={githubUrl}>
                    <p className='text-center py-3 mb-2 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>Github Code</p>
                </a>
            </div>
        </div>
    )
}

export default ProjectItem