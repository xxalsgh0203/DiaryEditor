import { useState, useRef} from "react";

const DiaryItem = ({author, content, created_date, emotion, id, onDelete, onEdit}) => {
    
    const [isEdit, setIsEdit] = useState(false);
    const [localContent, setLocalContent] = useState(content);

    const toggleIsEdit = () => setIsEdit(!isEdit);

    const localContentInput = useRef();

    const handleDelete = () => {
        if(window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`))
            onDelete(id);
    }

    const handleEdit = () => {
        setIsEdit(!isEdit);
        if(localContent.length < 5){
            localContentInput.current.focus();
        }

        onEdit(id, localContent);
    }

    const quitEdit = () => {
        setIsEdit(!isEdit);
        setLocalContent(content);
    }

    return <div className="DiaryItem">
        <div className="info">
            <span>작성자 : {author} | 감정점수 : {emotion}</span>
            <br/>
            <span className="data">
                글 작성 시간 : {new Date(created_date).toLocaleDateString()}
            </span>
        </div>
            {
                isEdit ? (
                    <>
                        <textarea 
                            ref={localContentInput} 
                            value={localContent} 
                            onChange={(e)=>setLocalContent(e.target.value)}>
                        </textarea>
                        <br />
                        <button onClick={quitEdit}>취소하기</button>
                        <button onClick={handleEdit}>수정 완료</button>
                    </>
                ) : (
                    <>
                        <div className="content">{content}</div>
                        <button onClick={handleDelete}>삭제하기</button>
                        <button onClick={toggleIsEdit}>수정하기</button>
                    </>)
            }
            
    </div>
};

export default DiaryItem;