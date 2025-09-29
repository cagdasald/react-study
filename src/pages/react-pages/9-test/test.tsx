import React from 'react';
import LessonCard from '../../../components/LessonCard';
import CodeBlock from '../../../components/CodeBlock';
import Badge from '../../../components/Badge';

const Test: React.FC = () => {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-text-primary mb-4">
          React Testing
        </h1>
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          <Badge variant="primary">RTL / Jest / Cypress / Playwright / Testing Library / Vitest</Badge>
        </div>
        <p className="text-lg text-secondary-dark max-w-3xl mx-auto">
          React uygulamalarında test yazma: RTL, Jest, Cypress ve Playwright ile kapsamlı test stratejileri
        </p>
      </div>

      {/* React Testing Library */}
      <LessonCard
        title="React Testing Library - Component Testing"
        description="RTL ile component testleri yazma"
        icon="🧪"
        level="intermediate"
      >
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-text-primary mb-4">React Testing Library Nedir?</h3>
            <p className="text-secondary-dark mb-4">
              React Testing Library, React component'larını test etmek için basit ve güçlü bir kütüphanedir.
              Kullanıcı davranışlarını simüle ederek component'ları test eder.
            </p>

            <div className="bg-white/50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-text-primary mb-2">Özellikler</h4>
              <div className="text-secondary-dark text-sm space-y-1">
                <p>• User-centric testing</p>
                <p>• Accessibility testing</p>
                <p>• Query methods</p>
                <p>• Custom render</p>
                <p>• Mock functions</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Avantajlar</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• Real user behavior</p>
                  <p>• Accessible by default</p>
                  <p>• Easy to maintain</p>
                  <p>• Great documentation</p>
                </div>
              </div>
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Query Methods</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• getByRole, getByText</p>
                  <p>• getByLabelText, getByPlaceholderText</p>
                  <p>• getByTestId</p>
                  <p>• findBy* (async)</p>
                </div>
              </div>
            </div>
          </div>

          <CodeBlock
            title="React Testing Library Örneği"
            description="RTL ile component testleri"
            language="jsx"
            code={`// Install: npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event

// Button.test.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Button from './Button';

describe('Button Component', () => {
  test('renders button with text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
  });

  test('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('calls onClick with user event', async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    await user.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('is disabled when disabled prop is true', () => {
    render(<Button disabled>Click me</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  test('applies correct variant styles', () => {
    render(<Button variant="primary">Primary Button</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-blue-500');
  });
});

// Counter.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Counter from './Counter';

describe('Counter Component', () => {
  test('renders initial count', () => {
    render(<Counter />);
    expect(screen.getByText('Count: 0')).toBeInTheDocument();
  });

  test('increments count when + button is clicked', async () => {
    const user = userEvent.setup();
    render(<Counter />);
    
    const incrementButton = screen.getByRole('button', { name: '+' });
    await user.click(incrementButton);
    
    expect(screen.getByText('Count: 1')).toBeInTheDocument();
  });

  test('decrements count when - button is clicked', async () => {
    const user = userEvent.setup();
    render(<Counter />);
    
    const decrementButton = screen.getByRole('button', { name: '-' });
    await user.click(decrementButton);
    
    expect(screen.getByText('Count: -1')).toBeInTheDocument();
  });

  test('resets count when reset button is clicked', async () => {
    const user = userEvent.setup();
    render(<Counter />);
    
    // First increment
    await user.click(screen.getByRole('button', { name: '+' }));
    expect(screen.getByText('Count: 1')).toBeInTheDocument();
    
    // Then reset
    await user.click(screen.getByRole('button', { name: 'Reset' }));
    expect(screen.getByText('Count: 0')).toBeInTheDocument();
  });
});

// Form.test.jsx
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import ContactForm from './ContactForm';

describe('ContactForm Component', () => {
  test('renders form fields', () => {
    render(<ContactForm />);
    
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });

  test('submits form with valid data', async () => {
    const user = userEvent.setup();
    const handleSubmit = jest.fn();
    
    render(<ContactForm onSubmit={handleSubmit} />);
    
    await user.type(screen.getByLabelText(/name/i), 'John Doe');
    await user.type(screen.getByLabelText(/email/i), 'john@example.com');
    await user.type(screen.getByLabelText(/message/i), 'Hello world');
    
    await user.click(screen.getByRole('button', { name: /submit/i }));
    
    expect(handleSubmit).toHaveBeenCalledWith({
      name: 'John Doe',
      email: 'john@example.com',
      message: 'Hello world'
    });
  });

  test('shows validation errors for empty fields', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);
    
    await user.click(screen.getByRole('button', { name: /submit/i }));
    
    await waitFor(() => {
      expect(screen.getByText(/name is required/i)).toBeInTheDocument();
      expect(screen.getByText(/email is required/i)).toBeInTheDocument();
    });
  });
});`}
          />
        </div>
      </LessonCard>

      {/* Jest */}
      <LessonCard
        title="Jest - JavaScript Testing Framework"
        description="Jest ile unit testleri ve mocking"
        icon="🎯"
        level="intermediate"
      >
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-text-primary mb-4">Jest Nedir?</h3>
            <p className="text-secondary-dark mb-4">
              Jest, JavaScript test framework'üdür. Unit testler, integration testler ve
              mocking için güçlü araçlar sağlar.
            </p>

            <div className="bg-white/50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-text-primary mb-2">Özellikler</h4>
              <div className="text-secondary-dark text-sm space-y-1">
                <p>• Zero configuration</p>
                <p>• Snapshot testing</p>
                <p>• Mock functions</p>
                <p>• Code coverage</p>
                <p>• Watch mode</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Avantajlar</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• Fast execution</p>
                  <p>• Great mocking</p>
                  <p>• Built-in assertions</p>
                  <p>• Parallel execution</p>
                </div>
              </div>
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Kullanım Alanları</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• Unit testing</p>
                  <p>• Integration testing</p>
                  <p>• Snapshot testing</p>
                  <p>• Mock testing</p>
                </div>
              </div>
            </div>
          </div>

          <CodeBlock
            title="Jest Örneği"
            description="Jest ile unit testleri ve mocking"
            language="jsx"
            code={`// utils/helpers.test.js
import { formatDate, calculateAge, validateEmail, debounce } from './helpers';

describe('Helper Functions', () => {
  describe('formatDate', () => {
    test('formats date correctly', () => {
      const date = new Date('2024-01-15');
      expect(formatDate(date)).toBe('15/01/2024');
    });

    test('handles invalid date', () => {
      expect(formatDate('invalid')).toBe('Invalid Date');
    });
  });

  describe('calculateAge', () => {
    test('calculates age correctly', () => {
      const birthDate = new Date('1990-01-01');
      const currentDate = new Date('2024-01-01');
      expect(calculateAge(birthDate, currentDate)).toBe(34);
    });
  });

  describe('validateEmail', () => {
    test('validates correct email', () => {
      expect(validateEmail('test@example.com')).toBe(true);
      expect(validateEmail('user.name@domain.co.uk')).toBe(true);
    });

    test('rejects invalid email', () => {
      expect(validateEmail('invalid-email')).toBe(false);
      expect(validateEmail('@example.com')).toBe(false);
      expect(validateEmail('test@')).toBe(false);
    });
  });

  describe('debounce', () => {
    beforeEach(() => {
      jest.useFakeTimers();
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    test('debounces function calls', () => {
      const mockFn = jest.fn();
      const debouncedFn = debounce(mockFn, 100);

      debouncedFn();
      debouncedFn();
      debouncedFn();

      expect(mockFn).not.toHaveBeenCalled();

      jest.advanceTimersByTime(100);
      expect(mockFn).toHaveBeenCalledTimes(1);
    });
  });
});

// hooks/useCounter.test.js
import { renderHook, act } from '@testing-library/react';
import { useCounter } from './useCounter';

describe('useCounter Hook', () => {
  test('initializes with default value', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
  });

  test('initializes with custom value', () => {
    const { result } = renderHook(() => useCounter(10));
    expect(result.current.count).toBe(10);
  });

  test('increments count', () => {
    const { result } = renderHook(() => useCounter());
    
    act(() => {
      result.current.increment();
    });
    
    expect(result.current.count).toBe(1);
  });

  test('decrements count', () => {
    const { result } = renderHook(() => useCounter(5));
    
    act(() => {
      result.current.decrement();
    });
    
    expect(result.current.count).toBe(4);
  });

  test('resets count', () => {
    const { result } = renderHook(() => useCounter(10));
    
    act(() => {
      result.current.increment();
      result.current.reset();
    });
    
    expect(result.current.count).toBe(0);
  });
});

// services/api.test.js
import { fetchUser, createUser, updateUser } from './api';

// Mock fetch
global.fetch = jest.fn();

describe('API Service', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  describe('fetchUser', () => {
    test('fetches user successfully', async () => {
      const mockUser = { id: 1, name: 'John Doe', email: 'john@example.com' };
      fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockUser
      });

      const result = await fetchUser(1);
      
      expect(fetch).toHaveBeenCalledWith('/api/users/1');
      expect(result).toEqual(mockUser);
    });

    test('handles fetch error', async () => {
      fetch.mockRejectedValueOnce(new Error('Network error'));

      await expect(fetchUser(1)).rejects.toThrow('Network error');
    });
  });

  describe('createUser', () => {
    test('creates user successfully', async () => {
      const newUser = { name: 'Jane Doe', email: 'jane@example.com' };
      const createdUser = { id: 2, ...newUser };
      
      fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => createdUser
      });

      const result = await createUser(newUser);
      
      expect(fetch).toHaveBeenCalledWith('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser)
      });
      expect(result).toEqual(createdUser);
    });
  });
});

// jest.config.js
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  moduleNameMapping: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/__mocks__/fileMock.js'
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/index.js',
    '!src/setupTests.js'
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  }
};`}
          />
        </div>
      </LessonCard>

      {/* Cypress */}
      <LessonCard
        title="Cypress - E2E Testing"
        description="Cypress ile end-to-end testleri"
        icon="🌐"
        level="advanced"
      >
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-text-primary mb-4">Cypress Nedir?</h3>
            <p className="text-secondary-dark mb-4">
              Cypress, modern web uygulamaları için end-to-end test framework'üdür.
              Gerçek browser'da testler çalıştırır ve güçlü debugging araçları sağlar.
            </p>

            <div className="bg-white/50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-text-primary mb-2">Özellikler</h4>
              <div className="text-secondary-dark text-sm space-y-1">
                <p>• Real browser testing</p>
                <p>• Time travel debugging</p>
                <p>• Automatic waiting</p>
                <p>• Network stubbing</p>
                <p>• Screenshots & videos</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Avantajlar</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• Great developer experience</p>
                  <p>• Real user simulation</p>
                  <p>• Powerful debugging</p>
                  <p>• Easy to write</p>
                </div>
              </div>
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Kullanım Alanları</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• E2E testing</p>
                  <p>• Integration testing</p>
                  <p>• User journey testing</p>
                  <p>• Regression testing</p>
                </div>
              </div>
            </div>
          </div>

          <CodeBlock
            title="Cypress Örneği"
            description="Cypress ile E2E testleri"
            language="jsx"
            code={`// Install: npm install --save-dev cypress

// cypress/e2e/login.cy.js
describe('Login Flow', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should login with valid credentials', () => {
    cy.get('[data-testid="email-input"]').type('user@example.com');
    cy.get('[data-testid="password-input"]').type('password123');
    cy.get('[data-testid="login-button"]').click();
    
    cy.url().should('include', '/dashboard');
    cy.get('[data-testid="user-menu"]').should('contain', 'Welcome, User');
  });

  it('should show error with invalid credentials', () => {
    cy.get('[data-testid="email-input"]').type('invalid@example.com');
    cy.get('[data-testid="password-input"]').type('wrongpassword');
    cy.get('[data-testid="login-button"]').click();
    
    cy.get('[data-testid="error-message"]').should('be.visible');
    cy.get('[data-testid="error-message"]').should('contain', 'Invalid credentials');
  });

  it('should validate required fields', () => {
    cy.get('[data-testid="login-button"]').click();
    
    cy.get('[data-testid="email-error"]').should('contain', 'Email is required');
    cy.get('[data-testid="password-error"]').should('contain', 'Password is required');
  });
});

// cypress/e2e/todo-app.cy.js
describe('Todo Application', () => {
  beforeEach(() => {
    cy.visit('/todos');
  });

  it('should add a new todo', () => {
    cy.get('[data-testid="todo-input"]').type('Learn Cypress');
    cy.get('[data-testid="add-todo-button"]').click();
    
    cy.get('[data-testid="todo-list"]').should('contain', 'Learn Cypress');
    cy.get('[data-testid="todo-input"]').should('have.value', '');
  });

  it('should toggle todo completion', () => {
    // Add a todo first
    cy.get('[data-testid="todo-input"]').type('Test todo');
    cy.get('[data-testid="add-todo-button"]').click();
    
    // Toggle completion
    cy.get('[data-testid="todo-item"]').first().find('[data-testid="toggle-button"]').click();
    cy.get('[data-testid="todo-item"]').first().should('have.class', 'completed');
  });

  it('should delete a todo', () => {
    // Add a todo first
    cy.get('[data-testid="todo-input"]').type('Todo to delete');
    cy.get('[data-testid="add-todo-button"]').click();
    
    // Delete the todo
    cy.get('[data-testid="todo-item"]').first().find('[data-testid="delete-button"]').click();
    cy.get('[data-testid="todo-list"]').should('not.contain', 'Todo to delete');
  });

  it('should filter todos', () => {
    // Add multiple todos
    cy.get('[data-testid="todo-input"]').type('Active todo');
    cy.get('[data-testid="add-todo-button"]').click();
    
    cy.get('[data-testid="todo-input"]').type('Completed todo');
    cy.get('[data-testid="add-todo-button"]').click();
    
    // Complete one todo
    cy.get('[data-testid="todo-item"]').first().find('[data-testid="toggle-button"]').click();
    
    // Filter by active
    cy.get('[data-testid="filter-active"]').click();
    cy.get('[data-testid="todo-list"]').should('contain', 'Active todo');
    cy.get('[data-testid="todo-list"]').should('not.contain', 'Completed todo');
    
    // Filter by completed
    cy.get('[data-testid="filter-completed"]').click();
    cy.get('[data-testid="todo-list"]').should('contain', 'Completed todo');
    cy.get('[data-testid="todo-list"]').should('not.contain', 'Active todo');
  });
});

// cypress/e2e/api.cy.js
describe('API Testing', () => {
  it('should fetch todos from API', () => {
    cy.intercept('GET', '/api/todos', { fixture: 'todos.json' }).as('getTodos');
    
    cy.visit('/todos');
    cy.wait('@getTodos');
    
    cy.get('[data-testid="todo-list"]').should('have.length', 3);
  });

  it('should create a new todo via API', () => {
    cy.intercept('POST', '/api/todos', { statusCode: 201, body: { id: 4, text: 'New todo', completed: false } }).as('createTodo');
    
    cy.visit('/todos');
    cy.get('[data-testid="todo-input"]').type('New todo');
    cy.get('[data-testid="add-todo-button"]').click();
    
    cy.wait('@createTodo');
    cy.get('[data-testid="todo-list"]').should('contain', 'New todo');
  });
});

// cypress/support/commands.js
Cypress.Commands.add('login', (email, password) => {
  cy.session([email, password], () => {
    cy.visit('/login');
    cy.get('[data-testid="email-input"]').type(email);
    cy.get('[data-testid="password-input"]').type(password);
    cy.get('[data-testid="login-button"]').click();
    cy.url().should('include', '/dashboard');
  });
});

Cypress.Commands.add('addTodo', (text) => {
  cy.get('[data-testid="todo-input"]').type(text);
  cy.get('[data-testid="add-todo-button"]').click();
});

// cypress.config.js
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    viewportWidth: 1280,
    viewportHeight: 720,
    video: true,
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 10000,
    requestTimeout: 10000,
    responseTimeout: 10000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});`}
          />
        </div>
      </LessonCard>

      {/* Playwright */}
      <LessonCard
        title="Playwright - Cross-Browser Testing"
        description="Playwright ile cross-browser testleri"
        icon="🎭"
        level="advanced"
      >
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-text-primary mb-4">Playwright Nedir?</h3>
            <p className="text-secondary-dark mb-4">
              Playwright, modern web uygulamaları için cross-browser test framework'üdür.
              Chrome, Firefox, Safari ve Edge'de testler çalıştırır.
            </p>

            <div className="bg-white/50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-text-primary mb-2">Özellikler</h4>
              <div className="text-secondary-dark text-sm space-y-1">
                <p>• Cross-browser testing</p>
                <p>• Mobile testing</p>
                <p>• Network interception</p>
                <p>• Auto-waiting</p>
                <p>• Parallel execution</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Avantajlar</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• Fast execution</p>
                  <p>• Cross-browser support</p>
                  <p>• Great debugging</p>
                  <p>• Mobile testing</p>
                </div>
              </div>
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Kullanım Alanları</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• Cross-browser E2E</p>
                  <p>• Mobile testing</p>
                  <p>• Performance testing</p>
                  <p>• Visual regression</p>
                </div>
              </div>
            </div>
          </div>

          <CodeBlock
            title="Playwright Örneği"
            description="Playwright ile cross-browser testleri"
            language="jsx"
            code={`// Install: npm install --save-dev @playwright/test

// tests/login.spec.js
import { test, expect } from '@playwright/test';

test.describe('Login Flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/login');
  });

  test('should login with valid credentials', async ({ page }) => {
    await page.fill('[data-testid="email-input"]', 'user@example.com');
    await page.fill('[data-testid="password-input"]', 'password123');
    await page.click('[data-testid="login-button"]');
    
    await expect(page).toHaveURL(/.*dashboard/);
    await expect(page.locator('[data-testid="user-menu"]')).toContainText('Welcome, User');
  });

  test('should show error with invalid credentials', async ({ page }) => {
    await page.fill('[data-testid="email-input"]', 'invalid@example.com');
    await page.fill('[data-testid="password-input"]', 'wrongpassword');
    await page.click('[data-testid="login-button"]');
    
    await expect(page.locator('[data-testid="error-message"]')).toBeVisible();
    await expect(page.locator('[data-testid="error-message"]')).toContainText('Invalid credentials');
  });
});

// tests/todo-app.spec.js
import { test, expect } from '@playwright/test';

test.describe('Todo Application', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/todos');
  });

  test('should add a new todo', async ({ page }) => {
    await page.fill('[data-testid="todo-input"]', 'Learn Playwright');
    await page.click('[data-testid="add-todo-button"]');
    
    await expect(page.locator('[data-testid="todo-list"]')).toContainText('Learn Playwright');
    await expect(page.locator('[data-testid="todo-input"]')).toHaveValue('');
  });

  test('should toggle todo completion', async ({ page }) => {
    // Add a todo first
    await page.fill('[data-testid="todo-input"]', 'Test todo');
    await page.click('[data-testid="add-todo-button"]');
    
    // Toggle completion
    await page.click('[data-testid="todo-item"] >> nth=0 >> [data-testid="toggle-button"]');
    await expect(page.locator('[data-testid="todo-item"] >> nth=0')).toHaveClass(/completed/);
  });

  test('should delete a todo', async ({ page }) => {
    // Add a todo first
    await page.fill('[data-testid="todo-input"]', 'Todo to delete');
    await page.click('[data-testid="add-todo-button"]');
    
    // Delete the todo
    await page.click('[data-testid="todo-item"] >> nth=0 >> [data-testid="delete-button"]');
    await expect(page.locator('[data-testid="todo-list"]')).not.toContainText('Todo to delete');
  });
});

// tests/mobile.spec.js
import { test, expect, devices } from '@playwright/test';

test.describe('Mobile Tests', () => {
  test.use({ ...devices['iPhone 12'] });

  test('should work on mobile', async ({ page }) => {
    await page.goto('/');
    
    // Test mobile navigation
    await page.click('[data-testid="mobile-menu-button"]');
    await expect(page.locator('[data-testid="mobile-menu"]')).toBeVisible();
    
    // Test mobile form
    await page.click('[data-testid="mobile-menu"] >> text=Contact');
    await page.fill('[data-testid="name-input"]', 'John Doe');
    await page.fill('[data-testid="email-input"]', 'john@example.com');
    await page.click('[data-testid="submit-button"]');
    
    await expect(page.locator('[data-testid="success-message"]')).toBeVisible();
  });
});

// tests/api.spec.js
import { test, expect } from '@playwright/test';

test.describe('API Testing', () => {
  test('should fetch todos from API', async ({ page }) => {
    // Mock API response
    await page.route('**/api/todos', async route => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify([
          { id: 1, text: 'Mock todo 1', completed: false },
          { id: 2, text: 'Mock todo 2', completed: true }
        ])
      });
    });
    
    await page.goto('/todos');
    await expect(page.locator('[data-testid="todo-list"] >> li')).toHaveCount(2);
  });

  test('should handle API errors', async ({ page }) => {
    // Mock API error
    await page.route('**/api/todos', async route => {
      await route.fulfill({
        status: 500,
        contentType: 'application/json',
        body: JSON.stringify({ error: 'Internal Server Error' })
      });
    });
    
    await page.goto('/todos');
    await expect(page.locator('[data-testid="error-message"]')).toBeVisible();
  });
});

// playwright.config.js
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    },
  ],
  webServer: {
    command: 'npm run start',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
  },
});`}
          />
        </div>
      </LessonCard>

      {/* Testing Strategy */}
      <LessonCard
        title="Testing Strategy - Test Pyramid"
        description="Kapsamlı test stratejisi ve test pyramid"
        icon="🏗️"
        level="advanced"
      >
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-text-primary mb-4">Testing Strategy</h3>
            <p className="text-secondary-dark mb-4">
              Etkili bir test stratejisi, farklı test türlerini doğru oranlarda kullanmayı gerektirir.
              Test pyramid yaklaşımı ile optimal test coverage sağlanır.
            </p>

            <div className="bg-white/50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-text-primary mb-2">Test Pyramid</h4>
              <div className="text-secondary-dark text-sm space-y-1">
                <p>• Unit Tests (70%) - Hızlı, izole</p>
                <p>• Integration Tests (20%) - Component'lar arası</p>
                <p>• E2E Tests (10%) - Kullanıcı senaryoları</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Test Türleri</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• Unit Tests - Jest + RTL</p>
                  <p>• Integration Tests - Jest + RTL</p>
                  <p>• E2E Tests - Cypress/Playwright</p>
                  <p>• Visual Tests - Storybook</p>
                </div>
              </div>
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Best Practices</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• Test user behavior</p>
                  <p>• Keep tests simple</p>
                  <p>• Use data-testid</p>
                  <p>• Mock external dependencies</p>
                </div>
              </div>
            </div>
          </div>

          <CodeBlock
            title="Testing Strategy Örneği"
            description="Kapsamlı test stratejisi"
            language="jsx"
            code={`// Testing Strategy Implementation

// 1. Unit Tests (70% of tests)
// utils/helpers.test.js - Pure functions
// hooks/useCounter.test.js - Custom hooks
// components/Button.test.jsx - Individual components

// 2. Integration Tests (20% of tests)
// components/UserProfile.test.jsx - Component with context
// pages/Login.test.jsx - Page with multiple components

// 3. E2E Tests (10% of tests)
// cypress/e2e/user-journey.cy.js - Complete user flows
// playwright/tests/cross-browser.spec.js - Cross-browser testing

// package.json scripts
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "test:e2e": "cypress run",
    "test:e2e:open": "cypress open",
    "test:playwright": "playwright test",
    "test:playwright:ui": "playwright test --ui",
    "test:all": "npm run test && npm run test:e2e && npm run test:playwright"
  }
}

// jest.config.js - Unit & Integration tests
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/**/*.test.{js,jsx}',
    '!src/**/*.spec.{js,jsx}',
    '!src/index.js'
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx}',
    '<rootDir>/src/**/*.{test,spec}.{js,jsx}'
  ]
};

// cypress.config.js - E2E tests
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.js',
    videosFolder: 'cypress/videos',
    screenshotsFolder: 'cypress/screenshots'
  }
});

// playwright.config.js - Cross-browser tests
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } }
  ]
});

// Test organization structure
/*
src/
├── components/
│   ├── Button/
│   │   ├── Button.jsx
│   │   ├── Button.test.jsx
│   │   └── Button.stories.jsx
│   └── UserProfile/
│       ├── UserProfile.jsx
│       ├── UserProfile.test.jsx
│       └── UserProfile.stories.jsx
├── hooks/
│   ├── useCounter.js
│   └── useCounter.test.js
├── utils/
│   ├── helpers.js
│   └── helpers.test.js
└── __tests__/
    ├── integration/
    │   └── user-flow.test.jsx
    └── setup.js

cypress/
├── e2e/
│   ├── login.cy.js
│   ├── todo-app.cy.js
│   └── user-journey.cy.js
├── fixtures/
│   └── users.json
└── support/
    └── commands.js

tests/
├── login.spec.js
├── todo-app.spec.js
└── cross-browser.spec.js
*/

// CI/CD Pipeline example
name: 'Test Pipeline'
on: [push, pull_request]
jobs:
  unit-tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npm run test:coverage
      - uses: codecov/codecov-action@v3

  e2e-tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npm run build
      - run: npm run test:e2e

  cross-browser-tests:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        browser: [chromium, firefox, webkit]
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npm run test:playwright --project=\${{ matrix.browser }}`}
          />
        </div>
      </LessonCard>
    </div>
  );
};

export default Test;
