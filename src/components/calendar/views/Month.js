import React, { useState } from 'react'
import { getRows, daysName, daysOfMont } from '../helpers';

export const Month = ({ date, setDate }) => {

    const [state, setState] = useState({
        day: new Date().getDate(),
        month: new Date().getMonth(),
        year: new Date().getFullYear()
    })

    const getMonths = () => {
        let options = [];
        for (let i = 0; i < 12; i++) {
            options.push(<option value={i}>{daysOfMont(i).name}</option>)
        }
        return options;
    }

    const getYears = () => {
        let options = [];
        for (let i = date.year - 50; i <= Number(date.year) + 50; i++) {
            options.push(<option value={i}>{i}</option>)
        }
        return options;
    }

    const createTask = (day, month, year) => {
        setState({ day, month, year });
    }

    return (
        <>
            <h1>{daysOfMont(date.month).name} {date.year}</h1>
            <select value={date.year} onChange={(e) => setDate({ ...date, year: Number(e.target.value) })}>
                {getYears()}
            </select>

            <select value={date.month} onChange={(e) => setDate({ ...date, month: Number(e.target.value) })}>
                {getMonths()}
            </select>

            <table>
                <thead>
                    <tr>
                        <th>Domingo</th>
                        <th>Lunes</th>
                        <th>Martes</th>
                        <th>Miercoles</th>
                        <th>Jueves</th>
                        <th>Viernes</th>
                        <th>Sabado</th>
                    </tr>
                </thead>
                <tbody>
                    {getRows(date, createTask)}
                </tbody>
            </table>

            <h1>
                {
                    `${daysName(new Date(
                        state.year,
                        state.month,
                        state.day
                    ).getDay())} ${state.day} de ${daysOfMont(state.month).name} de ${state.year}`
                }
            </h1>
        </>
    )
}
