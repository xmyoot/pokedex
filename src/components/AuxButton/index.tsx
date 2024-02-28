const AuxButton = ({
  onClick,
  children,
}: {
  onClick?: () => void;
  children: React.ReactNode;
}) => (
  <div
    className="w-20 h-10 bg-gray-300 border border-1 border-gray-400 rounded-sm"
    onClick={onClick}
  >
    {children}
  </div>
);

export default AuxButton;
