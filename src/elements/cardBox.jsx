import React from 'react'

const CardBox = () => {
    const no = [1,1,1,1]
  return (
    <div className='min-w-[400px] h-[400px] flex flex-col items-center bg-blue-200 grow p-4'> 
        <h3>Title goes here</h3>
    <div className={`w-[100%] min-w-[360px] min-h-[360px] p-4 flex flex-col flex-wrap grow overflow-hidden  gap-4 items-center justify-center`}>
        
        {
        no.map(
            ()=>{
                return(
                    <div className='w-[50%] min-w-[150px] h-[150px] p-4 grow bg-zinc-400 flex flex-col justify-around items-center '>
                        <div className='w-[100%] min-w-[120px] h-[120px] grow bg-zinc-600'></div>
                        <h4>Product Name</h4>
                    </div>
                )
            }
        )
        }
    </div>
    </div>
  )
}

export default CardBox