import React,{ useState } from "react";
import './Hook.css';
import EdiText from "react-editext";

let nextId = 0;

const Hook = () => {
    const [value, setValue] = useState('');
    const [list, setList] = useState([]);

    const onSubmitChange = () =>{
        if(value === '') {
            alert('Enter a value!')
        } else {
        setList([
            ...list, { id:nextId++, value:value+' '+new Date().toLocaleString()}
        ]);
        setValue('');
        }
    }

    const onEnterKeyDown = (event) =>{
        if (event.keyCode === 13 ){
            onSubmitChange();
        }
    }

    return(
        <div className="ml2">
            <input 
                required
                className="w-75 pa2 ba bw1 br2 f5"
                id="enter" 
                value={value} 
                onChange={e => setValue(e.target.value)} 
                placeholder="Enter Somethings"
                onKeyDown={onEnterKeyDown}
             />
            <button 
                className="w-20 pa2 br2 f5 white bg-light-blue shadow-5 main-bg"
                onClick={onSubmitChange}
            >
                Add Task
            </button>
            <ul className="ul-st">
                {list.map(msg => (
                    <li className="f5 pa2 br2 display-box" key={msg.id}>
                        <EdiText 
                            submitOnEnter 
                            cancelOnEscape 
                            saveButtonContent="Change" 
                            cancelButtonContent="Discard" 
                            type="text" value={msg.value} 
                            onSave={(val) => {
                                msg.value = val+' [edited'+new Date().toLocaleString()+' ]'
                            }}
                        />
                        <button 
                            className="clear" 
                            onClick={() => {
                                setList(
                                    list.filter(a => a.id !== msg.id)
                                );
                            }}
                        >✖️</button>
                    </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Hook;