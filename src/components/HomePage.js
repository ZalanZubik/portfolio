import React from 'react';
import Introduction from './Introduction';
import Highlighted from './Highlighted';

const HomePage = () => {
  document.title = 'Zalán Zubik – Web Developer';

  return (
    <div>
      <Introduction />
      <Highlighted />
    </div>
  );
};

export default HomePage;
