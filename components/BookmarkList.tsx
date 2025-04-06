"use client";

import { useState } from "react";
import { Bookmark } from "../app/page";

interface BookmarkListProps {
    bookmarks: Bookmark[];
    deleteBookmark: (id: string) => void;
    updateBookmark: (updatedBookmark: Bookmark) => void;
    categories: string[];
    setCategories: React.Dispatch<React.SetStateAction<string[]>>;
}

const BookmarkList: React.FC<BookmarkListProps> = ({
    bookmarks,
    deleteBookmark,
    updateBookmark,
    categories,
    setCategories,
}) => {
    const [editingId, setEditingId] = useState<string | null>(null);
    const [editedTitle, setEditedTitle] = useState<string>("");
    const [editedUrl, setEditedUrl] = useState<string>("");
    const [editedCategory, setEditedCategory] = useState<string>("");
    const [showCategoryDropDown, setShowCategoryDropDown] = useState<boolean>(false);
    const [inputCat, setInputCat] = useState<boolean>(false);
    const [newCat, setNewCat] = useState<string>("");

    const startEditing = (bookmark: Bookmark) => {
        setEditingId(bookmark.id);
        setEditedTitle(bookmark.title);
        setEditedUrl(bookmark.url);
        setEditedCategory(bookmark.category);
        setShowCategoryDropDown(false);
        setInputCat(false);
        setNewCat("");
    };

    const cancelEditing = () => {
        setEditingId(null);
        setEditedTitle("");
        setEditedUrl("");
        setEditedCategory("");
        setShowCategoryDropDown(false);
        setInputCat(false);
        setNewCat("");
    };

    const handleUpdate = (bookmark: Bookmark) => {
        const updatedBookmark = {
            ...bookmark,
            title: editedTitle,
            url: editedUrl,
            category: editedCategory,
            createdAt: new Date().toISOString(),
        };
        updateBookmark(updatedBookmark);
        cancelEditing();
    };

    const addNewCategory = (newCategory: string) => {
        if (newCategory) {
            setCategories((prev) => [newCategory, ...prev]);
            setEditedCategory(newCategory);
            setInputCat(false);
            setShowCategoryDropDown(false);
            setNewCat("");
        }
    };

    function formatDate(dateStr: string): string {
        const date = new Date(dateStr);
        return date.toLocaleString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        });
    }


    return (
        <div className="space-y-4">
            {bookmarks.map((bm) => (
                <div key={bm.id} className="p-4 border rounded bg-white dark:bg-gray-800 shadow">
                    {editingId === bm.id ? (
                        <div className="space-y-2">
                            <input
                                type="text"
                                value={editedTitle}
                                onChange={(e) => setEditedTitle(e.target.value)}
                                className="w-full p-2 border rounded"
                                placeholder="Title"
                            />
                            <input
                                type="text"
                                value={editedUrl}
                                onChange={(e) => setEditedUrl(e.target.value)}
                                className="w-full p-2 border rounded"
                                placeholder="URL"
                            />
                            
                            <div className="mb-2">
                                <label className="block mb-1">Category:</label>
                                <div
                                    onClick={() => {
                                        setShowCategoryDropDown(!showCategoryDropDown);
                                        setInputCat(false);
                                    }}
                                    className="p-3 bg-gray-100 dark:bg-gray-900 rounded dark:text-white cursor-pointer"
                                >
                                    {editedCategory || "Select Category"}
                                </div>
                                {showCategoryDropDown && (
                                    <div className="w-full p-3 gap-1 shadow">
                                        {categories.map((cat, idx) => (
                                            <p
                                                onClick={() => {
                                                    setEditedCategory(cat);
                                                    setShowCategoryDropDown(false);
                                                }}
                                                key={idx}
                                                className="p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-900 cursor-pointer"
                                            >
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
                                                <button
                                                    onClick={() => addNewCategory(newCat)}
                                                    className="text-center mt-2 w-max p-3 px-5 bg-blue-400 text-white cursor-pointer rounded-md"
                                                >
                                                    Add category
                                                </button>
                                            </div>
                                        )}
                                        {!inputCat && (
                                            <button
                                                onClick={() => setInputCat(true)}
                                                className="text-center w-max p-3 px-5 bg-blue-400 text-white cursor-pointer rounded-md"
                                            >
                                                Add Category +
                                            </button>
                                        )}
                                    </div>
                                )}
                            </div>
                            <div className="flex space-x-2">
                                <button
                                    onClick={() => handleUpdate(bm)}
                                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                                >
                                    Save
                                </button>
                                <button
                                    onClick={cancelEditing}
                                    className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="font-bold text-lg">{bm.title}</h3>
                                <p className="text-blue-600">{bm.url}</p>
                                <span className="w-max my-2 inline-block px-5 py-1 bg-blue-200 dark:bg-blue-600 text-blue-800 dark:text-blue-100 rounded-full">
                                    {bm.category}
                                </span>
                                <p className="text-xs text-gray-500">Created: {formatDate(bm.createdAt)}</p>
                            </div>
                            <div className="flex flex-col space-y-2">
                                <button
                                    onClick={() => startEditing(bm)}
                                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => deleteBookmark(bm.id)}
                                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default BookmarkList;