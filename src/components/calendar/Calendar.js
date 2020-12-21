import React, { useState } from 'react'
import { FormTask } from './formTask/FormTask';

import "./calendar.css";
import { Days } from './views/Days';
import { daysOfMont } from './helpers';

export default function Calendar() {

    const init = {
        day: new Date().getDate(),
        month: new Date().getMonth(),
        year: new Date().getFullYear()
    }

    const [date, setDate] = useState(init)

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

    return (
        <>

            <select value={date.year} onChange={(e) => setDate({ ...date, year: Number(e.target.value) })}>
                {getYears()}
            </select>

            <select value={date.month} onChange={(e) => setDate({ ...date, month: Number(e.target.value) })}>
                {getMonths()}
            </select>

            <div
                className="calendar_container"
            >
                <div
                    className="calendar"
                >
                    <div
                        className="calendar_options"
                    >
                        <input
                            type="button"
                            onClick={handlePreviousMont}
                            value={daysOfMont(date.month - 1).name}
                            className="calendar_button"
                        />
                        <input
                            type="button"
                            onClick={() => setDate(init)}
                            value="Hoy"
                            className="calendar_button"

                        />
                        <input
                            type="button"
                            onClick={handleNextMonth}
                            value={daysOfMont(date.month + 1).name}
                            className="calendar_button"

                        />
                    </div>

                    <h3 
                        className="calendar_title"
                    >{daysOfMont(date.month).name} {date.year}</h3>

                    <Days
                        date={date}
                        setDate={setDate}
                    />
                </div>
            </div>
        </>
    )
}
