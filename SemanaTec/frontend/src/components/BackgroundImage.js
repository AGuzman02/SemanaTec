import React from 'react';

const BackgroundImage = ({ imageUrl, children }) => {
  const style = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    minHeight: '100vh', // Ajusta la altura según tus necesidades
    width: '100%',
  };

  return (
    <div style={style}>
      {children}
    </div>
  );
};

export default BackgroundImage;
