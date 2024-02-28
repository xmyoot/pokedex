const Led = ({
  color,
  size,
  border,
  offset,
  isOn,
}: {
  color: string;
  size: string;
  border: string;
  offset: string;
  isOn: boolean;
}) => {
  let currentColor = isOn ? color : 'bg-gray-700';
  return (
    <button className="relative">
      <div
        className={`absolute h-full inset-x-0 bg-gray-600 -bottom-px ${offset} border border-gray-600 rounded-full ${size}`}
      ></div>
      <div
        className={`relative ${currentColor} ${border} rounded-full ${size}
`}
      ></div>
    </button>
  );
};
export default Led;
