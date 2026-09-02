import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'accent' | 'outline' | 'ghost' | 'inverse';
  size?: 'sm' | 'md' | 'lg';
  as?: 'button' | 'a';
  href?: string;
  target?: string;
  rel?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  as = 'button',
  href,
  target,
  rel,
  icon,
  iconPosition = 'right',
  children,
  className = '',
  style,
  ...props
}) => {
  const getVariantStyles = (): React.CSSProperties => {
    switch (variant) {
      case 'accent':
        return {
          backgroundColor: 'var(--color-accent)',
          color: 'var(--color-primary-dark)',
          border: '1.5px solid var(--color-accent)',
          boxShadow: '0 4px 14px rgba(207, 218, 90, 0.35)'
        };
      case 'outline':
        return {
          backgroundColor: 'transparent',
          color: 'var(--color-primary)',
          border: '1.5px solid var(--color-border-strong)'
        };
      case 'inverse':
        return {
          backgroundColor: 'var(--color-text-inverse)',
          color: 'var(--color-primary)',
          border: '1.5px solid var(--color-text-inverse)'
        };
      case 'ghost':
        return {
          backgroundColor: 'transparent',
          color: 'var(--color-primary)',
          border: '1.5px solid transparent'
        };
      case 'primary':
      default:
        return {
          backgroundColor: 'var(--color-primary)',
          color: 'var(--color-text-inverse)',
          border: '1.5px solid var(--color-primary)',
          boxShadow: '0 4px 16px rgba(40, 90, 113, 0.25)'
        };
    }
  };

  const getSizeStyles = (): React.CSSProperties => {
    switch (size) {
      case 'sm':
        return {
          padding: '0.45rem 1rem',
          fontSize: '0.875rem',
          gap: '0.4rem',
          borderRadius: 'var(--radius-full)'
        };
      case 'lg':
        return {
          padding: '0.85rem 2rem',
          fontSize: '1.05rem',
          gap: '0.65rem',
          borderRadius: 'var(--radius-full)'
        };
      case 'md':
      default:
        return {
          padding: '0.65rem 1.4rem',
          fontSize: '0.95rem',
          gap: '0.5rem',
          borderRadius: 'var(--radius-full)'
        };
    }
  };

  const baseStyles: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'var(--font-sans)',
    fontWeight: 600,
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'transform var(--transition-fast), box-shadow var(--transition-fast), background-color var(--transition-fast), border-color var(--transition-fast)',
    ...getVariantStyles(),
    ...getSizeStyles(),
    ...style
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.transform = 'translateY(-2px)';
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.transform = 'translateY(0)';
  };

  const content = (
    <>
      {icon && iconPosition === 'left' && <span style={{ display: 'flex', alignItems: 'center' }}>{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span style={{ display: 'flex', alignItems: 'center' }}>{icon}</span>}
    </>
  );

  if (as === 'a' && href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={`custom-button ${className}`}
        style={baseStyles}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={`custom-button ${className}`}
      style={baseStyles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {content}
    </button>
  );
};
