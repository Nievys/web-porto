import React from 'react';

interface CardBlockProps {
  children: React.ReactNode;
  variant?: 'cream' | 'teal' | 'lime' | 'surface';
  padding?: 'sm' | 'md' | 'lg' | 'none';
  borderRadius?: 'sm' | 'md' | 'lg' | 'xl';
  border?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export const CardBlock: React.FC<CardBlockProps> = ({
  children,
  variant = 'cream',
  padding = 'lg',
  borderRadius = 'xl',
  border = true,
  className = '',
  style,
  onClick
}) => {
  const getVariantStyles = (): React.CSSProperties => {
    switch (variant) {
      case 'teal':
        return {
          backgroundColor: 'var(--color-primary)',
          color: 'var(--color-text-inverse)',
          borderColor: 'rgba(255, 255, 255, 0.15)'
        };
      case 'lime':
        return {
          backgroundColor: 'var(--color-accent)',
          color: 'var(--color-primary-deep)',
          borderColor: 'var(--color-accent-dark)'
        };
      case 'surface':
        return {
          backgroundColor: 'var(--color-surface)',
          color: 'var(--color-text-primary)',
          borderColor: 'var(--color-border)'
        };
      case 'cream':
      default:
        return {
          backgroundColor: 'var(--color-background-card)',
          color: 'var(--color-text-primary)',
          borderColor: 'var(--color-border)'
        };
    }
  };

  const getPadding = () => {
    switch (padding) {
      case 'none': return '0';
      case 'sm': return 'var(--space-sm)';
      case 'md': return 'var(--space-md)';
      case 'lg':
      default: return 'var(--space-xl)';
    }
  };

  const getRadius = () => {
    switch (borderRadius) {
      case 'sm': return 'var(--radius-sm)';
      case 'md': return 'var(--radius-md)';
      case 'lg': return 'var(--radius-lg)';
      case 'xl':
      default: return 'var(--radius-xl)';
    }
  };

  return (
    <div
      className={`card-block ${className}`}
      onClick={onClick}
      style={{
        borderRadius: getRadius(),
        padding: getPadding(),
        border: border ? '1.5px solid' : 'none',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-subtle)',
        ...getVariantStyles(),
        ...style
      }}
    >
      {children}
    </div>
  );
};
