import React from 'react';

const MyComponent = ({ name, children }) => {
  return (
    <div>
      {name} {children}
    </div>
  );
};
MyComponent.defaultProps = {
  name: '기본이름',
};
export default MyComponent;
