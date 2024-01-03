import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Board from './component/Board';
import Write from './component/Write';
import View from './component/View';

function App() {  // 게시글 목록을 상태로 관리
  const [posts, setPosts] = useState([ { id: 1, category: '공지', title: '첫 번째 게시글', views: 100 },
  { id: 2, category: '공지', title: '첫 번째 게시글', views: 100 },
  { id: 3, category: '일반', title: '두 번째 게시글', views: 50 },
  { id: 4, category: '일반', title: '두 번째 게시글', views: 50 },
  { id: 5, category: '일반', title: '두 번째 게시글', views: 50 }]);

  // 새 게시글을 상태에 추가하는 함수
  const addPost = (newPost) => {
    newPost.id = posts.length + 1; // 고유 ID 설정
    newPost.views = 0;             // 조회수 초기화
    setPosts([...posts,newPost]); // 새 게시글을 상태에 추가
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Board posts={posts} />} />
        <Route path="/write" element={<Write addPost={addPost} />} />
        <Route path="/view/:postId" element={<View posts={posts} />} />
      </Routes>
    </Router>
  );
}

export default App;
