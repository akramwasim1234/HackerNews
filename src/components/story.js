import React from 'react';
import '../styles.css';


const Story = (props) => {
  if(props && props.story){
  const { by, title, kids, time, url,comments } = props.story;
    console.log('story')
  return (
    <div className="story">
      <div className="story-title">
      <a href={url} target="_blank" rel="noreferrer">
    {title}
  </a>
      </div>
      <div className="story-info">
        <span>
          by{' '}
          {by}
        </span>
        |<span>
          {new Date(time * 1000).toLocaleDateString('en-US', {
            hour: 'numeric',
            minute: 'numeric'
          })}
        </span>|
       
        <span>
        <div className="tooltip">{kids && kids.length > 0 ? kids.length : 0}  Comments 
          <span className="tooltiptext">
            <i>Showing top 10 Comments</i>
            <br/><br/>
            {comments.map((comment, index) => (
        
              <span key={index} className="indiv">
                <b >{index+ 1}</b>)
                  <span dangerouslySetInnerHTML={{__html: comment}} />
                <br/>
              </span>
            ))}
      </span>
        </div>
        
        </span>
      </div>
    </div>
  );
            } return (<div className="story">no story defined</div>);
};

export default Story;
