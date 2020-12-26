import React, { useEffect, useState } from 'react';
import { daysName, daysOfMont } from '../helpers/days';

export const FormTask = (props) => {

    const state = props;

    const [task, setTask] = useState({
        date : '',
        title: ''
    });

    useEffect(() => {
        handleTask({
            target: {
                name : 'date',
                value: `${state.year}-${state.month + 1}-${state.day}`
            }
        });
        
    }, [task.title]);

    const handleTask = ({target})=>{
        setTask({
            ...task,
            [target.name]: target.value
        });
    };

    const handleSave = ()=>{
        localStorage.setItem('task', JSON.stringify(task));
    };

    return (
        <div>
            <h1>
                {
                    `${daysName(new Date(
                        state.year,
                        state.month,
                        state.day
                    ).getDay())} ${state.day} de ${daysOfMont(state.month).name} de ${state.year}`
                }
            </h1>
            <label>Input</label>
            <input
                type="text"
                readOnly={true}
                value={`${state.year}-${state.month + 1}-${state.day}`}
            />
            <input
                type="text"
                name="title"
                value={task.title}
                onChange={handleTask}
            />

            <button
                onClick={handleSave}
            >
                Guardar
            </button>
        </div>
    );
};
