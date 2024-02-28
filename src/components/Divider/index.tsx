import style from './Divider.module.scss';
const Divider = () => (
  <svg
    className={style.divider}
    width="100%"
    height="100"
    viewBox="0 0 100 7"
    preserveAspectRatio="none"
  >
    <path
      d="M0,5 H50 L75,0 H100"
      stroke="black"
      strokeWidth="0.2"
      fill="transparent"
      strokeLinejoin="round"
    />
  </svg>
);

export default Divider;
