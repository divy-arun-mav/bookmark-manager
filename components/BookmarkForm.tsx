"use client";

import { useState, FormEvent } from "react";
import { Bookmark } from "../app/page";
import { v4 as uuidv4 } from "uuid";

interface BookmarkFormProps {
    addBookmark: (bookmark: Bookmark) => void;
    categories: string[];
}

const BookmarkForm: React.FC<BookmarkFormProps> = ({ addBookmark, categories }) => {
    const [title, setTitle] = useState("");
    const [url, setUrl] = useState("");
    const [category, setCategory] = useState(categories[0] || "");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!title || !url) return; // basic validation

        // Simple URL validation
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
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full p-2 border rounded"
                >
                    {categories.map((cat, idx) => (
                        <option key={idx} value={cat}>
                            {cat}
                        </option>
                    ))}
                </select>
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