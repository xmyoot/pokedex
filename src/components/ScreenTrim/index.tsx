import style from './ScreenTrim.module.scss';
const ScreenTrim = ({ children }: { children: React.ReactNode }) => (
  <div
    className={`${style.screenTrim} border border-2 border-solid border-gray-600 bg-gray-300 rounded-lg p-6`}
  >
    {children}
  </div>
);
export default ScreenTrim;
