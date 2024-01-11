import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

function View({ posts,deletePost  }) {
  let { postId } = useParams();// URL 파라미터에서 postId 추출
  const post = posts.find(p => p.id === parseInt(postId)); // postId에 해당하는 게시글 찾기
  
  // 게시글 삭제////
  const navigate = useNavigate();
  const handleDelete = () => {
    deletePost(post.id);
    navigate('/');
  };
  // 게시글 삭제////
  return (
    
    <div style={{ width: '80%', margin: '20px auto' }}>
    <h1>{post.title}</h1> {/* 게시글 제목 */}
    <h3>작성자: {post.author}</h3> {/* 게시글 작성자 */}
    <p>게시글: {post.id}</p>
    <p style={{ fontSize: '18px' }}>{post.content}</p> {/* 게시글 내용 */}
    <div style={{ marginTop: '20px' }}>
      <button style={{ marginRight: '10px' }}>수정</button> {/* 수정 버튼 */}
      <button onClick={handleDelete} style={{ marginRight: '10px' }}>삭제</button> {/* 삭제 버튼 */}
      <Link to="/">
      <button>목록</button> {/* 목록 버튼 */}
      </Link>
    </div>
  </div>
  );
}

export default View;
