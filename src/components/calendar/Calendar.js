import React, { useState } from 'react'

import "./calendar.css";
import { Month } from './views/Month';

export default function Calendar() {

    const [date, setDate] = useState({
        month: new Date().getMonth(),
        year: new Date().getFullYear()
    })

    const handleNextMonth = () => {

        let nextMonth = date.month + 1

        if (nextMonth > 11) {
            let nextYear = Number(date.year) + 1

            setDate({
                year: nextYear,
                month: 0
            })
        } else {
            setDate({
                ...date,
                month: nextMonth
            })
        }
    }

    const handlePreviousMont = () => {
        let previousMonth = date.month - 1

        if (previousMonth < 0) {
            let previousYear = date.year - 1

            setDate({
                year: previousYear,
                month: 11
            })
        } else {
            setDate({
                ...date,
                month: previousMonth
            })
        }
    }


    return (
        <>
            <Month
                date={date}
                setDate={setDate}
            />
            <button
                onClick={handlePreviousMont}
            >
                anterior
            </button>
            <button
                onClick={handleNextMonth}
            >
                Siguiente
            </button>

        </>
    )
}
