import { useRef, useState } from "react";

const DiaryEditor = ({onCreate}) => {

    const authorInput = useRef();
    const contentInput = useRef();

    const [state, setState] = useState({
        author: "",
        content: "",
        emotion: "happy",
    });

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value,
        });
    };

    const handleSubmit = () => {
        if(state.author.length < 1){
            authorInput.current.focus();
            return;
        }
        if(state.content.length < 1){
            contentInput.current.focus();
            return;
        }

        onCreate(state.author, state.content, state.emotion);

        state.author = "";
        state.content = "";
        state.emotion = "happy";

        alert('저장완료!');
    }

    return (
        <div className="DiaryEditor">
            <h2>오늘의 일기</h2>
            <div>
                <input name="author" value={state.author} onChange={handleChange} ref={authorInput}/>
            </div>
            
            <div>
                <textarea name="content" value={state.content} onChange={handleChange} ref={contentInput}/>
            </div>
            <div>
                <select name="emotion" value={state.emotion} onChange={handleChange}>
                    <option value="happy">happy</option>
                    <option value="sad">sad</option>
                    <option value="mad">mad</option>
                    <option value="gloomy">gloomy</option>
                    <option value="vigorous">vigorous</option>
                </select>
            </div>
            <div>
                <button onClick={handleSubmit}>저장하기</button>
            </div>
        </div>
    );
}

export default DiaryEditor;