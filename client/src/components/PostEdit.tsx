import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export const PostEdit = () => {
    const { id } = useParams();
    const [content, setContent] = useState('');
    const history = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:7070/posts/${id}`)
            .then(response => response.json())
            .then(data => setContent(data.content));
    }, [id]);

    const handleSave = () => {
        fetch(`http://localhost:7070/posts/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id, content })
        })
            .then(() => history.push(`/posts/${id}`));
    };

    return (
        <div>
            <h1>Редактирование поста</h1>
            <textarea value={content} onChange={e => setContent(e.target.value)} />
            <button onClick={handleSave}>Сохранить</button>
            <button onClick={() => history.push(`/posts/${id}`)}>Отмена</button>
        </div>
    );
};