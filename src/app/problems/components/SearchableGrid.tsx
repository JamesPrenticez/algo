import React, { useState, type ReactElement, type ChangeEvent } from "react";
import {IData} from '../data/Idata'
import Card from "./Card";

const SearchableGrid = ({ data }: { data: IData[] }): ReactElement => {
  const [searchValue, setSearchValue] = useState<string>("")
  const [filteredData, setFilteredData] = useState<IData[]>(data);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    const filtered = data.filter((item) => 
      item.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
      item.id.toString().toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredData(filtered);
  }

  return (
    <div className="min-h-screen max-w-5xl w-full">
      <div className="bg-blue-900">
        <input 
          type="text"
          className="p-2 border-2 border-sky-500 text-white bg-transparent outline-none w-full rounded-md"
          value={searchValue}
          onChange={(e) => handleSearch(e)}
          placeholder="Search..."
        />
      </div>
      <div className="flex justify-center items-center pt-4">
          <ul
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-4
              gap-4
              max-w-7xl 
            "
          >
            {[...filteredData]
              .map((item) => (
                <Card
                  key={item.id}
                  item={item}
                />
              ))} 
          </ul>
      </div>
    </div>
  )
}

export default SearchableGrid