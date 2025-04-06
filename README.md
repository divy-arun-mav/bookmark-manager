<p align="center">
    <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" align="center" width="30%">
</p>
<p align="center"><h1 align="center">BOOKMARK-MANAGER</h1></p>
<p align="center">
	<em><code>A minimalistic yet powerful bookmark management application built with Next.js and TypeScript. Save, filter, and manage your bookmarks all in one place with a beautiful and responsive UI.</code></em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/divy-arun-mav/bookmark-manager?style=default&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/divy-arun-mav/bookmark-manager?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/divy-arun-mav/bookmark-manager?style=default&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/divy-arun-mav/bookmark-manager?style=default&color=0080ff" alt="repo-language-count">
</p>
<p align="center"><!-- default option, no dependency badges. -->
</p>
<p align="center">
	<!-- default option, no dependency badges. -->
</p>
<br>

## 🔗 Table of Contents

- [📍 Overview](#-overview)
- [👾 Features](#-features)
- [📁 Project Structure](#-project-structure)
  - [📂 Project Index](#-project-index)
- [🚀 Getting Started](#-getting-started)
  - [☑️ Prerequisites](#-prerequisites)
  - [⚙️ Installation](#-installation)
  - [🤖 Usage](#🤖-usage)
  - [🧪 Testing](#🧪-testing)
- [📌 Project Roadmap](#-project-roadmap)
- [🔰 Contributing](#-contributing)
- [🎗 License](#-license)
- [🙌 Acknowledgments](#-acknowledgments)

---

## 📍 Overview

<code>A minimalistic yet powerful bookmark management application built with Next.js and TypeScript. Save, filter, and manage your bookmarks all in one place with a beautiful and responsive UI.</code>

---

## 👾 Features

<ul> <li>🔖 Add, edit, and delete bookmarks easily.</li> <li>🎯 Filter bookmarks by tags or titles.</li> <li>🗂 Categorize bookmarks with intuitive UI.</li> <li>🌐 Automatically fetch website metadata (coming soon).</li> <li>🌙 Dark and light theme support (coming soon).</li> </ul>

---

## 📁 Project Structure

```sh
└── bookmark-manager/
    ├── README.md
    ├── app
    │   ├── favicon.ico
    │   ├── globals.css
    │   ├── icon.png
    │   ├── layout.tsx
    │   └── page.tsx
    ├── components
    │   ├── BookmarkFilter.tsx
    │   ├── BookmarkForm.tsx
    │   └── BookmarkList.tsx
    ├── eslint.config.mjs
    ├── next.config.ts
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.mjs
    ├── public
    │   ├── file.svg
    │   ├── globe.svg
    │   ├── next.svg
    │   ├── vercel.svg
    │   └── window.svg
    └── tsconfig.json
```


### 📂 Project Index
<details open>
	<summary><b><code>BOOKMARK-MANAGER/</code></b></summary>
	<details> <!-- __root__ Submodule -->
		<summary><b>__root__</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/divy-arun-mav/bookmark-manager/blob/master/package-lock.json'>package-lock.json</a></b></td>
				<td><code>Auto-generated lockfile to ensure consistent dependency versions.</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/divy-arun-mav/bookmark-manager/blob/master/next.config.ts'>next.config.ts</a></b></td>
				<td><code>Configuration file for Next.js app settings and customizations.</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/divy-arun-mav/bookmark-manager/blob/master/tsconfig.json'>tsconfig.json</a></b></td>
				<td><code>TypeScript configuration settings for compiler options and project structure.</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/divy-arun-mav/bookmark-manager/blob/master/eslint.config.mjs'>eslint.config.mjs</a></b></td>
				<td><code>Linting configuration settings for entire project and project structure.</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/divy-arun-mav/bookmark-manager/blob/master/postcss.config.mjs'>postcss.config.mjs</a></b></td>
				<td><code>Tailwind css and normal css integration with nextjs </code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/divy-arun-mav/bookmark-manager/blob/master/package.json'>package.json</a></b></td>
				<td><code>Auto-generated lockfile to ensure consistent dependency versions.</code></td>
			</tr>
			</table>
		</blockquote>
	</details>
	<details> <!-- components Submodule -->
		<summary><b>components</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/divy-arun-mav/bookmark-manager/blob/master/components/BookmarkList.tsx'>BookmarkList.tsx</a></b></td>
				<td><code>Component to render and manage the list of saved bookmarks with filtering logic.</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/divy-arun-mav/bookmark-manager/blob/master/components/BookmarkFilter.tsx'>BookmarkFilter.tsx</a></b></td>
				<td><code>Component for filtering bookmarks based on user input</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/divy-arun-mav/bookmark-manager/blob/master/components/BookmarkForm.tsx'>BookmarkForm.tsx</a></b></td>
				<td><code>Form UI component to add new bookmarks with title, URL, and tags.</code></td>
			</tr>
			</table>
		</blockquote>
	</details>
	<details> <!-- app Submodule -->
		<summary><b>app</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/divy-arun-mav/bookmark-manager/blob/master/app/layout.tsx'>layout.tsx</a></b></td>
				<td><code>Main layout file that wraps pages with a shared structure</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/divy-arun-mav/bookmark-manager/blob/master/app/globals.css'>globals.css</a></b></td>
				<td><code>Global styles applied throughout the app</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/divy-arun-mav/bookmark-manager/blob/master/app/page.tsx'>page.tsx</a></b></td>
				<td><code>Global styles applied throughout the app</code></td>
			</tr>
			</table>
		</blockquote>
	</details>
</details>

---
## 🚀 Getting Started

### ☑️ Prerequisites

Before getting started with bookmark-manager, ensure your runtime environment meets the following requirements:

- **Programming Language:** TypeScript
- **Package Manager:** Npm


### ⚙️ Installation

Install bookmark-manager using one of the following methods:

**Build from source:**

1. Clone the bookmark-manager repository:
```sh
❯ git clone https://github.com/divy-arun-mav/bookmark-manager
```

2. Navigate to the project directory:
```sh
❯ cd bookmark-manager
```

3. Install the project dependencies:


**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm install
```




### 🤖 Usage
Run bookmark-manager using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm start
```


### 🧪 Testing
Run the test suite using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm test
```


---
## 📌 Project Roadmap

- [X] **`Task 1`**: <strike>Implement feature one.</strike>
- [ ] **`Task 2`**: Implement feature two.
- [ ] **`Task 3`**: Implement feature three.

---

## 🔰 Contribution

<details open>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com{/divy-arun-mav/bookmark-manager/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=divy-arun-mav/bookmark-manager">
   </a>
</p>
</details>

---