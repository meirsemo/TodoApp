import React, { useState } from "react";

const Todo = ({title, completed, removeTodoItemProp, editTodoItemProp}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [value, setVlaue] = useState(title);
    const [tempValue, setTempVlaue] = useState(title);
    const [completedState, setCompleted] = useState(completed);

    const handleDivDoubleClick = () => {
        setIsEditing(true); 
    };

    const handleInputKeyDown = (e) => {
        const key = e.keyCode;
        if(key === 13){
            editTodoItemProp({ title: tempValue });
            setVlaue(tempValue);
            setIsEditing(false);
        }
        else if(key ===  27){
            setTempVlaue(value);
            setIsEditing(false);
        }
    };

    const handleButtonClick = () => {
        setCompleted((oldompleted) => {
            const newState = !oldompleted
            editTodoItemProp({ completed: newState });
            return newState;
        });
    };

    return(
        isEditing ?
        (<div className="row">
            <div className="column five wide">
                <div className="ui input fluid">
                    <input 
                        onKeyDown={handleInputKeyDown}
                        autoFocus={true}
                        value={tempValue}
                        onChange={(e) => setTempVlaue(e.target.value)}/>    
                </div>
            </div>
        </div>)
        :
        (<div className="row">
            <div className="column five wide" onDoubleClick={handleDivDoubleClick}>
                <h2 className={"ui header" + (completedState ? " green" : "")}>{value}</h2>    
            </div>
            <div className="column one wide">
                <button 
                    className={"ui button circular icon" + (completedState ? " blue" : " green")}
                    onClick={handleButtonClick}>
                    <i className="check icon"></i>
                </button>
            </div>
            <div className="column one wide">
                <button 
                    className="ui button circular icon red"
                    onClick={removeTodoItemProp}>
                    <i className="remove icon"></i>
                </button>
            </div>
        </div>)
    );
}

export default Todo;