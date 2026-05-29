import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function SecondaryButton({
  children,
  to,
  href,
  onClick,
  className = '',
  variant = 'outline',
  icon = false,
}) {
  const variantClasses = {
    outline: 'btn-outline',
    white: 'btn-secondary',
    ghost: 'inline-flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors',
  };

  const classes = `${variantClasses[variant]} ${className}`;

  if (to) return <Link to={to} className={classes}>{children}{icon && <ArrowRight size={16} />}</Link>;
  if (href) return <a href={href} className={classes} target="_blank" rel="noopener noreferrer">{children}{icon && <ArrowRight size={16} />}</a>;
  return <button onClick={onClick} className={classes}>{children}{icon && <ArrowRight size={16} />}</button>;
}
