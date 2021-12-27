import {Wrapper} from './TodoList.styles';
import Card from '../Card';


const TodoList = ({todos,todo,archiveAll,toggleSelectAll,toggleSelect,isSelected,showdate}) =>{
    const {_id,date:startDate,tasks} = todo;
    // console.log({tasks,startDate});
    return(
        
        <Wrapper>
            <div className="action">
                <span>{tasks.length > 0 && startDate}</span>
                <div>
                    select All
                    <input type="checkbox" name="" id=""   onClick={()=>toggleSelectAll(_id,tasks) }/>
                </div>
            </div>
            <div className="tasks">
                {
                    tasks ?  
                    (tasks.map((task,index)=><Card todos={todos} key={index} task={task} docid={_id} isSelected={isSelected} toggleSelect={toggleSelect} archiveAll={archiveAll} showdate={showdate} />))
                    : 'Loading tasks...'
                }
            </div>
        </Wrapper>
    )

}

export default TodoList;