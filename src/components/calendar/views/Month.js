import React, { createElement, useState } from 'react'
import { daysOfMont } from '../../../helpers';

export const Month = () => {
    const [date, setDate] = useState({
        month: new Date().getMonth(),
        year: new Date().getFullYear()
    })

    const getRows = () => {
        let td = [], tr = [], count = 0, countDay = 0;
        for (let i = 0; i < 6; i++) {
            td = []
            for (let j = 0; j < 7; j++) {
                count++
                let day = new Date(date.year, date.month).getDay()
                if (count > day && count - day <= daysOfMont(date.month).value) {
                    countDay++
                    td.push(createElement('td', null, countDay))
                } else {
                    td.push(createElement('td', null, ""))
                }
            }
            tr.push(createElement('tr', null, [td]))
        }
        return tr;
    }

    const getMonths = ()=>{
        let options=[];
        for (let i = 0; i < 12; i++) {
            options.push(<option value={i}>{daysOfMont(i).name}</option>)
        }
        return options;
    }

    const getYears = ()=>{
        let options=[];
        for (let i = date.year - 99; i <= date.year ; i++) {
            options.push(<option value={i}>{i}</option>)
        }
        return options;
    }

    return (
        <>
        <select value={date.year} onChange={(e) => setDate({ ...date, year: e.target.value })}>
            {getYears()}
        </select>

        <select value={date.month} onChange={(e) => setDate({ ...date, month: e.target.value })}>
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
                {getRows()}
            </tbody>
        </table>
    </>
    )
}
