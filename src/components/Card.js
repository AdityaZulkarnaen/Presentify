'use client';

export default function Card({ 
  children, 
  className = '',
  padding = 'default',
  hover = false,
  ...props 
}) {
  const baseStyles = 'bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800';
  
  const paddings = {
    none: '',
    sm: 'p-4',
    default: 'p-6',
    lg: 'p-8',
  };

  const hoverStyles = hover ? 'transition-all hover:shadow-lg hover:border-zinc-300 dark:hover:border-zinc-700' : '';

  return (
    <div
      className={`${baseStyles} ${paddings[padding]} ${hoverStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
