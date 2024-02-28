const NameDisplay = ({ name }: { name: string }) => (
  <div className="bg-green-500 rounded h-10 mt-5 ml-10 w-48 pl-5 flex items-center justify-start text-white font-bold">
    {name}
  </div>
);

export default NameDisplay;
