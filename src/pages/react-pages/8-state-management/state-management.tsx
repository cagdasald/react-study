import React from 'react';
import LessonCard from '../../../components/LessonCard';
import CodeBlock from '../../../components/CodeBlock';
import Badge from '../../../components/Badge';

const StateManagement: React.FC = () => {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-text-primary mb-4">
          React State Management
        </h1>
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          <Badge variant="primary">Redux Toolkit / RTK Query / Zustand / Jotai / Recoil / MobX</Badge>
        </div>
        <p className="text-lg text-secondary-dark max-w-3xl mx-auto">
          React uygulamalarında state management çözümleri: Redux Toolkit, Zustand, Jotai, Recoil ve MobX karşılaştırması
        </p>
      </div>

      {/* Redux Toolkit */}
      <LessonCard
        title="Redux Toolkit - Modern Redux"
        description="Redux Toolkit ile modern state management"
        icon="🔄"
        level="advanced"
      >
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-text-primary mb-4">Redux Toolkit Nedir?</h3>
            <p className="text-secondary-dark mb-4">
              Redux Toolkit (RTK), Redux'un resmi, opinionated, batteries-included toolset'idir.
              Redux uygulamaları yazmayı daha kolay ve daha az boilerplate ile hale getirir.
            </p>

            <div className="bg-white/50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-text-primary mb-2">Özellikler</h4>
              <div className="text-secondary-dark text-sm space-y-1">
                <p>• createSlice - reducer ve actions</p>
                <p>• configureStore - store setup</p>
                <p>• createAsyncThunk - async actions</p>
                <p>• RTK Query - data fetching</p>
                <p>• Immer integration</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Avantajlar</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• Less boilerplate</p>
                  <p>• Immutable updates</p>
                  <p>• DevTools integration</p>
                  <p>• Time-travel debugging</p>
                </div>
              </div>
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Kullanım Alanları</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• Large applications</p>
                  <p>• Complex state logic</p>
                  <p>• Team projects</p>
                  <p>• Predictable state</p>
                </div>
              </div>
            </div>
          </div>

          <CodeBlock
            title="Redux Toolkit Örneği"
            description="Redux Toolkit ile counter ve todo uygulaması"
            language="jsx"
            code={`// Install: npm install @reduxjs/toolkit react-redux

// store/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    loading: false
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    reset: (state) => {
      state.value = 0;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.value += action.payload;
      })
      .addCase(incrementAsync.rejected, (state) => {
        state.loading = false;
      });
  }
});

// Async thunk
export const incrementAsync = createAsyncThunk(
  'counter/incrementAsync',
  async (amount) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return amount;
  }
);

export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions;
export default counterSlice.reducer;

// store/todoSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk for fetching todos
export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async () => {
    const response = await fetch('/api/todos');
    return response.json();
  }
);

export const addTodo = createAsyncThunk(
  'todos/addTodo',
  async (text) => {
    const response = await fetch('/api/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, completed: false })
    });
    return response.json();
  }
);

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    loading: false,
    error: null
  },
  reducers: {
    toggleTodo: (state, action) => {
      const todo = state.items.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter(todo => todo.id !== action.payload);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.items.push(action.payload);
      });
  }
});

export const { toggleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;

// store/index.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import todoReducer from './todoSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST']
      }
    })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// hooks.ts
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from './store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// components/Counter.jsx
import React from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { increment, decrement, incrementByAmount, reset, incrementAsync } from '../store/counterSlice';

const Counter = () => {
  const dispatch = useAppDispatch();
  const { value, loading } = useAppSelector(state => state.counter);

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-xl font-bold mb-4">Counter: {value}</h2>
      <div className="space-x-2">
        <button 
          onClick={() => dispatch(increment())}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          +1
        </button>
        <button 
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          -1
        </button>
        <button 
          onClick={() => dispatch(incrementByAmount(5))}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          +5
        </button>
        <button 
          onClick={() => dispatch(reset())}
          className="px-4 py-2 bg-gray-500 text-white rounded"
        >
          Reset
        </button>
        <button 
          onClick={() => dispatch(incrementAsync(10))}
          disabled={loading}
          className="px-4 py-2 bg-purple-500 text-white rounded disabled:opacity-50"
        >
          {loading ? 'Loading...' : '+10 Async'}
        </button>
      </div>
    </div>
  );
};

export default Counter;`}
          />
        </div>
      </LessonCard>

      {/* Zustand */}
      <LessonCard
        title="Zustand - Lightweight State"
        description="Zustand ile basit ve güçlü state management"
        icon="🐻"
        level="intermediate"
      >
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-text-primary mb-4">Zustand Nedir?</h3>
            <p className="text-secondary-dark mb-4">
              Zustand, küçük, hızlı ve ölçeklenebilir state management çözümüdür.
              Boilerplate olmadan basit ve güçlü state yönetimi sağlar.
            </p>

            <div className="bg-white/50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-text-primary mb-2">Özellikler</h4>
              <div className="text-secondary-dark text-sm space-y-1">
                <p>• Minimal boilerplate</p>
                <p>• TypeScript support</p>
                <p>• DevTools integration</p>
                <p>• Middleware support</p>
                <p>• Persist support</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Avantajlar</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• Very lightweight</p>
                  <p>• Easy to learn</p>
                  <p>• No providers needed</p>
                  <p>• Great performance</p>
                </div>
              </div>
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Kullanım Alanları</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• Small to medium apps</p>
                  <p>• Quick prototyping</p>
                  <p>• Global state</p>
                  <p>• Simple state logic</p>
                </div>
              </div>
            </div>
          </div>

          <CodeBlock
            title="Zustand Örneği"
            description="Zustand ile counter ve todo uygulaması"
            language="jsx"
            code={`// Install: npm install zustand

// store/useCounterStore.js
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const useCounterStore = create(
  devtools(
    persist(
      (set, get) => ({
        count: 0,
        loading: false,
        
        // Actions
        increment: () => set((state) => ({ count: state.count + 1 })),
        decrement: () => set((state) => ({ count: state.count - 1 })),
        incrementByAmount: (amount) => set((state) => ({ count: state.count + amount })),
        reset: () => set({ count: 0 }),
        
        // Async action
        incrementAsync: async (amount) => {
          set({ loading: true });
          await new Promise(resolve => setTimeout(resolve, 1000));
          set((state) => ({ count: state.count + amount, loading: false }));
        }
      }),
      {
        name: 'counter-storage', // unique name
        getStorage: () => localStorage, // (optional) by default, 'localStorage' is used
      }
    ),
    {
      name: 'counter-store', // unique name for devtools
    }
  )
);

export default useCounterStore;

// store/useTodoStore.js
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const useTodoStore = create(
  devtools(
    persist(
      (set, get) => ({
        todos: [],
        loading: false,
        error: null,
        
        // Actions
        addTodo: (text) => {
          const newTodo = {
            id: Date.now(),
            text,
            completed: false,
            createdAt: new Date().toISOString()
          };
          set((state) => ({ todos: [...state.todos, newTodo] }));
        },
        
        toggleTodo: (id) => {
          set((state) => ({
            todos: state.todos.map(todo =>
              todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
          }));
        },
        
        deleteTodo: (id) => {
          set((state) => ({
            todos: state.todos.filter(todo => todo.id !== id)
          }));
        },
        
        clearCompleted: () => {
          set((state) => ({
            todos: state.todos.filter(todo => !todo.completed)
          }));
        },
        
        // Async action
        fetchTodos: async () => {
          set({ loading: true, error: null });
          try {
            const response = await fetch('/api/todos');
            const todos = await response.json();
            set({ todos, loading: false });
          } catch (error) {
            set({ error: error.message, loading: false });
          }
        }
      }),
      {
        name: 'todo-storage',
        getStorage: () => localStorage,
      }
    ),
    {
      name: 'todo-store',
    }
  )
);

export default useTodoStore;

// components/Counter.jsx
import React from 'react';
import useCounterStore from '../store/useCounterStore';

const Counter = () => {
  const { count, loading, increment, decrement, incrementByAmount, reset, incrementAsync } = useCounterStore();

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-xl font-bold mb-4">Counter: {count}</h2>
      <div className="space-x-2">
        <button 
          onClick={increment}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          +1
        </button>
        <button 
          onClick={decrement}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          -1
        </button>
        <button 
          onClick={() => incrementByAmount(5)}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          +5
        </button>
        <button 
          onClick={reset}
          className="px-4 py-2 bg-gray-500 text-white rounded"
        >
          Reset
        </button>
        <button 
          onClick={() => incrementAsync(10)}
          disabled={loading}
          className="px-4 py-2 bg-purple-500 text-white rounded disabled:opacity-50"
        >
          {loading ? 'Loading...' : '+10 Async'}
        </button>
      </div>
    </div>
  );
};

export default Counter;

// components/TodoList.jsx
import React, { useState, useEffect } from 'react';
import useTodoStore from '../store/useTodoStore';

const TodoList = () => {
  const { todos, loading, error, addTodo, toggleTodo, deleteTodo, clearCompleted, fetchTodos } = useTodoStore();
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addTodo(inputValue.trim());
      setInputValue('');
    }
  };

  const completedCount = todos.filter(todo => todo.completed).length;

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-xl font-bold mb-4">Todo List</h2>
      
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add a new todo..."
            className="flex-1 px-3 py-2 border rounded"
          />
          <button 
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Add
          </button>
        </div>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      <div className="space-y-2">
        {todos.map(todo => (
          <div key={todo.id} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              className="w-4 h-4"
            />
            <span className={todo.completed ? 'line-through text-gray-500' : ''}>
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="px-2 py-1 bg-red-500 text-white rounded text-sm"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      {todos.length > 0 && (
        <div className="mt-4 flex justify-between items-center">
          <span className="text-sm text-gray-500">
            {completedCount} of {todos.length} completed
          </span>
          <button
            onClick={clearCompleted}
            className="px-3 py-1 bg-gray-500 text-white rounded text-sm"
          >
            Clear Completed
          </button>
        </div>
      )}
    </div>
  );
};

export default TodoList;`}
          />
        </div>
      </LessonCard>

      {/* Jotai */}
      <LessonCard
        title="Jotai - Atomic State"
        description="Jotai ile atom-based state management"
        icon="⚛️"
        level="intermediate"
      >
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-text-primary mb-4">Jotai Nedir?</h3>
            <p className="text-secondary-dark mb-4">
              Jotai, atom-based state management kütüphanesidir. Bottom-up approach ile
              component'lar arasında state paylaşımını kolaylaştırır.
            </p>

            <div className="bg-white/50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-text-primary mb-2">Özellikler</h4>
              <div className="text-secondary-dark text-sm space-y-1">
                <p>• Atom-based state</p>
                <p>• Bottom-up approach</p>
                <p>• TypeScript support</p>
                <p>• DevTools integration</p>
                <p>• Suspense support</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Avantajlar</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• Fine-grained updates</p>
                  <p>• No providers needed</p>
                  <p>• Great performance</p>
                  <p>• Easy to test</p>
                </div>
              </div>
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Kullanım Alanları</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• Component state sharing</p>
                  <p>• Form state management</p>
                  <p>• UI state management</p>
                  <p>• Complex state logic</p>
                </div>
              </div>
            </div>
          </div>

          <CodeBlock
            title="Jotai Örneği"
            description="Jotai ile atom-based state management"
            language="jsx"
            code={`// Install: npm install jotai

// atoms/counterAtom.js
import { atom } from 'jotai';

export const countAtom = atom(0);
export const loadingAtom = atom(false);

// Derived atom
export const doubleCountAtom = atom((get) => get(countAtom) * 2);

// Async atom
export const fetchCountAtom = atom(
  null,
  async (get, set) => {
    set(loadingAtom, true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    const newCount = get(countAtom) + 10;
    set(countAtom, newCount);
    set(loadingAtom, false);
  }
);

// atoms/todoAtoms.js
import { atom } from 'jotai';

export const todosAtom = atom([]);
export const filterAtom = atom('all'); // 'all', 'active', 'completed'

// Derived atoms
export const filteredTodosAtom = atom((get) => {
  const todos = get(todosAtom);
  const filter = get(filterAtom);
  
  switch (filter) {
    case 'active':
      return todos.filter(todo => !todo.completed);
    case 'completed':
      return todos.filter(todo => todo.completed);
    default:
      return todos;
  }
});

export const todoStatsAtom = atom((get) => {
  const todos = get(todosAtom);
  const total = todos.length;
  const completed = todos.filter(todo => todo.completed).length;
  const active = total - completed;
  
  return { total, completed, active };
});

// Write-only atom for adding todos
export const addTodoAtom = atom(
  null,
  (get, set, text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
      createdAt: new Date().toISOString()
    };
    set(todosAtom, [...get(todosAtom), newTodo]);
  }
);

// Write-only atom for toggling todos
export const toggleTodoAtom = atom(
  null,
  (get, set, id) => {
    const todos = get(todosAtom);
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    set(todosAtom, updatedTodos);
  }
);

// Write-only atom for deleting todos
export const deleteTodoAtom = atom(
  null,
  (get, set, id) => {
    const todos = get(todosAtom);
    const updatedTodos = todos.filter(todo => todo.id !== id);
    set(todosAtom, updatedTodos);
  }
);

// components/Counter.jsx
import React from 'react';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { countAtom, loadingAtom, doubleCountAtom, fetchCountAtom } from '../atoms/counterAtom';

const Counter = () => {
  const [count, setCount] = useAtom(countAtom);
  const loading = useAtomValue(loadingAtom);
  const doubleCount = useAtomValue(doubleCountAtom);
  const fetchCount = useSetAtom(fetchCountAtom);

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-xl font-bold mb-4">Counter: {count}</h2>
      <p className="text-sm text-gray-600 mb-4">Double: {doubleCount}</p>
      
      <div className="space-x-2">
        <button 
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          +1
        </button>
        <button 
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          -1
        </button>
        <button 
          onClick={() => setCount(count + 5)}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          +5
        </button>
        <button 
          onClick={() => setCount(0)}
          className="px-4 py-2 bg-gray-500 text-white rounded"
        >
          Reset
        </button>
        <button 
          onClick={fetchCount}
          disabled={loading}
          className="px-4 py-2 bg-purple-500 text-white rounded disabled:opacity-50"
        >
          {loading ? 'Loading...' : '+10 Async'}
        </button>
      </div>
    </div>
  );
};

export default Counter;

// components/TodoList.jsx
import React, { useState } from 'react';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { 
  todosAtom, 
  filterAtom, 
  filteredTodosAtom, 
  todoStatsAtom,
  addTodoAtom,
  toggleTodoAtom,
  deleteTodoAtom
} from '../atoms/todoAtoms';

const TodoList = () => {
  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useAtom(filterAtom);
  const todos = useAtomValue(filteredTodosAtom);
  const stats = useAtomValue(todoStatsAtom);
  const addTodo = useSetAtom(addTodoAtom);
  const toggleTodo = useSetAtom(toggleTodoAtom);
  const deleteTodo = useSetAtom(deleteTodoAtom);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addTodo(inputValue.trim());
      setInputValue('');
    }
  };

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-xl font-bold mb-4">Todo List</h2>
      
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add a new todo..."
            className="flex-1 px-3 py-2 border rounded"
          />
          <button 
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Add
          </button>
        </div>
      </form>

      <div className="mb-4">
        <div className="flex space-x-2">
          <button
            onClick={() => setFilter('all')}
            className={\`px-3 py-1 rounded text-sm \${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'}\`}
          >
            All ({stats.total})
          </button>
          <button
            onClick={() => setFilter('active')}
            className={\`px-3 py-1 rounded text-sm \${filter === 'active' ? 'bg-blue-500 text-white' : 'bg-gray-200'}\`}
          >
            Active ({stats.active})
          </button>
          <button
            onClick={() => setFilter('completed')}
            className={\`px-3 py-1 rounded text-sm \${filter === 'completed' ? 'bg-blue-500 text-white' : 'bg-gray-200'}\`}
          >
            Completed ({stats.completed})
          </button>
        </div>
      </div>

      <div className="space-y-2">
        {todos.map(todo => (
          <div key={todo.id} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              className="w-4 h-4"
            />
            <span className={todo.completed ? 'line-through text-gray-500' : ''}>
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="px-2 py-1 bg-red-500 text-white rounded text-sm"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;`}
          />
        </div>
      </LessonCard>

      {/* State Management Comparison */}
      <LessonCard
        title="State Management Karşılaştırması"
        description="Farklı state management çözümlerinin karşılaştırması"
        icon="⚖️"
        level="advanced"
      >
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-text-primary mb-4">State Management Kütüphaneleri</h3>
            <p className="text-secondary-dark mb-4">
              Farklı state management çözümlerinin avantaj ve dezavantajlarını karşılaştıralım.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Kütüphane</th>
                    <th className="text-left p-2">Bundle Size</th>
                    <th className="text-left p-2">Learning Curve</th>
                    <th className="text-left p-2">Boilerplate</th>
                    <th className="text-left p-2">TypeScript</th>
                    <th className="text-left p-2">DevTools</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2 font-medium">Redux Toolkit</td>
                    <td className="p-2">~50KB</td>
                    <td className="p-2">Steep</td>
                    <td className="p-2">Medium</td>
                    <td className="p-2">✅</td>
                    <td className="p-2">✅</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-medium">Zustand</td>
                    <td className="p-2">~8KB</td>
                    <td className="p-2">Easy</td>
                    <td className="p-2">Low</td>
                    <td className="p-2">✅</td>
                    <td className="p-2">✅</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-medium">Jotai</td>
                    <td className="p-2">~12KB</td>
                    <td className="p-2">Medium</td>
                    <td className="p-2">Low</td>
                    <td className="p-2">✅</td>
                    <td className="p-2">✅</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-medium">Recoil</td>
                    <td className="p-2">~25KB</td>
                    <td className="p-2">Medium</td>
                    <td className="p-2">Medium</td>
                    <td className="p-2">✅</td>
                    <td className="p-2">✅</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-medium">MobX</td>
                    <td className="p-2">~45KB</td>
                    <td className="p-2">Steep</td>
                    <td className="p-2">High</td>
                    <td className="p-2">✅</td>
                    <td className="p-2">✅</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <CodeBlock
            title="State Management Seçim Rehberi"
            description="Hangi durumda hangi kütüphaneyi kullanmalı"
            language="jsx"
            code={`// State Management Seçim Rehberi

// 1. Redux Toolkit - Büyük uygulamalar için
// ✅ Kullanın:
// - Büyük, karmaşık uygulamalar
// - Takım projeleri
// - Predictable state updates
// - Time-travel debugging
// - Middleware ihtiyacı

// ❌ Kullanmayın:
// - Küçük uygulamalar
// - Hızlı prototyping
// - Basit state logic

// 2. Zustand - Orta ölçekli uygulamalar için
// ✅ Kullanın:
// - Orta ölçekli uygulamalar
// - Hızlı development
// - Minimal boilerplate
// - Global state management
// - TypeScript projeleri

// ❌ Kullanmayın:
// - Çok karmaşık state logic
// - Time-travel debugging ihtiyacı

// 3. Jotai - Component state sharing için
// ✅ Kullanın:
// - Component'lar arası state paylaşımı
// - Form state management
// - UI state management
// - Fine-grained updates
// - Suspense integration

// ❌ Kullanmayın:
// - Global state management
// - Karmaşık business logic

// 4. Recoil - Facebook tarafından geliştirilen
// ✅ Kullanın:
// - Atom-based state
// - Suspense integration
// - Concurrent features
// - Facebook ekosistemi

// ❌ Kullanmayın:
// - Production'da (experimental)
// - Küçük projeler

// 5. MobX - Reactive programming için
// ✅ Kullanın:
// - Reactive programming
// - Object-oriented approach
// - Complex state logic
// - Computed values

// ❌ Kullanmayın:
// - Functional programming
// - Immutable state
// - Küçük projeler

// Örnek: Proje boyutuna göre seçim
const projectSize = {
  small: 'Zustand veya Jotai',
  medium: 'Zustand veya Redux Toolkit',
  large: 'Redux Toolkit',
  enterprise: 'Redux Toolkit + RTK Query'
};

// Örnek: Kullanım durumuna göre seçim
const useCase = {
  'Global state': 'Zustand veya Redux Toolkit',
  'Component sharing': 'Jotai',
  'Form state': 'Jotai veya Zustand',
  'Server state': 'RTK Query veya React Query',
  'Complex logic': 'Redux Toolkit veya MobX'
};`}
          />
        </div>
      </LessonCard>
    </div>
  );
};

export default StateManagement;
