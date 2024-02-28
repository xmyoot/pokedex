const with3DEffect = (
  Component: React.ComponentType<any>,
  offset: string,
  size: string,
  background: string,
) => {
  return (props: any) => (
    <div className={`${size} relative`} style={{ zIndex: 0 }}>
      <Component {...props} className={`relative ${props.className} ${size}`} />
      <div
        style={{ zIndex: -1 }}
        className={`absolute inset-x-0 h-full bg-gray-600 ${offset} ${background} ${size}`}
      ></div>
    </div>
  );
};

export default with3DEffect;
