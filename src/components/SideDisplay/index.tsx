'use client';
import 'react-awesome-button/dist/themes/theme-blue.css';
import style from './SideDisplay.module.scss';
import { Button } from '@nextui-org/button';
import Screen from '../Screen';
import NumberPads from '../NumberPads';
import Led from '../Led/Led';
import with3DEffect from '@/hocs/with3DEffect';
import useIntervalSwitch from '@/hooks/useIntervalSwitcher';
const SideDisplay = () => {
  const isOnLong = useIntervalSwitch(true, 2000);
  const ButtonWith3DEffect = with3DEffect(
    Button,
    'top-0.5 left-0',
    'w-20 h-10',
    'bg-gradient-to-br rounded-md from-gray-400 to-gray-500',
  );
  return (
    <div
      className={`${style.sideDisplay} border border-4 border-solid border-black bg-red-700 rounded-r-lg pt-32 mt-10`}
    >
      <div className="flex justify-center">
        <Screen size="h-32 w-80">
          <div className="flex justify-end">
            <Led
              color="bg-red-500"
              size="size-10"
              border="border border-4 border-gray-400"
              offset="right-1 top-1"
              isOn={isOnLong}
            />
          </div>
        </Screen>
      </div>
      <div className="flex justify-center mt-5">
        <NumberPads />
      </div>
      <div className="flex justify-between ml-14 mt-5 mr-14 gap-2">
        <div className="flex justify-between gap-1">
          <ButtonWith3DEffect className="bg-gray-400 rounded-sm"></ButtonWith3DEffect>
          <ButtonWith3DEffect className="bg-gray-400 rounded-sm"></ButtonWith3DEffect>
        </div>
        <Led
          color="bg-yellow-500"
          size="size-10"
          border="border border-4 border-gray-400"
          offset="right-1 top-1"
          isOn={isOnLong}
        />
      </div>
    </div>
  );
};
export default SideDisplay;
