"use client";

import { useState, FormEvent, Dispatch, SetStateAction } from "react";
import { Bookmark } from "../app/page";
import { v4 as uuidv4 } from "uuid";

interface BookmarkFormProps {
    addBookmark: (bookmark: Bookmark) => void;
    categories: string[];
    setCategories: Dispatch<SetStateAction<string[]>>;
}

const BookmarkForm: React.FC<BookmarkFormProps> = ({ addBookmark, categories, setCategories }) => {
    const [title, setTitle] = useState("");
    const [url, setUrl] = useState("");
    const [category, setCategory] = useState("");
    const [showDropDown, setShowDropDown] = useState<boolean>(false);
    const [newCat, setNewCat] = useState<string>("");
    const [inputCat, setInputCat] = useState<boolean>(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!title || !url) return;

        try {
            new URL(url);
        } catch {
            alert("Please enter a valid URL");
            return;
        }

        const newBookmark: Bookmark = {
            id: uuidv4(),
            title,
            url,
            category,
            createdAt: new Date().toISOString(),
        };

        addBookmark(newBookmark);
        setTitle("");
        setUrl("");
        setCategory(categories[0] || "");
    };

    const addNewCategory = (e: string) => {
        if (e) {
            setCategories(prev => [e,...prev]);
            setCategory(e);
            setInputCat(false);
            setShowDropDown(false);
            setNewCat("");
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="mb-4 p-4 bg-white dark:bg-gray-800 rounded shadow"
        >
            <h2 className="text-xl font-semibold mb-2">Add Bookmark</h2>
            <div className="mb-2">
                <label className="block mb-1">Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                />
            </div>
            <div className="mb-2">
                <label className="block mb-1">URL:</label>
                <input
                    type="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                />
            </div>
            <div className="mb-2">
                <label className="block mb-1">Category:</label>
                <div onClick={() => { setShowDropDown(!showDropDown); setInputCat(false)}} className="p-3 bg-gray-100 dark:bg-gray-900 rounded dark:text-white">{category || "Select Category"}</div>
                {showDropDown && (
                    <div className="absolute z-10 mt-1 bg-white dark:bg-gray-800 w-full p-3 gap-1 shadow">
                        {categories.map((cat, idx) => (
                            <p onClick={() => { setCategory(cat); setShowDropDown(false) }} key={idx} className="p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-900 cursor-pointer">
                                {cat}
                            </p>
                        ))}
                        {inputCat && (
                            <div className="flex justify-center items-start flex-col">
                                <input
                                    type="text"
                                    value={newCat}
                                    onChange={(e) => setNewCat(e.target.value)}
                                    className="w-full p-2 border rounded"
                                />
                                <button onClick={() => addNewCategory(newCat)} className="text-center mt-2 w-max p-3 px-5 bg-blue-400 text-white cursor-pointer rounded-md">Add category</button>
                            </div>
                        )}
                        {!inputCat && (<button onClick={() => setInputCat(true)} className="text-center w-max p-3 px-5 bg-blue-400 text-white cursor-pointer rounded-md">Add Category +</button>)}
                    </div>
                )}
            </div>
            <button
                type="submit"
                className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
                Add Bookmark
            </button>
        </form>
    );
};

export default BookmarkForm;