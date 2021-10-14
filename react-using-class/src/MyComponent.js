import React from 'react';

const MyComponent = ({ name }) => {
  return <div>{name}</div>;
};
MyComponent.defaultProps = {
  name: '기본이름',
};
export default MyComponent;
