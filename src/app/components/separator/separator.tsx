interface SeparatorProps {
    marginDown?: string;
    width?: '16' | '24' | '32' | '40'; // los tamaños que quieras permitir
    height?: 'px' | '0.5' | '1' | '2';
    color?: 'orange' | 'red' | 'blue' | 'yellow';
  }
  
  const colorMap = {
    orange: 'bg-[#fe7d00]',
    red: 'bg-red-600',
    blue: 'bg-blue-400',
    yellow: 'bg-yellow-500',
  };
  
  const widthMap = {
    '16': 'w-16',
    '24': 'w-24',
    '32': 'w-32',
    '40': 'w-40',
  };
  
  const heightMap = {
    'px': 'h-px',
    '0.5': 'h-0.5',
    '1': 'h-1',
    '2': 'h-2',
  };
  
  export function Separator({ marginDown, width = '16', height = 'px', color = 'orange' }: SeparatorProps) {
    const marginBottomClass = marginDown ? `mb-${marginDown}` : '';
    const lineWidthClass = widthMap[width];
    const lineHeightClass = heightMap[height];
    const lineColorClass = colorMap[color];
  
    return (
      <div className={`flex justify-center items-center ${marginBottomClass}`}>
        <div className={`${lineHeightClass} ${lineWidthClass} ${lineColorClass}`}></div>
        <span className="mx-2 text-xl text-gray-400">
          <img src="/media/images/sunflower-separator.png" alt="" className="w-6 h-6" />
        </span>
        <div className={`${lineHeightClass} ${lineWidthClass} ${lineColorClass}`}></div>
      </div>
    );
  }
  