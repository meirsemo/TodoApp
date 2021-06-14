import React from "react";
import Todo from "./Todo";

const List = ({ list, removeTodoListProp, editTodoListProp}) => {
    const renderdList = list.map(
        (item) => (
            <Todo 
                title={item.title} 
                completed={item.completed} 
                key={item.title} 
                removeTodoItemProp={() => removeTodoListProp(item._id)}
                editTodoItemProp={(updatedItem) => editTodoListProp(item._id, updatedItem)}/>
        )
    );
    return(
        <div className="ui grid center aligned">
            {renderdList}
        </div>
    );
}

export default List;