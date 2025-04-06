"use client";

import { useState } from "react";

interface BookmarkFilterProps {
    filter: string;
    setFilter: (value: string) => void;
    categories: string[];
}

const BookmarkFilter: React.FC<BookmarkFilterProps> = ({
    filter,
    setFilter,
    categories,
}) => {
    const [showDropDown, setShowDropDown] = useState<boolean>(false);

    const handleSelect = (value: string) => {
        setFilter(value);
        setShowDropDown(false);
    };

    return (
        <div className="mb-4 p-4 bg-white dark:bg-gray-800 rounded shadow relative">
            <h2 className="text-xl font-semibold mb-2">Filter Bookmarks</h2>
            <div
                onClick={() => setShowDropDown(!showDropDown)}
                className="p-3 bg-gray-100 dark:bg-gray-900 rounded dark:text-white cursor-pointer"
            >
                {filter}
            </div>
            {showDropDown && (
                <div className="w-full p-3 gap-1 shadow">
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