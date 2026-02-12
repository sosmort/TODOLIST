<!-- # 📝 Note-Taking & Task Manager

A modern, vanilla JavaScript task management application focused on clean state management, responsive design, and structured DOM handling.

[Live Demo](https://todolist-project-jsvanilla.netlify.app/)

--- -->

# 📝 Note-Taking & Task Manager

A modern, vanilla JavaScript task management application focused on clean state management, responsive design, and structured DOM handling.

[Live Demo](https://todolist-project-jsvanilla.netlify.app/)

---

## 📸 Preview

![App Preview](./public/App Preview.png)

---

## 🚀 Features

### ✅ Add Notes

- Users can create new notes via a popup form.
- Each note is assigned a unique `id` upon creation to ensure data integrity.

### ✅ Toggle Completion

- Integrated checkboxes to toggle state:
  - `checked: true`
  - `checked: false`
- Immediate UI feedback and automatic state persistence.

### ✅ Filter System

- Efficient data derivation from the main `todoArray`.
- **Views:** All, Complete, and Incomplete.
- Prevents state duplication by filtering the source of truth dynamically.

### ✅ Search Functionality

- **Real-time:** Updates the UI on every keystroke.
- **Smart:** Case-insensitive matching.
- **Feedback:** Renders a specific "empty state" when no matches are found.

### ✅ Persistent Storage

- Powered by `localStorage` to sync data across sessions.
- Saves the notes array and the user's last selected filter preference.

### ✅ Responsive Design

- Built with **Tailwind CSS** using a mobile-first strategy.
- Responsive dropdowns and touch-friendly action buttons.
- Hover effects optimized for desktop environments.

---

## 🧠 Architecture (How It Works)

### 🔹 Single Source of Truth

All data is stored in a single `todoArray`. Filtered views are derived using `.filter()` rather than creating redundant arrays, keeping the application logic "DRY" (Don't Repeat Yourself).

### 🔹 Rendering Logic

The `createElementHmtl(displayArray)` function handles all DOM updates:

1. **Clears** the container.
2. **Iterates** through the array.
3. **Generates** elements dynamically.
4. **Validates** if an "empty state" message is required.

### 🔹 Event Delegation

The app uses a single event listener on the parent container:
`container.addEventListener("click", ...)`
This improves performance and ensures that dynamically added notes inherit functionality without needing new listeners.

---

## 🛠 Technologies Used

| Technology           | Purpose                            |
| :------------------- | :--------------------------------- |
| **HTML5**            | Markup and Structure               |
| **Tailwind CSS**     | Styling and Responsiveness         |
| **JavaScript (ES6)** | Logic and DOM Manipulation         |
| **Vite**             | Development Environment & Bundling |
| **LocalStorage**     | Client-side Data Persistence       |

---

## 📂 Project Structure

```text
/
├── index.html
├── src/
│   ├── main.js    # Entry point
│   └── script.js  # Core logic & functions
├── public/
│   └── images/    # Assets & Icons
└── package.json
```

## 🔧 Installation

**Clone the repository:**

```bash
git clone git@github.com:sosmort/TODOLIST.git

```

**Install dependencies:**

```bash
npm install
```

**Start the development server:**

```bash
npm run dev
```

## 🌍 Deployment

The project is live and can be accessed at the following link:

👉 **[ View Live Project](https://todolist-project-jsvanilla.netlify.app/)**

---

_Deployed via Netlify_
