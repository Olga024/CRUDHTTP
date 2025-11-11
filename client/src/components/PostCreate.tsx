import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiQuery } from '../api';

export const PostCreate = () => {
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        apiQuery({
            url: `posts`,
            method: 'POST',
            payload: { id: 0, content },
        })
            .then(() => navigate('/'))
            .catch(console.error)
            .finally(() => navigate('/'));
    };

    return (
        <div>
            <h1>Создание поста</h1>
            <form onSubmit={handleSubmit}>
                <textarea value={content} onChange={e => setContent(e.target.value)} />
                <button type="submit">Опубликовать</button>
                <button type="button" onClick={() => navigate('/')}>Отмена</button>
            </form>
        </div>
    );
};