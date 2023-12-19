import React from 'react'

const CardsPalete = () => {
    const no = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    return (
        <div className=' p-4 flex flex-wrap gap-4 px-20 justify-between'>
            {
                no.map(() => {
                    return (<div className=' w-[250px] h-[350px] bg-slate-400 flex flex-col justify-around items-center'>
                        <div className='w-[200px] h-[250px] bg-slate-500'> </div>
                        <div>

                            <h4 className='flex justify-start w-full font-bold'>Item Name</h4>
                            <span className='flex justify-start w-full '>25 usd</span>
                        </div>
                    </div>)
                })
            }


        </div>
    )
}

export default CardsPalete