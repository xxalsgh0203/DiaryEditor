import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

const App = () => {

  const dummyList = [
    {
      id : 1,
      author: "Minho Kim",
      content: "hello java",
      emotion: "happy",
      created_date: new Date().getTime(),
    },
    {
      id : 2,
      author: "Chris",
      content: "hello React",
      emotion: "happy",
      created_date: new Date().getTime(),
    },
    {
      id : 3,
      author: "Ronaldo Kim",
      content: "hello C++",
      emotion: "sad",
      created_date: new Date().getTime(),
    },
  ];

  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diarylist={dummyList}/>
    </div>
  );
}

export default App;
