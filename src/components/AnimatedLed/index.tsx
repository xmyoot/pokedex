import styles from './AnimatedLED.module.scss'; // Import the CSS file

const AnimatedLED = ({ children }: { children?: React.ReactNode }) => {
  const handleClick = () => {
    //
  };

  return (
    <div
      className={`rounded-full size-16 border border-gray-400 border-4 shadow-md ${styles.animatedLED}`}
      onClick={handleClick}
    >
      {children}
    </div>
  );
};

export default AnimatedLED;
