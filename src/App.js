import './App.css';
import { useState, useRef } from 'react';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

const App = () => {

  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
        author,
        content,
        emotion,
        created_date,
        id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  const onDelete = (targetID) => {
    const newDiaryList = data.filter((it)=>it.id !== targetID);
    setData(newDiaryList);
    // console.log({targetID} + "가 삭제됨");
  }

  return (
    <div className="App">
      <DiaryEditor onCreate = {onCreate}/>
      <DiaryList onDelete = {onDelete} diaryList = {data}/>
    </div>
  );
}

export default App;
