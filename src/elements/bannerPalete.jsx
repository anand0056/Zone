import React from 'react'

const BannerPalete = () => {
    return (
        <div className='bg-slate-400 w-full h-[500px] flex'>
            <button className='bg-white text-black w-[100px] h-full opacity-0 hover:opacity-50'>&lt;</button>
            <button className='bg-white text-black w-[100px] h-full opacity-0 hover:opacity-50 ml-auto order-[1]'>&gt;</button>
        </div>
    )
}

export default BannerPalete