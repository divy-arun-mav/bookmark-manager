"use client";

import { Bookmark } from "../app/page";

interface BookmarkListProps {
    bookmarks: Bookmark[];
    deleteBookmark: (id: string) => void;
}

const BookmarkList: React.FC<BookmarkListProps> = ({ bookmarks, deleteBookmark }) => {
    if (bookmarks.length === 0) {
        return <p className="text-center">No bookmarks available.</p>;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {bookmarks.map((bookmark) => (
                <div
                    key={bookmark.id}
                    className="p-4 bg-white dark:bg-gray-800 rounded shadow flex flex-col"
                >
                    <a
                        href={bookmark.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl font-semibold hover:underline"
                    >
                        {bookmark.title}
                    </a>
                    <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                        {bookmark.url}
                    </p>
                    <span className="w-max my-2 inline-block px-5 py-1 bg-blue-200 dark:bg-blue-600 text-blue-800 dark:text-blue-100 rounded-full">
                        {bookmark.category}
                    </span>
                    <button
                        onClick={() => deleteBookmark(bookmark.id)}
                        className="mt-auto px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
};

export default BookmarkList;