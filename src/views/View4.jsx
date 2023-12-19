import React, { useState } from "react";
import ListBox from "../elements/listBox";
import CardsPalete from "../elements/cardsPalete";

const View4 = () => {
    const [viewType, setViewType] = useState(false);
    const handleClick = () => {
        setViewType(!viewType);
      };
  return (
    <>
      <h3 className=" font-extrabold text-4xl p-4">Your Orders</h3>
      <div className="border-2 border-black"></div>
      <div className="flex flex-col gap-4 p-4">
      <button onClick={handleClick}>
        {viewType ? 'ON' : 'OFF'}
      </button>
      {viewType ? <ListBox/> : <CardsPalete/>}
      </div>

      <div className="border-2 border-black"></div>
      <div className="flex flex-row items-start justify-between p-8">
        <h4 className="text-4xl p-4">Total : </h4>
        <h4 className="text-4xl p-4 order-1">596</h4>
      </div>

      <button type="submit" className=" bg-blue-700 w-[100%] p-4">Proceed</button>
    </>
  );
};

export default View4;
