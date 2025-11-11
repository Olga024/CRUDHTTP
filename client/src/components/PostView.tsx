import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { apiQuery } from '../api';

export const PostView = () => {
    const { id } = useParams();
    const [post, setPost] = useState<TPost | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        apiQuery<{ post: TPost }>({ url: `posts/${id}` })
            .then(({ post }) => {
                setPost(post);
            })
            .catch(console.error);
    }, [id]);

    const handleDelete = () => {
        apiQuery({
            url: `posts/${id}`,
            method: 'DELETE'
        })
            .then(() => navigate('/'))
            .catch(console.error);
    };

    if (!post) return <div>Загрузка...</div>;

    return (
        <div>
            <h1><Link to={`/posts`}>←</Link>Просмотр поста</h1>
            <p>{post.content}</p>
            <button onClick={handleDelete}>Удалить</button>
            <Link to={`/posts/${id}/edit`}>Редактировать</Link>
        </div>
    );
};