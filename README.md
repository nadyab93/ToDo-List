# Todo-List

This is a Todo List application built using Vite for React.js, Tailwind CSS, and Firebase. The app allows users to manage their daily tasks, mark them as completed, edit existing tasks, and delete them as needed. It features real-time updates using Firebase, providing a seamless user experience.

https://github.com/user-attachments/assets/dedc754e-a246-45c8-827f-8e22c09a41f1

# Features

- Add Todos: Users can add new tasks to their todo list.
- Mark as Complete: Tasks can be marked as completed by clicking the checkbox. Completed tasks are visually distinguished by crossing them over for clarity.
- Crossover Feature: When a task is marked as completed, the text is automatically crossed over, giving a clear indication of its status.
- Edit Todos: Users can edit the text of existing tasks. When in edit mode, the task’s text is highlighted, and a "Save" button allows users to confirm changes.
- Delete Todos: Users can delete tasks from the list, removing them permanently.
- Real-Time Sync: Todo list data is stored in Firebase and updated in real-time across all connected devices.
- Responsive Design: The app is fully responsive and works well on both desktop and mobile devices.

# Technologies Used

- [React.js](https://react.dev/): A build tool that provides fast development and optimized production builds.
- [Vite](https://vitejs.dev/): A JavaScript library for building user interfaces.
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework used for styling the app.
- [Firebase Firestore](https://firebase.google.com/docs/firestore): A real-time NoSQL database used to store and sync todo data.

# Usage

1) Add a Todo: Enter a task in the input field and click the "plus" button or press Enter to add it to the list.
2) Toggle Complete: Click the checkbox next to a todo to mark it as complete or incomplete. Completed tasks will be crossed out automatically.
3) Edit a Todo: Click the edit icon to switch to edit mode, change the text, and then click the "Save" button.
4) Delete a Todo: Click the trash icon to delete the todo permanently.

# External Resources

- [Firebase](https://firebase.google.com/): Provides real-time database and authentication features.
- [React Icons](https://react-icons.github.io/react-icons/): Used for the icons like the "plus", "edit", and "trash" icons.
- [Tailwind CSS](https://tailwindcss.com/): For styling the app with utility classes.

# Tutorial

This project was initially based on a tutorial from the YouTube channel [Code Commerce](https://www.youtube.com/watch?v=drF8HbnW87w). The tutorial covered the basic structure of a Todo List app using React.js, Firebase, and Tailwind CSS. The implementation extends the tutorial by adding a task crossover feature upon completion and an enhanced edit task functionality.

# License

MIT License

Copyright (c) 2024 Nadya Melissa Bharrat

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
