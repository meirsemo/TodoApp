import React, { useState } from "react";

const Form = ({ addTodo }) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputVlaue = (event) => {
        setInputValue(event.target.value)
    }

    const handleFormSubmit = (e) =>{
        e.preventDefault();
        if(inputValue.trim()){
            addTodo({title: inputValue, completed: false});
        }
        setInputValue("");
    }

    return(
        <form className="ui form" onSubmit={handleFormSubmit}>
            <div className="ui grid center aligned">
                <div className="row">
                    <div className="column five wide">
                        <input 
                            type="text" 
                            placeholder="Enter somthing to do..."
                            value={inputValue}
                            onChange={handleInputVlaue}/>
                    </div>
                    <div className="column one wide">
                        <button
                            type="submit" 
                            className="ui button circular icon green">
                                <i className="plus icon"></i>
                            </button>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default Form;