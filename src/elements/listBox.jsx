import React from "react";

const ListBox = () => {
  const no = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <div className=" p-4 flex flex-wrap gap-4 px-20 justify-between">
      {no.map(() => {
        return (
          <div className=" w-[100vw] max-w-[100%] h-[150px] bg-slate-300 p-4 flex items-center">
            <div className=" w-[150px] h-[136px] bg-slate-600"></div>
            <div className=" p-4 flex flex-col items-start justify-center w-[100%] min-w-[120px] h-[120px] grow bg-zinc-600">
              <h4>Product Name</h4>
              <p>25</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListBox;
