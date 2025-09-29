import React from 'react';
import LessonCard from '../../../components/LessonCard';
import CodeBlock from '../../../components/CodeBlock';
import Badge from '../../../components/Badge';

const StylingStrategies: React.FC = () => {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-text-primary mb-4">
          React Styling Strategies
        </h1>
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          <Badge variant="primary">CSS Modules / styled-components / Tailwind CSS / Design Tokens / CSS-in-JS</Badge>
        </div>
        <p className="text-lg text-secondary-dark max-w-3xl mx-auto">
          React uygulamalarında stil kullanma stratejileri: CSS Modules, styled-components, Tailwind ve design tokens
        </p>
      </div>

      {/* CSS Modules */}
      <LessonCard
        title="CSS Modules - Scoped Styling"
        description="CSS Modules ile component-scoped styling"
        icon="🎯"
        level="intermediate"
      >
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-text-primary mb-4">CSS Modules Nedir?</h3>
            <p className="text-secondary-dark mb-4">
              CSS Modules, CSS class'larını otomatik olarak unique hale getirir ve component-scoped styling sağlar.
              Bu sayede CSS çakışmaları önlenir ve daha maintainable kod yazılır.
            </p>

            <div className="bg-white/50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-text-primary mb-2">Özellikler</h4>
              <div className="text-secondary-dark text-sm space-y-1">
                <p>• Scoped CSS classes</p>
                <p>• No naming conflicts</p>
                <p>• Composition support</p>
                <p>• TypeScript support</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Avantajlar</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• CSS çakışması yok</p>
                  <p>• Component isolation</p>
                  <p>• Easy to maintain</p>
                  <p>• Performance friendly</p>
                </div>
              </div>
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Kullanım Alanları</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• Large applications</p>
                  <p>• Team projects</p>
                  <p>• Legacy CSS migration</p>
                  <p>• Component libraries</p>
                </div>
              </div>
            </div>
          </div>

          <CodeBlock
            title="CSS Modules Örneği"
            description="CSS Modules ile component styling"
            language="jsx"
            code={`// Button.module.css
.button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.2s ease;
}

.button:hover {
  background-color: #0056b3;
}

.button:disabled {
  background-color: #6c757d;
  cursor: not-allowed;
}

.button.primary {
  background-color: #007bff;
}

.button.secondary {
  background-color: #6c757d;
}

.button.danger {
  background-color: #dc3545;
}

.button.danger:hover {
  background-color: #c82333;
}

// Button.tsx
import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  disabled = false, 
  onClick 
}) => {
  const buttonClass = \`\${styles.button} \${styles[variant]}\`;
  
  return (
    <button 
      className={buttonClass}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;`}
          />
        </div>
      </LessonCard>

      {/* styled-components */}
      <LessonCard
        title="styled-components - CSS-in-JS"
        description="styled-components ile component-based styling"
        icon="💅"
        level="intermediate"
      >
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-text-primary mb-4">styled-components Nedir?</h3>
            <p className="text-secondary-dark mb-4">
              styled-components, CSS-in-JS kütüphanesidir. JavaScript'te CSS yazmanızı sağlar ve
              component-based styling ile dinamik stiller oluşturmanıza olanak tanır.
            </p>

            <div className="bg-white/50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-text-primary mb-2">Özellikler</h4>
              <div className="text-secondary-dark text-sm space-y-1">
                <p>• CSS-in-JS</p>
                <p>• Dynamic styling</p>
                <p>• Props-based styling</p>
                <p>• Theme support</p>
                <p>• Server-side rendering</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Avantajlar</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• Dynamic styling</p>
                  <p>• Component isolation</p>
                  <p>• TypeScript support</p>
                  <p>• Theme integration</p>
                </div>
              </div>
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Kullanım Alanları</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• Dynamic UIs</p>
                  <p>• Theme systems</p>
                  <p>• Component libraries</p>
                  <p>• Complex styling logic</p>
                </div>
              </div>
            </div>
          </div>

          <CodeBlock
            title="styled-components Örneği"
            description="styled-components ile dynamic styling"
            language="jsx"
            code={`// Install: npm install styled-components
// Install: npm install @types/styled-components (for TypeScript)

import React from 'react';
import styled from 'styled-components';

// Styled components
const StyledButton = styled.button<{ variant?: string; size?: string; disabled?: boolean }>\`
  background-color: \${props => {
    if (props.disabled) return '#6c757d';
    return props.variant === 'danger' ? '#dc3545' : '#007bff';
  }};
  color: white;
  border: none;
  padding: \${props => {
    switch (props.size) {
      case 'sm': return '8px 16px';
      case 'lg': return '16px 32px';
      default: return '12px 24px';
    }
  }};
  border-radius: 4px;
  cursor: \${props => props.disabled ? 'not-allowed' : 'pointer'};
  font-size: 16px;
  transition: all 0.2s ease;
  opacity: \${props => props.disabled ? 0.6 : 1};

  &:hover {
    background-color: \${props => {
      if (props.disabled) return '#6c757d';
      return props.variant === 'danger' ? '#c82333' : '#0056b3';
    }};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
\`;

// Component using styled-components
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  disabled = false, 
  onClick 
}) => {
  return (
    <StyledButton 
      variant={variant}
      size={size}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export default Button;`}
          />
        </div>
      </LessonCard>

      {/* Tailwind CSS */}
      <LessonCard
        title="Tailwind CSS - Utility-First"
        description="Tailwind CSS ile utility-first styling"
        icon="🎨"
        level="intermediate"
      >
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-text-primary mb-4">Tailwind CSS Nedir?</h3>
            <p className="text-secondary-dark mb-4">
              Tailwind CSS, utility-first CSS framework'üdür. Pre-built utility class'ları kullanarak
              hızlı ve tutarlı UI'lar oluşturmanızı sağlar.
            </p>

            <div className="bg-white/50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-text-primary mb-2">Özellikler</h4>
              <div className="text-secondary-dark text-sm space-y-1">
                <p>• Utility-first approach</p>
                <p>• Responsive design</p>
                <p>• Dark mode support</p>
                <p>• Custom configuration</p>
                <p>• JIT compilation</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Avantajlar</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• Rapid development</p>
                  <p>• Consistent design</p>
                  <p>• Small bundle size</p>
                  <p>• No CSS conflicts</p>
                </div>
              </div>
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Kullanım Alanları</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• Rapid prototyping</p>
                  <p>• Design systems</p>
                  <p>• Component libraries</p>
                  <p>• Large applications</p>
                </div>
              </div>
            </div>
          </div>

          <CodeBlock
            title="Tailwind CSS Örneği"
            description="Tailwind CSS ile component styling"
            language="jsx"
            code={`// Button component with Tailwind
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  disabled = false, 
  onClick 
}) => {
  const baseClasses = 'font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 disabled:bg-gray-400',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500 disabled:bg-gray-400',
    success: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500 disabled:bg-gray-400',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 disabled:bg-gray-400'
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };
  
  const disabledClasses = disabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer hover:scale-105 active:scale-95';
  
  return (
    <button 
      className={\`\${baseClasses} \${variantClasses[variant]} \${sizeClasses[size]} \${disabledClasses}\`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

// Card component with Tailwind
interface CardProps {
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  variant?: 'default' | 'elevated' | 'outlined';
  size?: 'sm' | 'md' | 'lg';
}

const Card: React.FC<CardProps> = ({ 
  title, 
  children, 
  footer, 
  variant = 'default',
  size = 'md'
}) => {
  const baseClasses = 'bg-white rounded-lg transition-all duration-200';
  
  const variantClasses = {
    default: 'shadow-sm border border-gray-200',
    elevated: 'shadow-lg border border-gray-100',
    outlined: 'border-2 border-gray-300'
  };
  
  const sizeClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };
  
  return (
    <div className={\`\${baseClasses} \${variantClasses[variant]} \${sizeClasses[size]} hover:shadow-md\`}>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <div className="text-gray-600 mb-4">{children}</div>
      {footer && (
        <div className="pt-4 border-t border-gray-200 flex justify-between items-center">
          {footer}
        </div>
      )}
    </div>
  );
};

export { Button, Card };`}
          />
        </div>
      </LessonCard>

      {/* Design Tokens */}
      <LessonCard
        title="Design Tokens - Design System"
        description="Design tokens ile tutarlı design system"
        icon="🎯"
        level="advanced"
      >
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-text-primary mb-4">Design Tokens Nedir?</h3>
            <p className="text-secondary-dark mb-4">
              Design tokens, design system'inizin temel yapı taşlarıdır. Renkler, spacing, typography
              gibi değerleri merkezi olarak yönetmenizi sağlar.
            </p>

            <div className="bg-white/50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-text-primary mb-2">Token Türleri</h4>
              <div className="text-secondary-dark text-sm space-y-1">
                <p>• Color tokens</p>
                <p>• Spacing tokens</p>
                <p>• Typography tokens</p>
                <p>• Border radius tokens</p>
                <p>• Shadow tokens</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Avantajlar</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• Consistent design</p>
                  <p>• Easy maintenance</p>
                  <p>• Theme switching</p>
                  <p>• Brand consistency</p>
                </div>
              </div>
              <div className="bg-white/50 p-4 rounded-lg">
                <h4 className="font-semibold text-text-primary mb-2">Kullanım Alanları</h4>
                <div className="text-secondary-dark text-sm space-y-1">
                  <p>• Design systems</p>
                  <p>• Multi-brand apps</p>
                  <p>• Theme switching</p>
                  <p>• Large teams</p>
                </div>
              </div>
            </div>
          </div>

          <CodeBlock
            title="Design Tokens Örneği"
            description="Design tokens ile design system"
            language="jsx"
            code={`// design-tokens.js
export const designTokens = {
  colors: {
    // Primary colors
    primary: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
    },
    // Secondary colors
    secondary: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
    },
    // Semantic colors
    semantic: {
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444',
      info: '#3b82f6',
    },
    // Neutral colors
    neutral: {
      white: '#ffffff',
      black: '#000000',
      gray: {
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827',
      }
    }
  },
  
  spacing: {
    xs: '0.25rem',    // 4px
    sm: '0.5rem',     // 8px
    md: '1rem',       // 16px
    lg: '1.5rem',     // 24px
    xl: '2rem',       // 32px
    '2xl': '3rem',    // 48px
    '3xl': '4rem',    // 64px
    '4xl': '6rem',    // 96px
  },
  
  typography: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      serif: ['Georgia', 'serif'],
      mono: ['Fira Code', 'monospace'],
    },
    fontSize: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem',    // 48px
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
    lineHeight: {
      tight: 1.25,
      normal: 1.5,
      relaxed: 1.75,
    }
  },
  
  borderRadius: {
    none: '0',
    sm: '0.125rem',    // 2px
    md: '0.375rem',    // 6px
    lg: '0.5rem',      // 8px
    xl: '0.75rem',     // 12px
    '2xl': '1rem',     // 16px
    full: '9999px',
  },
  
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  },
  
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  }
};

// Theme provider
import React, { createContext, useContext } from 'react';

const ThemeContext = createContext(designTokens);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeContext.Provider value={designTokens}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};`}
          />
        </div>
      </LessonCard>

      {/* CSS-in-JS Comparison */}
      <LessonCard
        title="CSS-in-JS Karşılaştırması"
        description="Farklı CSS-in-JS kütüphanelerinin karşılaştırması"
        icon="⚖️"
        level="advanced"
      >
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-text-primary mb-4">CSS-in-JS Kütüphaneleri</h3>
            <p className="text-secondary-dark mb-4">
              Farklı CSS-in-JS kütüphanelerinin avantaj ve dezavantajlarını karşılaştıralım.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Kütüphane</th>
                    <th className="text-left p-2">Bundle Size</th>
                    <th className="text-left p-2">Performance</th>
                    <th className="text-left p-2">TypeScript</th>
                    <th className="text-left p-2">SSR</th>
                    <th className="text-left p-2">Learning Curve</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2 font-medium">styled-components</td>
                    <td className="p-2">~42KB</td>
                    <td className="p-2">Good</td>
                    <td className="p-2">✅</td>
                    <td className="p-2">✅</td>
                    <td className="p-2">Easy</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-medium">emotion</td>
                    <td className="p-2">~35KB</td>
                    <td className="p-2">Excellent</td>
                    <td className="p-2">✅</td>
                    <td className="p-2">✅</td>
                    <td className="p-2">Easy</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-medium">@emotion/styled</td>
                    <td className="p-2">~25KB</td>
                    <td className="p-2">Excellent</td>
                    <td className="p-2">✅</td>
                    <td className="p-2">✅</td>
                    <td className="p-2">Easy</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-medium">stitches</td>
                    <td className="p-2">~15KB</td>
                    <td className="p-2">Excellent</td>
                    <td className="p-2">✅</td>
                    <td className="p-2">✅</td>
                    <td className="p-2">Medium</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-medium">vanilla-extract</td>
                    <td className="p-2">~5KB</td>
                    <td className="p-2">Excellent</td>
                    <td className="p-2">✅</td>
                    <td className="p-2">✅</td>
                    <td className="p-2">Hard</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <CodeBlock
            title="CSS-in-JS Karşılaştırma Örneği"
            description="Farklı kütüphanelerle aynı component"
            language="jsx"
            code={`// styled-components
import styled from 'styled-components';

const StyledButton = styled.button\`
  background-color: #3b82f6;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  cursor: pointer;
\`;

// emotion
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const emotionButton = css\`
  background-color: #3b82f6;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  cursor: pointer;
\`;

const EmotionButton = styled.button\`
  \${emotionButton}
\`;

// stitches
import { styled } from '@stitches/react';

const StitchesButton = styled('button', {
  backgroundColor: '#3b82f6',
  color: 'white',
  border: 'none',
  padding: '0.5rem 1rem',
  borderRadius: '0.375rem',
  cursor: 'pointer',
});

// vanilla-extract
// Button.css.ts
import { style } from '@vanilla-extract/css';

export const button = style({
  backgroundColor: '#3b82f6',
  color: 'white',
  border: 'none',
  padding: '0.5rem 1rem',
  borderRadius: '0.375rem',
  cursor: 'pointer',
});

// Button.tsx
import { button } from './Button.css';

const VanillaButton = () => (
  <button className={button}>Click me</button>
);`}
          />
        </div>
      </LessonCard>
    </div>
  );
};

export default StylingStrategies;