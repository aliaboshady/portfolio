export default function FilterButton({
  children,
  onClick,
  color,
  activeButton,
}) {
  const filterName = children.replace(' ', '_').toLowerCase();
  const borderColor =
    color === undefined ? 'border-black/[0.20]' : 'border-' + color + '-500';
  const backgroundColor = 'bg-' + color + '-500';
  const textColor = color === undefined ? 'text-black' : 'text-white';
  const scale = activeButton === filterName ? 'scale-[1.10]' : 'scale-[1]';
  const opacity = activeButton === filterName ? 'opacity-100' : 'opacity-50';
  const hoverOpacity =
    activeButton === filterName ? 'hover:opacity-100' : 'hover:opacity-80';
  const marginX = activeButton === filterName ? 'mx-3' : 'mx-0';
  const shadow = activeButton === filterName ? 'shadow-xl' : 'shadow-none';

  return (
    <button
      onClick={() => onClick(filterName)}
      className={`min-w-fit w-16 p-2 rounded-md border-[3px] transition-all shadow-black/25 ${shadow} ${marginX} ${hoverOpacity} ${opacity} ${scale} ${textColor} ${borderColor} ${backgroundColor}`}
    >
      {children}
    </button>
  );
}
