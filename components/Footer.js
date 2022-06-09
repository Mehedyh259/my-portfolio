import React from 'react';

const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <div id='about' className='w-full bg-[#709dff] text-white font-bold py-10 flex items-center'>
            <div className='max-w-[1240px] m-auto flex justify-center'>
                <p>&copy;{date} Mehedi Hasan. All Right Reserved </p>
            </div>
        </div>
    );
};

export default Footer;