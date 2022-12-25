import DiaryItem from "./DiaryItem";

const DiaryList = ({onEdit, onDelete, diaryList}) => {
    
    return (
        <div>
            <h2>일기 리스트</h2>
            <h4>{diaryList.length} 개의 일기가 있습니다</h4>

            {
                diaryList.map((it)=>(
                        <DiaryItem onEdit={onEdit} onDelete={onDelete} key={it.id} {...it}/>
                ))
            }
        </div>
    );
};

DiaryList.defaultProps={
    diaryList:[],
};

export default DiaryList;