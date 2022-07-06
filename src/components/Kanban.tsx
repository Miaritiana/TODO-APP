import React, { useState } from 'react';
import './style.css'

export const Kanban:React.FC = () => {
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [selected, setSelected] = useState("todo");
    const [todoTask, setTodoTask] = useState<string[]>([]);
    const [doingTask, setDoingTask] = useState<string[]>([]);
    const [doneTask, setDoneTask] = useState<string[]>([]);
    return (
       <>
        <div className="container">
            <div className="forms">
                <form>
                    <label className="titleInput">Title:<br/> 
                        <input type="text" className="input" name = "Tilte" value={title} onChange = {(e) => {setTitle(e.target.value)}}/>
                    </label><br/>
                    <br/>
                    <label className="descriptionInput">Description:<br/> 
                        <input type="text" className="input" name = "Description" value={description} onChange = {(e) => {setDescription(e.target.value)}} />
                    </label><br/>
                    <br/>
                    <label>Status:
                        <select value={selected} onChange={(e) => {setSelected(e.target.value)}}>
                            <option value="todo">todo</option>
                            <option value="doing">doing</option>
                            <option value="done">done</option>
                        </select>
                        <input className="button" type="button" value="Update" onClick={(e) =>{
                            e.preventDefault();
                            if(selected === "todo"){
                                setTodoTask([title,description]);
                            }
                            if(selected === "doing"){
                                setDoingTask([title,description]);
                            }
                            if(selected === "done"){
                                setDoneTask([title,description]);
                            }                           
                            setTitle("");
                            setDescription("");
                        }
                        } />
                    </label><br/>
                </form>
            </div>
            <div className="flexCard">
                <div className="items">
                    <h2>TO DO</h2>
                    <hr/>
                    <div className="issues" onClick={(e) => {
                            e.preventDefault();
                            setTitle(todoTask[0]);
                            setDescription(todoTask[1]);
                            setSelected("todo")
                            setTodoTask([])
                        }}>
                           <p><strong>{todoTask[0]}</strong><br/>{todoTask[1]}</p> 
                    </div>
                </div>
                <div className="items">
                    <h2>DOING</h2>
                    <hr/>
                    <div className="issues" onClick={(e) => {
                        e.preventDefault();
                        setTitle(doingTask[0]);
                        setDescription(doingTask[1]);
                        setSelected("doing");
                        setDoingTask([])
                    }}>
                        <p><strong>{doingTask[0]}</strong><br/>{doingTask[1]}</p>
                         
                    </div>
                </div>
                <div className="items">
                    <h2>DONE</h2>
                    <hr/>
                    <div className="issues" onClick={(e) => {
                        e.preventDefault();
                        setTitle(doneTask[0]);
                        setDescription(doneTask[1]);
                        setSelected("done");
                        setDoneTask([]);
                    }}>
                        <p><strong>{doneTask[0]}</strong><br/>{doneTask[1]}</p>
                    </div>
                </div>
            </div>
        </div>
       </>
    );
}

