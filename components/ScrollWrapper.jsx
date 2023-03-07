export const ScrollWrapper = ({ children }) => {
  return (
    <div className='scroll-wrapper'>
      <div className='scroll-container max-w-6xl mx-auto'>{children}</div>
    </div>
  );
};
