import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

type TPost = {
    id: number;
    content: string;
    created: number;
};

export const PostView = () => {
    const { id } = useParams();
    const [post, setPost] = useState<TPost | null>(null);
    const history = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:7070/posts/${id}`)
            .then(response => response.json())
            .then(data => setPost(data));
    }, [id]);

    const handleDelete = () => {
        fetch(`http://localhost:7070/posts/${id}`, {
            method: 'DELETE'
        })
            .then(() => history.push('/'));
    };

    if (!post) return <div>Загрузка...</div>;

    return (
        <div>
            <h1>Просмотр поста</h1>
            <p>{post.content}</p>
            <button onClick={handleDelete}>Удалить</button>
            <Link to={`/posts/${id}/edit`}>Редактировать</Link>
        </div>
    );
};