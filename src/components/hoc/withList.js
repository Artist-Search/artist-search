import React from 'react';

export const withList = (Component, arrayKey, listKey) => {
  const ComponentHOC = props => {
    const liElements = props[arrayKey].map(item => (
      <li key={item[listKey]}>
        <Component {...item} />
      </li>
    ));

    return (
      <ul>
        {liElements}
      </ul>
    );
  };

  return ComponentHOC;
};
