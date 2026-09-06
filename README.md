# Todo List App - React ✅

**🌐 Live Site:** [todoapp.thomasscheiber.com](https://todoapp.thomasscheiber.com/)

A simple, clean todo list application built with React, demonstrating fundamental React concepts and state management.

## ✅ Features

- **Add Todos**: Create new tasks with a simple form
- **Toggle Completion**: Mark tasks as complete/incomplete
- **Delete Todos**: Remove tasks from the list
- **Persistent State**: Todos remain during the session
- **Clean UI**: Minimalist, user-friendly interface
- **Responsive Design**: Works on all screen sizes

## 🛠️ Technologies Used

- **React 19** - UI library with hooks
- **Vite 8** - Development and production build tool
- **CSS3** - Styling and layout
- **JavaScript (ES6+)** - Modern JavaScript features

## 🎯 Core Functionality

### Task Management
- ➕ **Add**: Create new todos with text input
- ✓ **Toggle**: Mark todos as complete/incomplete
- 🗑️ **Delete**: Remove todos from the list
- 📝 **Display**: View all todos in a clean list

### User Interface
- Form input with submit button
- Todo list with visual completion status
- Action buttons for each todo
- Strike-through styling for completed items

## 📦 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/t-scheiber/todo-app.git

# Navigate to project directory
cd todo-app

# Install dependencies
bun install --frozen-lockfile

# Start development server
bun run start
```

The application will open at `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── App.jsx         # Main component with todo logic
├── App.css         # Styling for the app
├── index.jsx       # React entry point
├── index.css       # Global styles
└── assets/         # Images and static files
```

## 💡 Key React Concepts Demonstrated

### React Hooks
```javascript
// State management with useState
const [todos, setTodos] = useState([]);
const [todoInput, setTodoInput] = useState('');
```

### State Management
- Managing array of todos
- Controlled form inputs
- Updating nested state properties

### Event Handling
- Form submission
- Toggle completion status
- Delete todos

### Data Structure
```javascript
{
  id: nextId.current++,
  text: "Todo text",
  completed: false
}
```

## 🎨 Features Breakdown

### Add Todo
- Form with controlled input
- Prevent empty submissions
- Generate unique IDs using an instance-local counter
- Clear input after submission

### Toggle Completion
- Map through todos array
- Update specific todo's completed status
- Maintain immutability with spread operator
- Visual feedback with CSS classes

### Delete Todo
- Filter todos by ID
- Remove specific todo from state
- Immediate UI update

## 📱 Responsive Design

The application is fully responsive:
- Desktop layouts
- Tablet views
- Mobile screens

## 📚 Learning Outcomes

This project teaches:

### React Fundamentals
- Component structure
- useState hook for state management
- Event handling in React
- List rendering with .map()
- Conditional rendering
- Form handling

### JavaScript Concepts
- Array methods (map, filter)
- ES6+ syntax (arrow functions, destructuring, spread operator)
- Immutable state updates
- Unique ID generation

### Best Practices
- Controlled components
- Key props for list items
- Immutable state updates
- Clean component structure
- Semantic HTML

## 🎓 Perfect For

- Learning React basics
- Understanding state management
- Portfolio projects
- Code interview preparation
- Teaching React concepts

## 🚀 Build for Production

```bash
# Create optimized production build
bun run build
```

Creates a production-ready build in the `build/` folder.

## 🔧 Available Scripts

- `bun run start` - Run development server
- `bun run test --runInBand --watch=false` - Run tests
- `bun run build` - Create production build

## 🌟 Code Highlights

### State Management
Clean, functional approach to managing todos:
```javascript
// Add todo
setTodos(current => [...current, newTodo]);

// Toggle completion
setTodos(current => current.map(todo => 
  todo.id === id ? {...todo, completed: !todo.completed} : todo
));

// Delete todo
setTodos(current => current.filter(todo => todo.id !== id));
```

## 🔄 Future Enhancements

Potential features to add:
- Local storage persistence
- Edit existing todos
- Filter by completion status
- Sort todos
- Categories/tags
- Due dates
- Priority levels
- Dark mode
- Drag-and-drop reordering

## 💪 Skills Demonstrated

- React hooks (useState)
- Component composition
- State management
- Event handling
- Array manipulation
- Form handling
- CSS styling
- Responsive design

---

**Built with React** ⚛️ | **Simple & Functional** ✨ | **Great for Learning** 📚

## Maintenance validation

Use Node 22.23.2 and Bun 1.4.2. `bun run build` first applies strict JavaScript type checking to the component and entry point, then creates `build/`. Run `bun run lint` and `bun run test:production` as well as the component tests. The production smoke starts the locked local server on loopback and verifies the built HTML and referenced assets with bounded requests.

All 12 component tests cover the existing add, blank-input rejection, exact text, form submit, complete, undo, delete and safe text-rendering behavior. Two regression tests also verify that tasks added in the same millisecond complete and delete independently. The previous timestamp IDs collided and affected multiple rows; an instance-local counter fixes this without changing styling or ordinary behavior. Tasks still reset on reload.

`bun run start:prod` serves `build/` with the locked local `serve` dependency, binds `0.0.0.0`, and respects `PORT` (default 3000). Nixpacks retains Node 22, Bun, `build/` and the production start command; installation now enforces the committed lockfile. The unused web-vitals callback scaffold is removed with the deprecated CRA toolchain.

GitHub Pages currently serves a separate legacy `gh-pages` branch. This source baseline does not publish Pages or reconfigure the documented custom-domain host. The live production deployment remains a separate validation and publication step.
