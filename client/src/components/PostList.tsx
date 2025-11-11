import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API_BASE } from '../config';
import { apiQuery } from '../api';

type TPost = {
    id: number;
    content: string;
    created: number;
};

export const PostList = () => {
    const [posts, setPosts] = useState<TPost[]>([]);

    useEffect(() => {
        /* 
          fetch(`${API_BASE}/posts`)
             .then(response => response.json())
             .then(data => setPosts(data));
        */
        apiQuery({
                   url: `posts`
               })
                   .then(data => setPosts(data))
                   .catch(console.error);
    }, []);

    return (
        <div>
            <h1>Список постов</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <Link to={`/posts/${post.id}`}>{post.content}</Link>
                    </li>
                ))}
            </ul>
            <Link to="/posts/new">Создать пост</Link>
        </div>
    );
};