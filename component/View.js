import React from 'react';
import { useParams , Link} from 'react-router-dom';
import './View.css';


function View() {
  let { postId } = useParams();

  // 임시 게시글 데이터
  // 실제로는 이 부분을 백엔드에서 데이터를 불러오는 로직으로 대체해야 합니다.
  const post = {
    id: postId,
    title: '게시글 제목 예시',
    author: '작성자',
    content: '게시글 내용이 여기에 들어갑니다. 여기에는 게시글의 상세한 내용이 표시됩니다.'
  };

  return (
    <div style={{ width: '80%', margin: '20px auto' }}>
      <h1>{post.title}</h1> {/* 게시글 제목 */}
      <h3>작성자: {post.author}</h3> {/* 게시글 작성자 */}
      <p style={{ fontSize: '18px' }}>{post.content}</p> {/* 게시글 내용 */}
      <div style={{ marginTop: '20px' }}>
        <button style={{ marginRight: '10px' }}>수정</button> {/* 수정 버튼 */}
        <button style={{ marginRight: '10px' }}>삭제</button> {/* 삭제 버튼 */}
        <Link to="/">
        <button>목록</button> {/* 목록 버튼 */}
        </Link>
      </div>
    </div>
  );
}

export default View;
