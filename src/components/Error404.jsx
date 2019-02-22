import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Error404(props){
  return (
    <div id="errorDiv">
      <style jsx>{`
            #errorDiv {
                color: white;
                margin-top: 100px;
            }
        `}</style>
      <h2>The page {props.location.pathname} does not exist!</h2>
      <h3>Would you like to return <Link to="/">home</Link> instead?</h3>
    </div>
  );
}

Error404.propTypes = {
  location: PropTypes.object
};