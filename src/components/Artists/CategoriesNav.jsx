import React from "react";

const CategoriesNav = ({ filterItem, menuList }) => {
  return (
    <div className="w-[60%] rounded-3xl bg-slate-300 p-2 text-black">
      <nav className="navbar">
        <div className="btn-group flex justify-around">
          {menuList.map((curr) => {
            return (
              <button
                className="btn-group__item bg-slate-400 w-[15%] rounded-full pt-1 pb-1"
                onClick={() => {
                  filterItem(curr);
                }}
              >
                {curr}
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default CategoriesNav;
