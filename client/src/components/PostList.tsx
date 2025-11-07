import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

type TPost = {
    id: number;
    content: string;
    created: number;
};

export const PostList = () => {
    const [posts, setPosts] = useState<TPost[]>([]);

    useEffect(() => {
        fetch('http://localhost:7070/posts')
            .then(response => response.json())
            .then(data => setPosts(data));
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