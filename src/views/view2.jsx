import React from "react";
import CardsRoll from "../elements/cardsRoll";

const View2 = () => {
    const no = [1,1,1,1,1,1,1,1,1,1,1]
  return (
    <div className="p-5 flex flex-col gap-4">
      <div className="flex gap-4">
        <div className="flex flex-col gap-4 justify-center">
          <div className="w-[100px] h-[100px] bg-slate-500"></div>
          <div className="w-[100px] h-[100px] bg-slate-500"></div>
          <div className="w-[100px] h-[100px] bg-slate-500"></div>
        </div>
        <div className="min-w-[350px] min-h-[450px] bg-slate-500"></div>
        <div className=" border-2 border-slate-600 px-4 flex flex-col flex-nowrap flex-shrink-0 justify-start overflow-x-hidden">
          <h2 className=" flex justify-start text-3xl font-extrabold">Product Name</h2>
          <p className=" flex justify-start font-bold gap-6 py-4"><del>37</del>35</p>
          <hr className="w-1"/>
          <div className=" flex gap-4">
            {no.map(
                () => {
                    return(<div className=" w-32 h-16 bg-slate-300">
                        
                    </div>)
                }
            )}
          </div>
        </div>
      </div>
      <div className="w-[100vw] h-[400px] bg-blue-200">

      </div>
      <CardsRoll/>
      <CardsRoll/>
    </div>
  );
};

export default View2;
