import React from 'react';


const LikeSection = props => {
  return (
    <div>
    <div
      className="like-section"
      key="likes-icons-container"
    >
      <div className="like-section-wrapper">
        <button
          onClick={props.increaseLikes}
          ><i className="far fa-heart" />
          </button>
      </div>
      <div className="like-section-wrapper">
        <i className="far fa-comment" />
      </div>
    </div>
    <p className="like-number">
      
     {props.points} likes</p>
</div>
  )
};

export default LikeSection;
