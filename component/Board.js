import React from 'react';
import { Link } from 'react-router-dom';
import './Board.css'; 

function Board({ posts }) {
    // App.js에서 전달받은 posts 배열을 사용하여 게시글 목록을 렌더링

  return (
    <div className="board" style={{ width: '80%', margin: '0 auto' }}>
      <div className="board-header" style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', borderBottom: '1px solid #ddd', backgroundColor: '#f8f8f8', fontWeight: 'bold' }}>
        <span>글 번호</span>
        <span>글 목록</span>
        <span>글 제목</span>
        <span>조회수</span>
      </div>
            {posts.map(post => (
        <Link to={`/view/${post.id}`} key={post.id} className='board-link'>
          <div className={`board-post ${post.category === '공지' ? 'notice' : ''}`}>
            <span>{post.id}</span>
            <span>{post.category}</span>
            <span>{post.title}</span>
            <span>{post.views}</span>
          </div>
        </Link>
      ))}

      
      <div className="buttonarea">
        <Link to="/write">
            <button className="postwwritebutton">글 작성</button>
        </Link>
      </div>

       
    </div>
  );
}

export default Board;
