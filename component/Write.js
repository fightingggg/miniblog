import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Write() {
  const [title, setTitle] = useState(''); // 제목 상태
  const [content, setContent] = useState(''); // 내용 상태
  const [category, setCategory] = useState('공지'); // 카테고리 상태

  const handleSubmit = () => {
    // 여기에 글 작성 로직을 추가할 수 있습니다.
    console.log({ title, content, category });
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
