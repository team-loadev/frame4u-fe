import { SearchIcon } from "@/assets";
import React from "react";

interface ISearchBarType {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyUp?: () => void
}

function SearchBar({ value, onChange, onKeyUp }: ISearchBarType) {
  return (
    <div className="relative w-[428px]">
      {/* 아이콘 */}
      <SearchIcon className="absolute top-[19px] left-[25px]" />

      {/* 입력창 */}
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Enter a search term..."
        onKeyUp={onKeyUp}
        className="
          w-full
          pl-[61px] 
          pr-[20px] 
          py-[16px] 
          rounded-full 
          bg-gray-50 
          text-[16px] 
          placeholder-gray-400
        "
      />
    </div>
  );
}

export default React.memo(SearchBar);
