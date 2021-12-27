import React,{useState} from 'react';

const useSelect = () =>{
    const [select,setSelect] = useState([]);

    const resetSelect = () => setSelect([]);

    const toggleSelectAll = (docid,tasks) => {
        const allSelects = [...select];
        const selectIndex = allSelects.findIndex(select=> select.selectid === docid);
        if(selectIndex != -1){
            if(allSelects[selectIndex].taskids.length === tasks.length){
                const filteredSelect =  allSelects.filter(select=> select.selectid !== docid);
                setSelect(filteredSelect);
            }else{
                const taskids = tasks.map(task=> task._id);
                allSelects[selectIndex].taskids = taskids;
                setSelect(allSelects);
            }
            

        }else{
            const taskids = tasks.map(task=> task._id);
            const newSelect = {selectid:docid,taskids}

            setSelect(prevSelects => [
                ...prevSelects,
                newSelect
            ]);
        }
        
    };

    const toggleSelect = (docid,taskid) =>{
        const allSelects = [...select];
        const selectIndex = allSelects.findIndex(select=> select.selectid === docid);
        if(selectIndex != -1){
            //check if taskid exist in select taskids
            const taskindex = allSelects[selectIndex].taskids.findIndex(task => task === taskid);
            if(taskindex > -1) allSelects[selectIndex].taskids.splice(taskindex, 1);
            else allSelects[selectIndex].taskids.push(taskid);
        }else{
            const newSelect = {selectid: docid, taskids:[taskid]}
            allSelects.push(newSelect);
        }

        setSelect(allSelects);
    }

    const isSelected = (docid,taskid) =>{
        const allSelects = [...select];
        const selectIndex = allSelects.findIndex(select=> select.selectid === docid);
        if(selectIndex === -1) return false;
        else{
            return allSelects[selectIndex].taskids.some(id=> id === taskid);
        }
    }


    return {resetSelect,toggleSelectAll,toggleSelect,isSelected,select,setSelect}
}

export default useSelect;