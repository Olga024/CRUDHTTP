import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import { PostCreate } from './components/PostCreate'
import { PostEdit } from './components/PostEdit'
import { PostList } from './components/PostList'
import { PostView } from './components/PostView'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/posts/new" element={<PostCreate />} />
        <Route path="/posts/:id" element={<PostView />} />
        <Route path="/posts/:id/edit" element={<PostEdit />} />
      </Routes>
    </Router>
  )
}

export default App
