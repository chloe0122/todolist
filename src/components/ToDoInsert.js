import React, {useCallback, useState} from 'react';
import './ToDoInsert.css';
import { MdBorderColor } from "react-icons/md";

function ToDoInsert({onInsert})
{
    const [value,setValue] = useState('');

    const onChange = useCallback(e=>{
        setValue(e.target.value);
    },[]);

    const onClick = useCallback((e)=>{
        e.preventDefault();
        //app.js insert 시켜주는 함수
        onInsert(value);
        //value 값을 공백으로 만들어 주는
        setValue('');
    },[onInsert,value]);

    return(
        <form className="ToDoInsert">
            <input value={value} onChange={onChange} type="text" placeholder="할 일을 입력하세요"/>
            <button type="submit" onClick={onClick}>
                <MdBorderColor/>
            </button>
        </form>
    );
}

export default ToDoInsert;
