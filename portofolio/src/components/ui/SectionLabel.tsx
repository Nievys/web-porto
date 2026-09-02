import React from 'react';

interface SectionLabelProps {
  number: string;
  label: string;
  className?: string;
  variant?: 'dark' | 'light' | 'lime';
}

export const SectionLabel: React.FC<SectionLabelProps> = ({
  number,
  label,
  className = '',
  variant = 'dark'
}) => {
  const getStyles = () => {
    switch (variant) {
      case 'lime':
        return {
          badgeBg: 'var(--color-primary-dark)',
          badgeColor: 'var(--color-accent)',
          textColor: 'var(--color-primary-dark)',
          borderColor: 'var(--color-primary-dark)'
        };
      case 'light':
        return {
          badgeBg: 'var(--color-accent)',
          badgeColor: 'var(--color-primary-dark)',
          textColor: 'var(--color-text-inverse)',
          borderColor: 'rgba(255, 255, 255, 0.25)'
        };
      case 'dark':
      default:
        return {
          badgeBg: 'var(--color-primary)',
          badgeColor: 'var(--color-accent)',
          textColor: 'var(--color-primary)',
          borderColor: 'var(--color-border)'
        };
    }
  };

  const styles = getStyles();

  return (
    <div
      className={`section-label-root ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.625rem',
        padding: '0.35rem 0.85rem 0.35rem 0.4rem',
        borderRadius: 'var(--radius-full)',
        border: `1.5px solid ${styles.borderColor}`,
        backgroundColor: variant === 'lime' ? 'var(--color-accent)' : 'transparent',
        marginBottom: '1.25rem'
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.75rem',
          fontWeight: 700,
          backgroundColor: styles.badgeBg,
          color: styles.badgeColor,
          padding: '0.15rem 0.5rem',
          borderRadius: 'var(--radius-full)',
          letterSpacing: '0.05em'
        }}
      >
        {number}
      </span>
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.75rem',
          fontWeight: 600,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: styles.textColor
        }}
      >
        {label}
      </span>
    </div>
  );
};
