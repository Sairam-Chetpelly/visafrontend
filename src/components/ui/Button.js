import { clsx } from 'clsx';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  disabled = false, 
  className = '', 
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors';
  
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-900 focus:ring-gray-500',
    danger: 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-500',
  };
  
  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  // If className is provided, use it entirely, otherwise use default styling
  const buttonClassName = className ? 
    clsx(className, disabled && 'opacity-50 cursor-not-allowed') :
    clsx(
      baseClasses,
      variants[variant],
      sizes[size],
      disabled && 'opacity-50 cursor-not-allowed'
    );

  return (
    <button
      className={buttonClassName}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button };
export default Button;