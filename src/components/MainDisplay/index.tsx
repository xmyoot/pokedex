'use client';
import Divider from '../Divider';
import Led from '../Led/Led';
import LedGroup from '../LedGroup';
import styles from './MainDisplay.module.scss';
import { Bars4Icon } from '@heroicons/react/24/outline';
import ScreenTrim from '../ScreenTrim';
import Screen from '../Screen';
import PokemonNo from '../PokemonNo';
import Image from 'next/image';
import NameDisplay from '../NameDisplay';
import Controls from '../Controls';
// import ArrowButton from './ArrowButton';
import useIntervalSwitch from '@/hooks/useIntervalSwitcher';
import with3DEffect from '@/hocs/with3DEffect';
import AnimatedLED from '../AnimatedLed';

const MainDisplay = () => {
  const isOnLong = useIntervalSwitch(true, 2000);
  const isOnShort = useIntervalSwitch(true, 300);
  const isOnFast = useIntervalSwitch(true, 500);

  return (
    <div
      className={`${styles.mainDisplay} border-solid border-4 border-black w-2/5 bg-red-700 rounded-lg`}
    >
      <div className="flex space-x-10 p-5 pb-0 items-top">
        <AnimatedLED />
        <LedGroup>
          <Led
            color="bg-red-500"
            size="size-6"
            border="border border-gray-400 border-1"
            offset="left-0.5 top-0.5"
            isOn={true}
          />
          <Led
            color="bg-green-500"
            size="size-6"
            border="border border-gray-400 border-1"
            offset="left-0.5 top-0.5"
            isOn={isOnFast}
          />
          <Led
            color="bg-yellow-500"
            size="size-6"
            border="border border-gray-400 border-1"
            offset="left-0.5 top-0.5"
            isOn={isOnLong}
          />
        </LedGroup>
      </div>
      <Divider />
      <div className="flex justify-center">
        <ScreenTrim>
          <div className="flex justify-center">
            <LedGroup>
              <Led
                color="bg-red-500"
                size="size-3"
                border="border border-gray-400"
                offset="left-0"
                isOn={true}
              />
              <Led
                color="bg-blue-700"
                size="size-3"
                border="border border-gray-400"
                offset="left-0"
                isOn={isOnShort}
              />
            </LedGroup>
          </div>
          <div className="flex justify-center">
            <Screen size="h-48 w-72">
              <div className="flex justify-end">
                <Led
                  color="bg-red-500"
                  size="size-10"
                  border="border border-4 border-gray-400"
                  offset="right-1 top-1"
                  isOn={isOnLong}
                />
              </div>
              <PokemonNo number="700" />
            </Screen>
          </div>
          <div className="flex justify-between mt-2 ml-10">
            <Led
              color="bg-red-700"
              size="size-6"
              border="border border-red-800"
              offset="left-0"
              isOn={true}
            />
            <Bars4Icon className="w-6 h-6 text-gray-800 mr-10" />
          </div>
        </ScreenTrim>
      </div>
      <div className="flex justify-start mt-2">
        <NameDisplay name="Bulbasaur" />
        <Controls />
      </div>
    </div>
  );
};

export default MainDisplay;
