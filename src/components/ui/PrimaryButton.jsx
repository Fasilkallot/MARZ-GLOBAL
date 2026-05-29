import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function PrimaryButton({
  children,
  to,
  href,
  onClick,
  className = '',
  icon = true,
  size = 'md',
}) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  const classes = `btn-primary ${sizeClasses[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
        {icon && <ArrowRight size={16} />}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
        {icon && <ArrowRight size={16} />}
      </a>
    );
  }
  return (
    <button onClick={onClick} className={classes}>
      {children}
      {icon && <ArrowRight size={16} />}
    </button>
  );
}
