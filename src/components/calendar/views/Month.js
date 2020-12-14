import React from 'react'
import { getRows,daysOfMont } from '../helpers';

export const Month = ({date,setDate}) => {
    
    const getMonths = ()=>{
        let options=[];
        for (let i = 0; i < 12; i++) {
            options.push(<option value={i}>{daysOfMont(i).name}</option>)
        }
        return options;
    }

    const getYears = ()=>{
        let options=[];
        for (let i = date.year - 50; i <= Number(date.year) + 50 ; i++) {
            options.push(<option value={i}>{i}</option>)
        }
        return options;
    }

    return (
        <>
        <h1>{daysOfMont(date.month).name} {date.year}</h1>
        <select value={date.year} onChange={(e) => setDate({ ...date, year: Number(e.target.value)})}>
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
                {getRows(date)}
            </tbody>
        </table>
    </>
    )
}
