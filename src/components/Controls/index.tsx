import React from 'react';
import Arrow from '../Arrow';
import with3DEffect from '@/hocs/with3DEffect';
import { Button } from '@nextui-org/button';

const ArrowWith3DEffectDown = with3DEffect(
  Arrow,
  'left-0 top-2',
  'w-10 h-8',
  'bg-gray-300',
);
const ArrowWith3DEffectLeft = with3DEffect(
  Arrow,
  'left-0 top-3',
  'w-10 h-8',
  'bg-gray-300',
);
const ArrowWith3DEffectRight = with3DEffect(
  Arrow,
  'right-0 top-3',
  'w-10 h-8',
  'bg-gray-300',
);
const Controls = () => {
  return (
    <div className="grid grid-rows-3 grid-cols-3 ml-10 mb-5 -gap-5">
      <div></div>
      <Button radius="none" className="bg-gray-800 rounded-t-xl" isIconOnly>
        <Arrow direction="up" />
      </Button>
      <div></div>

      <Button radius="none" className="bg-gray-800 rounded-l-xl" isIconOnly>
        <ArrowWith3DEffectLeft direction="left" />
      </Button>
      <div className="bg-gray-800 z-10 w-10 h-10"></div>
      <Button radius="none" className="bg-gray-800 rounded-r-xl" isIconOnly>
        <ArrowWith3DEffectRight direction="right" />
      </Button>

      <div></div>
      <Button radius="none" className="bg-gray-800 rounded-b-xl" isIconOnly>
        <ArrowWith3DEffectDown direction="down" />
      </Button>
      <div></div>
    </div>
  );
};
export default Controls;
