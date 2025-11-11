import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { API_BASE } from '../config';
import { apiQuery } from '../api';

export const PostEdit = () => {
    const { id } = useParams();
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        apiQuery<{ post: TPost }>({
            url: `posts/${id}`
        })
            .then(({ post: { content } }) => setContent(content))
            .catch(console.error);
    }, [id]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        fetch(`${API_BASE}/posts/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id, content })
        })
            .then(() => navigate(`/posts/${id}`));
    };

    return (
        <div>
            <h1>Редактирование поста</h1>
            <form onSubmit={handleSubmit}>
                <textarea rows={5} value={content} onChange={e => setContent(e.target.value)} />
                <button type="submit">Сохранить</button>
                <button type="button" onClick={() => navigate(`/posts/${id}`)}>Отмена</button>
            </form>
        </div>
    );
};