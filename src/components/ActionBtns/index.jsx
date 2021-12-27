import {Wrapper} from './ActionBtns.styles';


const ActionBtns = ({btns}) =>{

    
    return(
        <Wrapper>

        {
            btns.map((btn,index)=>  <button key={index} className="junior" onClick={()=>btn.action()}>{btn.title}</button> )
        }

            {/* <button className="junior" onClick={()=>archiveAll()}>Archive</button>
            <button className="primary" onClick={()=> deleteAll()}>Delete</button> */}
        </Wrapper>
    )

}

export default ActionBtns;