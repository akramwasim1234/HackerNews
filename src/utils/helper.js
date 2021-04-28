import axios from 'axios';

      export const getStoryList= async  () => {
    console.log('inside getstoryList')
    try {
      const { data: storyIds } = await axios.get(
        `https://hacker-news.firebaseio.com/v0/topstories.json`
      );
      const stories = await Promise.all(storyIds.slice(0,10).map(fetchSingleStory));
      console.log(stories)
      return stories;
      
    } catch (error) {
      console.log('Error while getting list of stories.');
    }
  };

  const fetchSingleStory=  async  (id) =>  {
  try {
  
    let op = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
    let story = op.data;
   let commentIds = story.kids;
   let maxCommentLen = commentIds.length>10?10:commentIds.length;
   let comments = await Promise.all(commentIds.slice(0, maxCommentLen).map(fetchSingleComment));
    story.comments = comments ;
    if(story) return story;
  } catch (error) {
    console.log(error);
  }
};


const fetchSingleComment =async  (id) =>   {
    try {
      const comment = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
      return comment.data.text;
    } catch (error) {
      console.log(error);
    }
  };




  
