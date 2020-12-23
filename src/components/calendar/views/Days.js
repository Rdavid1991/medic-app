import React, { useState } from 'react'
import { getRows, daysOfMont } from '../helpers';

export const Days = ({ date, setDate }) => {

    const createTask = (day, month, year) => {
        setDate({ day, month, year });
    }

    return (
        <>
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
        </>
    )
}
