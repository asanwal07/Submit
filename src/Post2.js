import React, { useState, useEffect } from "react";
import axios from "axios";

function Post2({ post }) {
      const [user, setUser] = useState({});

      useEffect(() => {
            const fetchUser = async () => {
                  const response = await axios.get(
                        `https://jsonplaceholder.typicode.com/users/${post.userId}`
                  );
                  setUser(response.data);
            };
            fetchUser();
      }, [post.userId]);

      return (
            <div>
                  <h2>{post.title}</h2>
                  <p>{post.body}</p>
                  <h3>User Details:</h3>
                  <p>Name: {user.name}</p>
                  <p>Username: {user.username}</p>
                  <p>Email: {user.email}</p>
                  <p>Phone: {user.phone}</p>
                  <p>Website: {user.website}</p>
                  <p>Company Name: {user.company.name}</p>
            </div>
      );
}

export default Post2;
