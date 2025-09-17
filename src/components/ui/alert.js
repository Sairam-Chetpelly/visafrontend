import { clsx } from 'clsx';

const AlertWithIcon = ({ variant = 'default', title, description, className = '' }) => {
  const variants = {
    default: 'bg-blue-50 border-blue-200 text-blue-800',
    destructive: 'bg-red-50 border-red-200 text-red-800',
    success: 'bg-green-50 border-green-200 text-green-800',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800'
  };

  return (
    <div className={clsx(
      'border rounded-lg p-4',
      variants[variant],
      className
    )}>
      {title && <h4 className="font-medium mb-1">{title}</h4>}
      {description && <p className="text-sm">{description}</p>}
    </div>
  );
};

export { AlertWithIcon };