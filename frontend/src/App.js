import React, { useState, useEffect } from "react";
import todos from "./apis";

import Form from "./components/Form";
import Section from "./components/Section";
import List from "./components/List";

const appTitle = "TO-DO APP";


const App = () => {
    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        (async function (){
            const { data } = await todos.get("/todos");
            setTodoList(data);
        })();

    }, []);

    const addTodo = async(item) => {
        const { data } = await todos.post("/todos", item);
        setTodoList((oldList) => [...oldList, data]);
    }

    const removeTodo = async(id) => {
        await todos.delete(`/todos/${id}`);
        setTodoList((oldList) => oldList.filter((item) => item._id !== id))
    }

    const editTodo = async(id, item) => {
        await todos.put(`/todos/${id}`, item);
    };

    return (
            <div className="ui container center aligned">

                <Section>
                    <h1>{appTitle}</h1>
                </Section>

                <Section>
                    <Form addTodo={addTodo}/>
                </Section>

                <Section>
                    <List 
                        removeTodoListProp={removeTodo} 
                        list={todoList}
                        editTodoListProp={editTodo}/>
                </Section>

            </div>
        )
}

export default App;