export default function FilterButton({ children, onClick, color }) {
  const borderColor = 'border-' + color + '-500';
  const backgroundColor = 'bg-' + color + '-500';
  const textColor = color === undefined ? 'text-black' : 'text-white';

  return (
    <button
      onClick={() => onClick(children)}
      className={`min-w-fit w-16 p-2 border rounded-md ${textColor} ${borderColor} ${backgroundColor}`}
    >
      {children}
    </button>
  );
}
