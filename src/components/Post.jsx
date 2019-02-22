import React from 'react';
import PropTypes from 'prop-types';

export default function Post(props){
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.body}</p>
    </div>
  );
}

Post.propTypes = {
  name: PropTypes.string,
  body: PropTypes.string,
};
