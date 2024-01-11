import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

function Write({ addPost }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('공지');
  const navigate = useNavigate(); // useNavigate 초기화

    // 제출 버튼 클릭 시 실행되는 함수

  const handleSubmit = () => {
    addPost({ title, content, category }); // addPost 함수를 통해 새 게시글 추가
     // 폼 초기화
    setTitle('');
    setContent('');
    setCategory('공지');
    navigate('/'); // 작성 후 Board 페이지로 이동
  };

  return (
    <div style={{ width: '80%', margin: 'auto' }}>
      <h1>글 작성</h1>
      <div style={{ margin: '20px 0' }}>
        <label>제목</label>
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          style={{ width: '100%' }} 
        />
      </div>
      <div style={{ margin: '20px 0' }}>
        <label>내용</label>
        <textarea 
          value={content} 
          onChange={(e) => setContent(e.target.value)} 
          style={{ width: '100%', height: '200px' }} 
        />
      </div>
      <div style={{ margin: '20px 0' }}>
        <label>카테고리</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="공지">공지</option>
          <option value="일반">일반</option>
        </select>
      </div>
      <div style={{ margin: '20px 0' }}>
        <button onClick={handleSubmit}>작성하기</button>
        <Link to="/">
        <button>목록</button>
        </Link>
      </div>
    </div>
  );
}

export default Write;
