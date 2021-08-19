export const ScrollWrapper = ({ children }) => {
  return (
    <div className='scroll-wrapper'>
      <div className='scroll-container'>{children}</div>
    </div>
  );
};
