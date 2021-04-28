
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import HackerNews from './App';
import './styles.css';
import {getStoryList} from './utils/helper'
import Story from './components/story'
function App() {
  const [stories, setStories] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const fetchData =  async() => {
    console.log(getStoryList())
    setIsLoading(true); 
    const response = await getStoryList()
    setStories(response); 
    setIsLoading(false); 
  };

  return (
    <div className="App">
      <h1>HackerNews</h1>
      <br/>

      {/* Fetch data from API */}
      <div>
        <a className="fetch-button" onClick={fetchData}>
         Get Top 10 Stories
        </a>
        <br />
        <br/>
      </div>

      {/* Display data from API */}
      <React.Fragment>
      {isLoading ? (
        <p className="loading">Loading...</p>
      ) : (        <React.Fragment>
      
             {stories && stories.map((story,index) => (
            <Story key={index} story={story} />
          ))}
          
          </React.Fragment>
      )}
    </React.Fragment>
      <HackerNews/>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

