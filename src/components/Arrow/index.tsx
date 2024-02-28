import clsx from 'clsx';
import {
  ChevronUpIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/solid';
type ArrowProps = {
  direction: 'up' | 'down' | 'left' | 'right';
};

const Arrow = ({ direction }: ArrowProps) => {
  let Icon;
  switch (direction) {
    case 'up':
      Icon = ChevronUpIcon;
      break;
    case 'down':
      Icon = ChevronDownIcon;
      break;
    case 'left':
      Icon = ChevronLeftIcon;
      break;
    case 'right':
      Icon = ChevronRightIcon;
      break;
    default:
      Icon = ChevronUpIcon;
  }

  return (
    <div
      className={clsx(
        'inline-flex items-center px-2 py-1 text-sm bg-gray-800',
        {
          'rounded-t-xl': direction === 'up',
          'rounded-b-xl': direction === 'down',
          'rounded-l-xl': direction === 'left',
          'rounded-r-xl': direction === 'right',
        },
      )}
    >
      <Icon className="w-6 h-6 text-gray-400" />
    </div>
  );
};
export default Arrow;
