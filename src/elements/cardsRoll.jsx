import React, { useState } from 'react'

const CardsRoll = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [leftScroll, setLeftScroll] = useState(scrollPosition);
    const [rightScroll, setRightScroll] = useState(true);
    const no = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

    const cardWidth = 250;
    const maxScrollPosition = no.length * cardWidth - window.innerWidth + no.length * 16 + 20 + 16; // Adjust based on your container width and number of cards
    console.log("max", maxScrollPosition, no.length, window.innerWidth);
    const handleScrollLeft = () => {
        const newPosition = Math.max(0, scrollPosition - cardWidth);
        setScrollPosition(newPosition);
        setLeftScroll(newPosition);
        console.log(scrollPosition);
        if (newPosition <= maxScrollPosition) {
            setRightScroll(false)
        } else {
            setRightScroll(true)
        }
    };

    const handleScrollRight = () => {
        const newPosition = Math.min(maxScrollPosition, scrollPosition + cardWidth);
        setScrollPosition(newPosition);
        setLeftScroll(newPosition)
        console.log(scrollPosition);
        if (newPosition >= maxScrollPosition) {
            setRightScroll(false)
        } else {
            setRightScroll(true)
        }
    };

    return (
        <div className='flex gap-4 py-4 px-4 items-center flex-nowrap overflow-hidden'
        >
            <button className={`${leftScroll ? 'block' : 'hidden'
                } bg-white text-black border-2 border-slate-200 p-6 absolute left-0  font-bold z-10`}
                isabled={scrollPosition === 0}
                onClick={handleScrollLeft}>
                &lt;
            </button>
            {/* transform: `translateX(-${scrollPosition}px)` */}
            <div className=" p-4 flex gap-4 px-5 items-center justify-between scroll-smooth transition-transform ease-in" id="my-element" style={{ transform: `translateX(-${scrollPosition}px)` }}
            >
                {
                    no.map(() => {
                        return (<div className='w-[250px] h-[350px] bg-slate-400 flex flex-col justify-around items-center'>
                            <div className='w-[200px] h-[250px] bg-slate-500'> </div>
                            <div>
                                <h4 className='flex justify-start w-full font-bold'>Item Name</h4>
                                <span className='flex justify-start w-full '>25 usd</span>
                            </div>
                        </div>)
                    })
                }
            </div>
            <button className={`${rightScroll ? 'flex' : 'hidden'
                }  items-center border-2 border-slate-200 bg-white text-black p-6 absolute right-0 font-bold z-10`}
                onClick={handleScrollRight}>
                &gt;
            </button>
        </div >
    )
}

export default CardsRoll