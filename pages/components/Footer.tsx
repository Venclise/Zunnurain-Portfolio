import {Clipboard} from "lucide-react"

import React, { useState } from 'react';

const Footer = () => {
    const [copySuccess, setCopySuccess] = useState('');
    const textToCopy = 'zunnurainzahoor955@gmail.com';

    const copyToClipboard = () => {
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                setCopySuccess('Copied!');
                setTimeout(() => setCopySuccess(''), 2000); // Clear the message after 2 seconds
            })
            .catch(err => {
                setCopySuccess('Failed to copy!');
            });
    };

    return (
        <div className='w-full h-[15rem] p-10 flex items-center justify-center flex-col gap-6 border border-solid border-gray-200 p-10'>
            <h2 className='font-semibold text-2xl'>Want to work with me?</h2>
            <button className='bg-gray-700 w-[15rem] h-[4rem]   text-white rounded-lg shadow-xl' onClick={copyToClipboard} >
              {copySuccess ? copySuccess : <span className="flex items-center justify-center gap-2 ml-4"> <Clipboard className="w-[15px] h-[15px] "/> Copy my email here !</span>}
            </button>
            
        </div>
    );
};



export default Footer;
