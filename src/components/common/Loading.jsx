import React from 'react';
import loadingLogo from '../../imgs/loading-2.gif'

const Loading = (props) => {
    return (
        <div className='flex w-full items-center justify-center h-screen'>
            <img src={loadingLogo} alt="" className='w-2/4 sm:w-1/5' />
        </div>
    )
}

export default Loading
