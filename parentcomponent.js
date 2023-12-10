import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const dataToSend = "Hello from Parent";

  return <ChildComponent data={dataToSend} />;
};