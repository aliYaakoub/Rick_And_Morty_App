import React from 'react'

const PageChange = (props) => {
    return (
        <div className='flex flex-row w-full items-center justify-center mb-12'> 
            <a href='#header' onClick={props.handlePrev}  className='m-5 text-xl sm:text-2xl bg-black bg-opacity-50 p-4 rounded-xl'>&lsaquo;&lsaquo; Previous Page</a>
            <a href='#header' onClick={props.handleNext}  className='m-5 text-xl sm:text-2xl bg-black bg-opacity-50 p-4 rounded-xl'>Next Page &rsaquo;&rsaquo;</a>
        </div>
    )
}

export default PageChange
