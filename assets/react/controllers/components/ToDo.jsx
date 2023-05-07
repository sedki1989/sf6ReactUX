import axios from 'axios';
import React from 'react';
import { useState, useEffect } from "react";
import AddTodo from './AddTodo'
export default function ToDo() {
    let [toDoList, setToDos] = useState([]);

    let getListToDo = () => {
        axios
        .get('http://127.0.0.1:8000/api/to_dos.json')
        .then((res) => {
            setToDos(res.data);
        })
        .catch((err) => {
            console.error('Error:', err);
        });
    }
    useEffect(() => {
        getListToDo();
    }, []);

    let addToDo = (data) => {
        axios
        .post('http://127.0.0.1:8000/api/to_dos.json', {'description' : data})
        .then((res) => {
            getListToDo();
        })
        .catch((err) => {
            console.error('Error:', err);
        });
    }

    let deleteToDo = (id) => {
        axios
            .delete(`http://127.0.0.1:8000/api/to_dos/${id}`)
            .then((res) => {
                getListToDo();
            })
            .catch((err) => {
                console.error('Error:', err);
            });
    }

    let changeStateToDo = (id, state) => {
        console.log(id)
        let toDo = toDoList.find( (toDo) => {
            return toDo.id === id;
        })
        toDo.state = state;
        axios
            .put(`http://127.0.0.1:8000/api/to_dos/${id}`, toDo)
            .then((res) => {
                getListToDo();
            })
            .catch((err) => {
                console.error('Error:', err);
            });
    }
    return (
        <div className="h-1/5 w-full flex items-center justify-center bg-teal-lightest font-sans">
            <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-max">
                <AddTodo addToDo={addToDo}/>
                <div>
                    {toDoList.map( toDo =>
                        <div key={toDo.id} className="flex mb-4 items-center">
                            <p className="w-full text-grey-darkest">{toDo.description}</p>
                            {toDo.state === 'done'
                            ? <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded text-green border-green" onClick={() => changeStateToDo(toDo.id, 'new')}>Done</button>
                            : <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded text-grey border-grey" onClick={() => changeStateToDo(toDo.id, 'done')}>Not Done</button>
                            }
                            <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-500" onClick={() => deleteToDo(toDo.id)}>Remove</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
