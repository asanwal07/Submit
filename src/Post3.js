import React, { useState, useEffect } from "react";
import axios from "axios";

const Post3 = ({ post, userId }) => {
      const [comments, setComments] = useState([]);
      const [showComments, setShowComments] = useState(false);

      useEffect(() => {
            if (showComments) {
                  axios
                        .get(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                        .then(response => {
                              setComments(response.data);
                        });
            }
      }, [showComments, post.id]);

      return (
            <div>
                  <h2>{post.title}</h2>
                  <p>{post.body}</p>
                  <button onClick={() => setShowComments(!showComments)}>
                        {showComments ? "Hide" : "Show"} comments
                  </button>
                  {showComments && (
                        <ul>
                              {comments.map(comment => (
                                    <li key={comment.id}>{comment.body}</li>
                              ))}
                        </ul>
                  )}
            </div>
      );
};

export default Post3;
