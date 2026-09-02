import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  size?: 'sm' | 'md' | 'lg' | 'full';
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  style,
  size = 'md'
}) => {
  const getMaxWidth = () => {
    switch (size) {
      case 'sm': return '960px';
      case 'lg': return '1380px';
      case 'full': return '100%';
      case 'md':
      default: return 'var(--container-max)';
    }
  };

  return (
    <div
      className={`layout-container ${className}`}
      style={{
        width: '100%',
        maxWidth: getMaxWidth(),
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: 'var(--container-padding)',
        paddingRight: 'var(--container-padding)',
        ...style
      }}
    >
      {children}
    </div>
  );
};
