"use client";

import { useState } from "react";

interface BookmarkFilterProps {
    filter: string;
    setFilter: (value: string) => void;
    categories: string[];
    search: string;
    setSearch: (value: string) => void;
}

const BookmarkFilter: React.FC<BookmarkFilterProps> = ({
    filter,
    setFilter,
    categories,
    search,
    setSearch,
}) => {
    const [showDropDown, setShowDropDown] = useState<boolean>(false);

    const handleSelect = (value: string) => {
        setFilter(value);
        setShowDropDown(false);
    };

    return (
        <div className="mb-4 p-4 bg-white dark:bg-gray-800 rounded shadow relative">
            <h2 className="text-xl font-semibold mb-2">Filter Bookmarks</h2>
            
            <div className="mb-4">
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search bookmarks..."
                    className="w-full p-2 border rounded"
                />
            </div>
            
            <div
                onClick={() => setShowDropDown(!showDropDown)}
                className="p-3 bg-gray-100 dark:bg-gray-900 rounded dark:text-white cursor-pointer"
            >
                {filter}
            </div>
            {showDropDown && (
                <div className="w-full p-3 gap-1 shadow absolute z-10 bg-white dark:bg-gray-800 rounded mt-1">
                    <p
                        onClick={() => handleSelect("All")}
                        className="p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-900 cursor-pointer"
                    >
                        All
                    </p>
                    {categories.map((cat, idx) => (
                        <p
                            key={idx}
                            onClick={() => handleSelect(cat)}
                            className="p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-900 cursor-pointer"
                        >
                            {cat}
                        </p>
                    ))}
                </div>
            )}
        </div>
    );
};

export default BookmarkFilter;