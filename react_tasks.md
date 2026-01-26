### **📌 React Task: Task Manager with API and Routing**

For this  task, you will **build a full-featured Task Manager App** that includes:
- **React Router**
- **API Integration**
- **CRUD Operations**
- **Form Validation**
- **React Hooks**
- **Filtering and Sorting**

---

## **🎯 Task Overview**
You need to **create a task management application** where users can **add, update, delete, complete, sort and filter tasks**. The app should store data via an API and have a separate details page for each task.

**Use json-server insted of a real API for this task.**

---
## **🔹 Features & Requirements**

**Task fields:**

1️⃣ **id (string or number, unique)**
A unique identifier for each task.
Example: "1", "task-123"

2️⃣ **title (string, required, 3-50 chars)**
A short title summarizing the task.
Example: "Complete React Project"

3️⃣ **description (string, optional, max 200 chars)**
A more detailed explanation of the task.
Example: "Implement the task manager UI and API integration."

4️⃣ **dueDate (string, required, YYYY-MM-DD format)**
The deadline for the task.
Example: "2025-04-10"

5️⃣ **priority (string, required, enum: "Low", "Medium", "High")**
Importance level of the task.
Example: "High"

6️⃣ **category (string, required, predefined categories)**
The task type (e.g., "Work", "Personal", "Shopping", "Fitness").
Example: "Work"

7️⃣ **status (string, required, enum: "Pending", "Completed")**
Whether the task is done or not.
Example: "Pending"

### **1️⃣ App Structure (React Router)**
The app should have multiple pages:
- `/` → Home (Task List)
- `/task/:id` → Task Details Page
- `/add-task` → Form to Add New Task
- `/edit-task/:id` → Form to Edit Task

### **2️⃣ Components**
- `App.js` → Manages routing.
- `TaskList.js` → Displays all tasks with filters and sorting.
- `TaskItem.js` → A single task (with edit, delete, complete).
- `TaskDetails.js` → Shows details of a selected task.
- `TaskForm.js` → Used for both **adding and editing** tasks.
- `Filter.js` → Controls filtering of tasks.

---

### **3️⃣ Functionalities**
✅ **Create, Read, Update, Delete (CRUD)**
- Fetch tasks from an API (use json-server)
- Add a new task with **form validation**.
- Edit existing tasks.
- Delete tasks.

✅ **Mark tasks as completed**
- Toggle task completion status.

✅ **Filter tasks**
- Show **All, Completed, or Pending** tasks.

✅ **Sort tasks**
- Sort tasks by **due date**.

✅ **React Router for Navigation**
- Implement **Dynamic Routes** for task details and editing.

✅ **Form Validation**
- Ensure task field mets the requirements in the **Task Fields** section.

---

## **📂 Suggested Folder Structure**
- Create folder structure using best practices for React apps.

---



