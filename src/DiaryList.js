import DiaryItem from "./DiaryItem";

const DiaryList = ({diarylist}) => {
    
    return (
        <div>
            <h2>일기 리스트</h2>
            <h4>{diarylist.length} 개의 일기가 있습니다</h4>

            {
                diarylist.map((it)=>(
                        <DiaryItem key={it.id} {...it}/>

                ))
            }
        </div>
    );
};

DiaryList.defaultProps={
    diarylist:[],
};

export default DiaryList;