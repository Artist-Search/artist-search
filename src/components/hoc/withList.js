import React from 'react';

//arraykey=the key of the array we want to use/ name of property we'll pass the list under

//listKey = most likely the id because it's the most unique.

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
