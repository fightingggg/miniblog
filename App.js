import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Board from './component/Board';
import Write from './component/Write';
import View from './component/View';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, category: '공지', title: '첫 번째 게시글', content: '내용', views: 100 },
    // 초기 게시글 데이터...
  ]);

  const addPost = (newPost) => {
    setPosts([newPost, ...posts]); // 새 게시글을 목록의 앞에 추가
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Board posts={posts} />} />
        <Route path="/write" element={<Write addPost={addPost} />} />
        <Route path="/view/:postId" element={<View />} /> {/* 이 줄을 추가하세요 */}
      </Routes>
    </Router>
  );
}

export default App;
