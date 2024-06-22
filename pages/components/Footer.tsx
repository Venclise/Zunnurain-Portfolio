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
        <div className='w-full h-[10rem] p-10 flex items-center justify-center flex-col gap-4 border border-solid border-gray-200 p-10'>
            <h2 className='font-semibold text-2xl'>Want to work with me?</h2>
            <button className='w-[15rem] h-[7rem] pt-5 pb-5  text-slate-800 bg-gray-200 rounded-full' onClick={copyToClipboard} >
              {copySuccess ? copySuccess : <span className="flex items-center gap-4 ml-4"> <Clipboard className="w-[15px] h-[15px] "/> Copy my email here !</span>}
            </button>
            
        </div>
    );
};



export default Footer;
