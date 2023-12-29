import React from 'react';
import { useParams } from 'react-router-dom';

function View() {
  let { postId } = useParams();

  return (
    <div style={{ width: '80%', margin: '20px auto' }}>
      <h2>게시글 상세보기</h2>
      <p>게시글 ID: {postId}</p>
      {/* 여기에 추가적인 게시글 상세 정보를 불러와서 표시할 수 있습니다. */}
    </div>
  );
}

export default View;
