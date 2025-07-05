import React, { Component } from 'react';
import './App.css';

// defining the list
const list = [
  {
    title: 'React',
    url:'//x.com/jordwalke?lang=en',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectId: 0,
  },
  {
    title: 'Redux',
    url: 'https://x.com/acdlite',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectId: 1,
  },
];



class App extends Component {
  render() {
    const helloWorld = 'Welcome to the Road to learn React';
    return (
      <div className="App">

       {list.map(item => 
          <div key = {item.objectID}>
            <span>
              <a href={item.url}> {item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
          </div>
        )}
      </div>
    );
  }
}

export default App;