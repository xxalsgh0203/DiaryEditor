import { useState } from "react";

const DiaryEditor = () => {

    const [state, setState] = useState({
        author: "",
        content: "",
    });

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value,
        });
        console.log(state.author);
        console.log(state.content);
    };

    return (
        <div className="DiaryEditor">
            <h2>오늘의 일기</h2>
            <div>
                <input name="author" value={state.author} onChange={handleChange} />
            </div>
            
            <div>
                <textarea name="content" value={state.content} onChange={handleChange}/>
            </div>
        </div>
    );
}

export default DiaryEditor;