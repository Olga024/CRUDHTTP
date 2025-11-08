import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export const PostEdit = () => {
    const { id } = useParams();
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:7070/posts/${id}`)
            .then(response => response.json())
            .then(data => setContent(data.content));
    }, [id]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        fetch(`http://localhost:7070/posts/${id}`, {
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
                <textarea value={content} onChange={e => setContent(e.target.value)} />
                <button type="submit">Сохранить</button>
                <button type="button" onClick={() => navigate(`/posts/${id}`)}>Отмена</button>
            </form>
        </div>
    );
};