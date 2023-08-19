import React from 'react';
import Form from './Form';


function ComponentToConditionalRender({location,path}) {
  

  // Check if the current path matches the path you want to avoid
  const shouldRender = location.pathname !== path;

  if (!shouldRender) {
    return null; // Return null or any fallback content when you don't want to render the component
  }

  return (
    <div>
      <Form/>
    </div>
  );
}

export default ComponentToConditionalRender;


