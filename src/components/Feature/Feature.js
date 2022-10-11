import { CheckCircleIcon } from '@heroicons/react/24/solid';
import React from 'react';

const Feature = ({feature}) => {
    return (
        <div className='flex items-center'>
                <CheckCircleIcon className='h-4 w-4 text-green-500'></CheckCircleIcon>
                <p className='ml-2'>{feature}</p>
            </div>
    );
};

export default Feature;