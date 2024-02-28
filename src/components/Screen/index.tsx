const Screen = ({
  children,
  size,
}: {
  children: React.ReactNode;
  size: string;
}) => (
  <div className={`${size} flex items-end bg-black rounded-lg p-4`}>
    {children}
  </div>
);
export default Screen;
