import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Post from './Post';
import { v4 } from 'uuid';

export default function ProjectDetails(props){
    const {project} = props.location.state;
    // let newPostList = [];
    
    // useEffect(() => {
    //     newPostList = [];
    //     for (let post of props.location.state.posts) {
    //         if(post.id === props.location.state.project.id) {
    //             newPostList.push(post);
    //         }
    //     }
    // });

  let _name = null;
  let _body = null;

  function handleNewPostFormSubmission(event) {
    event.preventDefault();
    props.location.state.onAddingNewPostToList({name: _name.value, body: _body.value, projectId: project.id});
    _name.value = '';
    _body.value = '';
  }
  return (
    <div id="detailsDiv">
      <style jsx>{`
            #detailsDiv {
                color: white;
                margin-top: 100px;
            }

            #projectTitle {
                font-size: 25px;
                text-align: center;
            }

            .projectSmallerTitle {
                text-align: center;
                font-size: 18px;
            }

            .projectDetailsGrid {
                display: grid;
                grid-template-columns: 5fr 7fr;
                text-align: center;
            }

            a {
                color: white;
            }

            a:visited {
                color: white;
            }

            a:hover {
                color: #ABB1B9;
            }
        `}</style>
      <div>
        <p id="projectTitle">{project.name}</p>
      </div>
      <hr></hr>
      <div className="projectDetailsGrid">
        <div>
          <p className="projectSmallerTitle">Description:</p>
        </div>
        <div>
          <p>{project.description}</p>
        </div>
      </div>
      <div className="projectDetailsGrid">
        <div>
          <p className="projectSmallerTitle">Made By:</p>
        </div>
        <div>
          <p>{project.madeBy}</p>
        </div>
      </div>
      <div className="projectDetailsGrid">
        <div>
          <p className="projectSmallerTitle">Links:</p>
        </div>
        <div>
          <p><a href={project.github}>Github Link</a> {project.hostLink.length > 5 && <a href={project.hostLink}>Hosting Link</a> }</p>
        </div>
      </div>
      <hr />
      <div>
        <div>
          <p>Comments:</p>
        </div>
        <div>
          {project.posts.map((post) =>
            <Post name={post.name}
              body={post.body}
              projectId={post.projectId}
              key={v4()}/>
          )}
        </div>
        <div>
          <form onSubmit={handleNewPostFormSubmission}>
            <input type="text"
              id="name"
              placeholder="Your Name"
              ref={input => {_name = input;}} />
            <input type="text"
              id="body"
              placeholder="Type Comment Here..."
              ref={input => {_body = input;}} />
            <button type="submit">Post!</button>
          </form>
        </div>
      </div>
    </div>
  );
}

ProjectDetails.propTypes = {
  location: PropTypes.object,
  onAddingNewPostToList: PropTypes.func
};