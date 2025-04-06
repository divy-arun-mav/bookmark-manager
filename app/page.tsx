"use client";

import { useState, useEffect } from "react";
import BookmarkForm from "../components/BookmarkForm";
import BookmarkList from "../components/BookmarkList";
import BookmarkFilter from "../components/BookmarkFilter";
import Image from "next/image";

export interface Bookmark {
  id: string;
  title: string;
  url: string;
  category: string;
  createdAt: string;
}

const HomePage = () => {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [filter, setFilter] = useState<string>("All");
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [categories, setCategories] = useState<string[]>(["Work", "Personal", "Other"]);

  useEffect(() => {
    const stored = localStorage.getItem("bookmarks");
    if (stored) {
      setBookmarks(JSON.parse(stored));
    }
    const darkModeStored = localStorage.getItem("darkMode");
    if (darkModeStored) {
      setDarkMode(JSON.parse(darkModeStored));
    }
    const categoriesStored = localStorage.getItem("categories");
    if (categoriesStored && JSON.parse(categoriesStored).length >= 3) {
      setCategories(JSON.parse(categoriesStored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }, [bookmarks]);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("categories", JSON.stringify(categories));
  }, [categories]);

  const addBookmark = (bookmark: Bookmark) => {
    if (!bookmark?.category) {
      alert("Please select the category");
      return;
    }
    setBookmarks((prev) => [bookmark, ...prev]);
  };

  const deleteBookmark = (id: string) => {
    setBookmarks((prev) => prev.filter((bm) => bm.id !== id));
  };

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const filteredBookmarks =
    filter === "All"
      ? bookmarks
      : bookmarks.filter((bm) => bm.category === filter);

  const lightMode = () => {
    return (
      <Image
        width={20}
        height={20}
        className="w-5"
        src="https://static.thenounproject.com/png/2540391-200.png"
        alt="Light Mode Icon"
      />
    );
  };

  const darkModeUI = () => {
    return (
      <Image
        width={20}
        height={20}
        className="w-5"
        src="https://www.svgrepo.com/show/381213/dark-mode-night-moon.svg"
        alt="Dark Mode Icon"
      />
    );
  };

  return (
    <div data-theme={darkMode ? "dark" : "light"} className="text-black dark:text-white">
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <div className="container mx-auto p-4">
          <header className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold">Bookmark Manager</h1>
            <div
              onClick={toggleDarkMode}
              className="px-4 py-2 bg-white rounded hover:bg-gray-100 shadow-xl cursor-pointer"
            >
              {darkMode ? lightMode() : darkModeUI()}
            </div>
          </header>

          <BookmarkForm
            addBookmark={addBookmark}
            categories={categories}
            setCategories={setCategories}
          />

          <BookmarkFilter
            filter={filter}
            setFilter={setFilter}
            categories={categories}
          />

          <BookmarkList
            bookmarks={filteredBookmarks}
            deleteBookmark={deleteBookmark}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;