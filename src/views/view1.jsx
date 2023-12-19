import React from 'react'
import CardsPalete from "../elements/cardsPalete";
import BannerPalete from "../elements/bannerPalete";
import CardsRoll from "../elements/cardsRoll";
import CardBox from '../elements/cardBox';

const View1 = () => {
  return (
    <div className='w-[100vw] flex flex-col items-center justify-center gap-8'>
      {/* <BannerPalete />
      <CardsRoll />
      <CardsPalete /> */}
      <div className='flex flex-row flex-wrap justify-start items-center gap-8 py-8'>

      <CardBox/>
      <CardBox/>
      <CardBox/>
      <CardBox/>
      </div>
    </div>
  )
}

export default View1