import Led from './Led/Led';

const LedGroup = ({ children }: { children: React.ReactNode }) => {
  return <div className="space-x-2">{children}</div>;
};

export default LedGroup;
