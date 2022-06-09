
import doctorsPortal from '../public/assets/projects/doctorPortal.png'
import manufacturerImg from '../public/assets/projects/manufacturar.png';
import wareHouseImg from '../public/assets/projects/warehouse.png'
import ProjectItem from './ProjectItem';

const Projects = () => {
    return (
        <div id='projects' className='w-full bg-white'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
                    Projects
                </p>
                <h2 className='py-4'>What I&apos;ve Built</h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    <ProjectItem
                        title='Manufacturer Website'
                        using="React JS"
                        backgroundImg={manufacturerImg}
                        projectUrl='https://manufacturer-web-a4c58.web.app/'
                        detailsUrl="/projects/manufacturer"
                    />
                    <ProjectItem
                        title='Warehouse App'
                        using="React JS"
                        backgroundImg={wareHouseImg}
                        projectUrl='https://medicine-inventory-76ade.web.app/'
                        detailsUrl="/projects/warehouse"
                    />
                    <ProjectItem
                        title='Doctors Portal'
                        using="React JS"
                        backgroundImg={doctorsPortal}
                        projectUrl='https://doctors-portal-743a3.web.app/'
                        detailsUrl="/projects/doctorsportal"
                    />

                </div>
            </div>
        </div>
    );
};

export default Projects;
