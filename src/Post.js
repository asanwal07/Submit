import React, { useState, useEffect } from 'react';

const Posts = () => {

      fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
      const [posts, setPosts] = useState([]);

      useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/posts')
                  .then(response => response.json())
                  .then(data => setPosts(data))
                  .catch(error => console.error(error));
      }, []);

      return (
            <ul>
                  {posts.map(post => (
                        <li key={post.id}>
                              <span>Id:{post.userId}</span>
                              <span> P.Id:{post.id}</span>
                              {/* <h2>{post.id}</h2> */}
                              <h3>{post.title}</h3>
                              <p>{post.body}</p>
                        </li>
                  ))}
            </ul>
      );
};

export default Posts;


