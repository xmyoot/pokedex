import NumberPad from './NumberPad';

const NumberPads: React.FC = () => (
  <div className="grid grid-rows-2 grid-cols-5 bg-black">
    {[...Array(10)].map((_, i) => (
      <NumberPad key={i} number={i} />
    ))}
  </div>
);

export default NumberPads;
