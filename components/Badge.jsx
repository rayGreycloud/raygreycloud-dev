const Badge = ({ color, children }) => {
  console.log('color: ', color);
  const baseClasses = `inline-flex items-center rounded-full px-3 py-0.5 text-sm font-medium`;

  switch (color) {
    case 'gray':
      return (
        <span
          className={`inline-flex items-center rounded-full px-3 py-0.5 text-sm font-medium bg-gray-100 text-gray-800`}
        >
          {children}
        </span>
      );
    case 'red':
      return (
        <span className={`${baseClasses} bg-red-100 text-red-800`}>
          {children}
        </span>
      );
    case 'indigo':
      return (
        <span className={`${baseClasses} bg-indigo-100 text-indigo-800`}>
          {children}
        </span>
      );
    case 'rose':
      return (
        <span className={`${baseClasses} bg-rose-100 text-rose-800`}>
          {children}
        </span>
      );
    case 'green':
      return (
        <span className={`${baseClasses} bg-green-100 text-green-800`}>
          {children}
        </span>
      );
    case 'lime':
      return (
        <span className={`${baseClasses} bg-lime-100 text-lime-800`}>
          {children}
        </span>
      );
    case 'cyan':
      return (
        <span className={`${baseClasses} bg-cyan-100 text-cyan-800`}>
          {children}
        </span>
      );
    case 'sky':
      return (
        <span className={`${baseClasses} bg-sky-100 text-sky-800`}>
          {children}
        </span>
      );
    case 'blue':
      return (
        <span className={`${baseClasses} bg-red-100 text-red-800`}>
          {children}
        </span>
      );
    case 'orange':
      return (
        <span className={`${baseClasses} bg-orange-100 text-orange-800`}>
          {children}
        </span>
      );
    case 'yellow':
      return (
        <span className={`${baseClasses} bg-yellow-100 text-yellow-800`}>
          {children}
        </span>
      );
    default:
      return;
  }
};

export default Badge;
