import { Button } from '@nextui-org/button';
const NumberPad = ({ number }: { number: number }) => (
  <Button className="rounded-none border border-2 border-black bg-sky-500 text-white font-bold size-16">
    {number}
  </Button>
);
export default NumberPad;
