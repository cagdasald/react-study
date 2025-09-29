import React from 'react';
import LessonCard from '../../../components/LessonCard';
import CodeBlock from '../../../components/CodeBlock';
import Badge from '../../../components/Badge';

const Documentation: React.FC = () => {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-text-primary mb-4">
          React Documentation & Quality
        </h1>
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          <Badge variant="primary">Storybook / Chromatic / JSDoc / TypeDoc / Visual Regression Testing</Badge>
        </div>
        <p className="text-lg text-secondary-dark max-w-3xl mx-auto">
          React uygulamalarında dokümantasyon ve kalite: Storybook, Chromatic ve visual regression testing
        </p>
      </div>

      {/* Storybook */}
      <LessonCard
        title="Storybook - Component Documentation"
        description="Storybook ile component dokümantasyonu ve isolated development"
        icon="📚"
        level="intermediate"
      >
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-text-primary mb-4">Storybook Nedir?</h3>
            <p className="text-secondary-dark mb-4">
              Storybook, UI component'larını izole ederek geliştirmenizi, test etmenizi ve dokümante etmenizi sağlayan
              bir tool'dur. Component'ları farklı state'lerde görüntüleyebilirsiniz.
            </p>

            <div className="bg-white/50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-text-primary mb-2">Özellikler</h4>
              <div className="text-secondary-dark text-sm space-y-1">
                <p>• Isolated component development</p>
                <p>• Interactive documentation</p>
                <p>• Visual testing</p>
                <p>• Addons ecosystem</p>
                <p>• Design system integration</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Avantajlar</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• Component isolation</p>
                  <p>• Better documentation</p>
                  <p>• Design system</p>
                  <p>• Team collaboration</p>
                </div>
              </div>
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Kullanım Alanları</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• Component library</p>
                  <p>• Design system</p>
                  <p>• UI documentation</p>
                  <p>• Visual testing</p>
                </div>
              </div>
            </div>
          </div>

          <CodeBlock
            title="Storybook Örneği"
            description="Storybook ile component stories"
            language="jsx"
            code={`// Install: npm install --save-dev @storybook/react @storybook/addon-essentials

// .storybook/main.js
module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-docs'
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite'
  }
};

// Button.stories.jsx
import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'A reusable button component with multiple variants and sizes.'
      }
    }
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'danger'],
      description: 'The visual style variant of the button'
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'The size of the button'
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the button is disabled'
    },
    onClick: { action: 'clicked' }
  }
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  children: 'Primary Button'
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: 'Secondary Button'
};

export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger',
  children: 'Danger Button'
};

export const Small = Template.bind({});
Small.args = {
  size: 'sm',
  children: 'Small Button'
};

export const Large = Template.bind({});
Large.args = {
  size: 'lg',
  children: 'Large Button'
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  children: 'Disabled Button'
};`}
          />
        </div>
      </LessonCard>

      {/* Chromatic */}
      <LessonCard
        title="Chromatic - Visual Testing"
        description="Chromatic ile visual regression testing"
        icon="🎨"
        level="advanced"
      >
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-text-primary mb-4">Chromatic Nedir?</h3>
            <p className="text-secondary-dark mb-4">
              Chromatic, Storybook ile entegre çalışan visual testing platform'udur.
              Component'larınızın görsel değişikliklerini otomatik olarak tespit eder.
            </p>

            <div className="bg-white/50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-text-primary mb-2">Özellikler</h4>
              <div className="text-secondary-dark text-sm space-y-1">
                <p>• Visual regression testing</p>
                <p>• Cross-browser testing</p>
                <p>• Responsive testing</p>
                <p>• CI/CD integration</p>
                <p>• Review workflow</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Avantajlar</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• Automatic visual testing</p>
                  <p>• Cross-browser coverage</p>
                  <p>• Easy review process</p>
                  <p>• Design system validation</p>
                </div>
              </div>
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Kullanım Alanları</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• Design system testing</p>
                  <p>• Component library</p>
                  <p>• UI regression testing</p>
                  <p>• Cross-browser validation</p>
                </div>
              </div>
            </div>
          </div>

          <CodeBlock
            title="Chromatic Örneği"
            description="Chromatic ile visual testing setup"
            language="jsx"
            code={`// Install: npm install --save-dev chromatic

// package.json
{
  "scripts": {
    "storybook": "storybook dev -p 6006",
    "build-storybook": "storybook build",
    "chromatic": "chromatic --project-token=your-project-token"
  }
}

// .chromaticrc.js
module.exports = {
  projectToken: process.env.CHROMATIC_PROJECT_TOKEN,
  buildScriptName: 'build-storybook',
  storybookBuildDir: 'storybook-static',
  exitZeroOnChanges: true,
  autoAcceptChanges: 'main',
  ignoreLastBuildOnBranch: 'main'
};

// .github/workflows/chromatic.yml
name: 'Chromatic'
on: [push, pull_request]
jobs:
  chromatic-deployment:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v3
        with:
          fetch-depth: 0
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build Storybook
        run: npm run build-storybook
      
      - name: Publish to Chromatic
        uses: chromaui/action@v1
        with:
          projectToken: \${{ secrets.CHROMATIC_PROJECT_TOKEN }}
          buildScriptName: 'build-storybook'
          storybookBuildDir: 'storybook-static'

// Button.stories.jsx - Chromatic optimized
import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    chromatic: {
      // Disable animations for consistent screenshots
      disableSnapshot: false,
      // Test different viewports
      viewports: [320, 768, 1024]
    }
  }
};

// Visual testing stories
export const AllVariants = () => (
  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="danger">Danger</Button>
  </div>
);

export const AllSizes = () => (
  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
    <Button size="sm">Small</Button>
    <Button size="md">Medium</Button>
    <Button size="lg">Large</Button>
  </div>
);

export const States = () => (
  <div style={{ display: 'flex', gap: '1rem' }}>
    <Button>Normal</Button>
    <Button disabled>Disabled</Button>
    <Button loading>Loading</Button>
  </div>
);`}
          />
        </div>
      </LessonCard>

      {/* JSDoc & TypeDoc */}
      <LessonCard
        title="JSDoc & TypeDoc - Code Documentation"
        description="JSDoc ve TypeDoc ile kod dokümantasyonu"
        icon="📝"
        level="intermediate"
      >
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-text-primary mb-4">JSDoc & TypeDoc Nedir?</h3>
            <p className="text-secondary-dark mb-4">
              JSDoc ve TypeDoc, kod dokümantasyonu oluşturmak için kullanılan araçlardır.
              Kod içindeki yorumlardan otomatik olarak dokümantasyon üretir.
            </p>

            <div className="bg-white/50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-text-primary mb-2">Özellikler</h4>
              <div className="text-secondary-dark text-sm space-y-1">
                <p>• Automatic documentation generation</p>
                <p>• TypeScript support</p>
                <p>• API documentation</p>
                <p>• Interactive examples</p>
                <p>• Search functionality</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">JSDoc</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• JavaScript documentation</p>
                  <p>• Comment-based</p>
                  <p>• IDE integration</p>
                  <p>• Type hints</p>
                </div>
              </div>
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">TypeDoc</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• TypeScript documentation</p>
                  <p>• Type-based</p>
                  <p>• Modern themes</p>
                  <p>• Plugin system</p>
                </div>
              </div>
            </div>
          </div>

          <CodeBlock
            title="JSDoc & TypeDoc Örneği"
            description="Kod dokümantasyonu örnekleri"
            language="jsx"
            code={`// Install: npm install --save-dev jsdoc typedoc

// utils/helpers.js - JSDoc example
/**
 * Formats a date object to a readable string
 * @param {Date} date - The date to format
 * @param {string} [format='DD/MM/YYYY'] - The format string
 * @returns {string} The formatted date string
 * @throws {Error} When date is invalid
 * @example
 * // Basic usage
 * const formatted = formatDate(new Date('2024-01-15'));
 * console.log(formatted); // "15/01/2024"
 */
export function formatDate(date, format = 'DD/MM/YYYY') {
  if (!(date instanceof Date) || isNaN(date)) {
    throw new Error('Invalid date provided');
  }
  
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  
  return format
    .replace('DD', day)
    .replace('MM', month)
    .replace('YYYY', year);
}

// components/Button.tsx - TypeDoc example
import React from 'react';

/**
 * Button component props
 * @interface ButtonProps
 */
export interface ButtonProps {
  /** The content to display inside the button */
  children: React.ReactNode;
  /** The visual style variant of the button */
  variant?: 'primary' | 'secondary' | 'danger';
  /** The size of the button */
  size?: 'sm' | 'md' | 'lg';
  /** Whether the button is disabled */
  disabled?: boolean;
  /** Click handler function */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

/**
 * A reusable button component with multiple variants and sizes
 * 
 * @param props - The component props
 * @returns The rendered button element
 * 
 * @example
 * // Basic usage
 * <Button onClick={handleClick}>Click me</Button>
 * 
 * // With variant and size
 * <Button variant="primary" size="lg">Large Primary</Button>
 * 
 * // Disabled state
 * <Button disabled>Disabled</Button>
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  ...props
}) => {
  const baseClasses = 'font-medium rounded-lg transition-all duration-200';
  
  return (
    <button
      className={\`\${baseClasses}\`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};`}
          />
        </div>
      </LessonCard>

      {/* Quality Tools */}
      <LessonCard
        title="Quality Tools - Code Quality"
        description="ESLint, Prettier, Husky ve lint-staged ile kod kalitesi"
        icon="🔧"
        level="intermediate"
      >
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-text-primary mb-4">Quality Tools</h3>
            <p className="text-secondary-dark mb-4">
              Kod kalitesini artırmak için ESLint, Prettier, Husky ve lint-staged gibi araçları kullanabilirsiniz.
              Bu araçlar tutarlı kod stili ve kalite standartları sağlar.
            </p>

            <div className="bg-white/50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-text-primary mb-2">Araçlar</h4>
              <div className="text-secondary-dark text-sm space-y-1">
                <p>• ESLint - Code linting</p>
                <p>• Prettier - Code formatting</p>
                <p>• Husky - Git hooks</p>
                <p>• lint-staged - Staged files linting</p>
                <p>• TypeScript - Type checking</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Avantajlar</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• Consistent code style</p>
                  <p>• Early error detection</p>
                  <p>• Team collaboration</p>
                  <p>• Automated quality checks</p>
                </div>
              </div>
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Kullanım Alanları</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• Code formatting</p>
                  <p>• Lint checking</p>
                  <p>• Pre-commit hooks</p>
                  <p>• CI/CD integration</p>
                </div>
              </div>
            </div>
          </div>

          <CodeBlock
            title="Quality Tools Örneği"
            description="ESLint, Prettier ve Husky setup"
            language="jsx"
            code={`// Install: npm install --save-dev eslint prettier husky lint-staged @typescript-eslint/parser @typescript-eslint/eslint-plugin

// .eslintrc.js
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    '@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    'react-hooks',
    'jsx-a11y',
    '@typescript-eslint',
    'import'
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index'
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }
    ]
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true
      }
    }
  }
};

// .prettierrc
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "bracketSpacing": true,
  "arrowParens": "avoid",
  "endOfLine": "lf"
}

// package.json
{
  "scripts": {
    "lint": "eslint src --ext .js,.jsx,.ts,.tsx",
    "lint:fix": "eslint src --ext .js,.jsx,.ts,.tsx --fix",
    "format": "prettier --write src/**/*.{js,jsx,ts,tsx,json,md}",
    "format:check": "prettier --check src/**/*.{js,jsx,ts,tsx,json,md}",
    "type-check": "tsc --noEmit",
    "quality": "npm run type-check && npm run lint && npm run format:check",
    "prepare": "husky install"
  },
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": [
      "eslint --fix",
      "prettier --write"
    ],
    "*.{json,md,yml,yaml}": [
      "prettier --write"
    ]
  }
}`}
          />
        </div>
      </LessonCard>

      {/* Documentation Strategy */}
      <LessonCard
        title="Documentation Strategy - Best Practices"
        description="Etkili dokümantasyon stratejisi ve best practices"
        icon="📋"
        level="advanced"
      >
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-text-primary mb-4">Documentation Strategy</h3>
            <p className="text-secondary-dark mb-4">
              Etkili bir dokümantasyon stratejisi, farklı dokümantasyon türlerini doğru şekilde
              organize etmeyi ve sürekli güncel tutmayı gerektirir.
            </p>

            <div className="bg-white/50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-text-primary mb-2">Dokümantasyon Türleri</h4>
              <div className="text-secondary-dark text-sm space-y-1">
                <p>• API Documentation - JSDoc/TypeDoc</p>
                <p>• Component Documentation - Storybook</p>
                <p>• Visual Documentation - Chromatic</p>
                <p>• User Documentation - README</p>
                <p>• Architecture Documentation - ADRs</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Best Practices</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• Keep documentation up-to-date</p>
                  <p>• Use examples and code snippets</p>
                  <p>• Write for your audience</p>
                  <p>• Use consistent formatting</p>
                </div>
              </div>
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Tools Integration</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• Storybook + Chromatic</p>
                  <p>• JSDoc + TypeDoc</p>
                  <p>• ESLint + Prettier</p>
                  <p>• CI/CD integration</p>
                </div>
              </div>
            </div>
          </div>

          <CodeBlock
            title="Documentation Strategy Örneği"
            description="Kapsamlı dokümantasyon stratejisi"
            language="jsx"
            code={`// Documentation Strategy Implementation

// 1. Project Structure
/*
docs/
├── api/                 # API documentation
│   ├── components/      # Component API docs
│   ├── hooks/          # Hooks API docs
│   └── utils/          # Utils API docs
├── guides/             # User guides
│   ├── getting-started.md
│   ├── installation.md
│   └── best-practices.md
├── architecture/       # Architecture docs
│   ├── decisions/      # ADRs
│   └── diagrams/       # Architecture diagrams
└── storybook/          # Storybook build
    └── static/
*/

// 2. README.md - Main documentation
# React Study Guide

A comprehensive study guide for React development covering all major topics and best practices.

## 🚀 Quick Start

\`\`\`bash
# Install dependencies
npm install

# Start development server
npm run dev

# Start Storybook
npm run storybook

# Run tests
npm run test
\`\`\`

## 📚 Topics Covered

- [React Internals](./docs/guides/react-internals.md)
- [Hooks](./docs/guides/hooks.md)
- [Advanced Patterns](./docs/guides/advanced-patterns.md)
- [Modern Features](./docs/guides/modern-features.md)
- [Server Components](./docs/guides/server-components.md)
- [Next.js 14](./docs/guides/nextjs-14.md)
- [Styling Strategies](./docs/guides/styling-strategies.md)
- [State Management](./docs/guides/state-management.md)
- [Testing](./docs/guides/testing.md)
- [Documentation](./docs/guides/documentation.md)

## 🛠️ Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Available Scripts

- \`npm run dev\` - Start development server
- \`npm run build\` - Build for production
- \`npm run test\` - Run tests
- \`npm run test:watch\` - Run tests in watch mode
- \`npm run test:coverage\` - Run tests with coverage
- \`npm run storybook\` - Start Storybook
- \`npm run build-storybook\` - Build Storybook
- \`npm run lint\` - Run ESLint
- \`npm run format\` - Format code with Prettier
- \`npm run type-check\` - Run TypeScript type checking

## 📖 Documentation

- [Component Library](https://storybook.example.com) - Interactive component documentation
- [API Reference](./docs/api/) - Complete API documentation
- [Architecture Decisions](./docs/architecture/decisions/) - ADRs and technical decisions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new features
5. Update documentation
6. Submit a pull request

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.`}
          />
        </div>
      </LessonCard>
    </div>
  );
};

export default Documentation;