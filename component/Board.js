import React from 'react';
import { Link } from 'react-router-dom';
import './Board.css';

function Board() {
  // 게시글 데이터를 나타내는 예시 배열
  const posts = [
    { id: 1, category: '공지', title: '첫 번째 게시글', views: 100 },
    { id: 2, category: '공지', title: '첫 번째 게시글', views: 100 },
    { id: 3, category: '일반', title: '두 번째 게시글', views: 50 },
    { id: 4, category: '일반', title: '두 번째 게시글', views: 50 },
    { id: 5, category: '일반', title: '두 번째 게시글', views: 50 },

    // 여기에 더 많은 게시글을 추가할 수 있습니다.
  ];

  return (
    <div className="board" style={{ width: '80%', margin: '0 auto' }}>
      <div className="board-header" style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', borderBottom: '1px solid #ddd', backgroundColor: '#f8f8f8', fontWeight: 'bold' }}>
        <span>글 번호</span>
        <span>글 목록</span>
        <span>글 제목</span>
        <span>조회수</span>
      </div>
      {posts.map(post => (
        <Link to={`/view/${post.id}`} key={post.id} style={{ textDecoration: 'none', color: 'black' }}>
          <div className="board-post" style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            padding: '10px', 
            borderBottom: '1px solid #ddd', 
            backgroundColor: post.category === '공지' ? '#f5f5dc' : 'white'  // 조건부 스타일링
          }}>
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
