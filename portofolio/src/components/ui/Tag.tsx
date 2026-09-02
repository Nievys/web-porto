import React from 'react';

interface TagProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'teal' | 'outline' | 'patent';
  size?: 'sm' | 'md';
  className?: string;
}

export const Tag: React.FC<TagProps> = ({
  children,
  variant = 'default',
  size = 'md',
  className = ''
}) => {
  const getStyles = (): React.CSSProperties => {
    switch (variant) {
      case 'accent':
        return {
          backgroundColor: 'var(--color-accent)',
          color: 'var(--color-primary-dark)',
          border: '1px solid var(--color-accent-dark)'
        };
      case 'teal':
        return {
          backgroundColor: 'var(--color-primary)',
          color: 'var(--color-text-inverse)',
          border: '1px solid var(--color-primary-dark)'
        };
      case 'patent':
        return {
          backgroundColor: 'var(--color-accent)',
          color: 'var(--color-primary-deep)',
          border: '1.5px solid var(--color-primary)',
          fontWeight: 700
        };
      case 'outline':
        return {
          backgroundColor: 'transparent',
          color: 'var(--color-primary)',
          border: '1px solid var(--color-border)'
        };
      case 'default':
      default:
        return {
          backgroundColor: 'var(--color-surface-tint)',
          color: 'var(--color-primary-dark)',
          border: '1px solid var(--color-border)'
        };
    }
  };

  const isSmall = size === 'sm';

  return (
    <span
      className={`ui-tag ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.35rem',
        padding: isSmall ? '0.2rem 0.55rem' : '0.3rem 0.75rem',
        borderRadius: 'var(--radius-full)',
        fontFamily: 'var(--font-mono)',
        fontSize: isSmall ? '0.7rem' : '0.775rem',
        fontWeight: 600,
        letterSpacing: '0.02em',
        whiteSpace: 'nowrap',
        ...getStyles()
      }}
    >
      {children}
    </span>
  );
};
