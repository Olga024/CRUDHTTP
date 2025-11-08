import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';

export const PostCreate = () => {
    const [content, setContent] = useState(''); 
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        fetch('http://localhost:7070/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: 0, content })
        })
            .then(() => navigate('/'));
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