import React, { useEffect, useState } from 'react'
import { FormTask } from './formTask/FormTask';

import "./calendar.css";
import { Days } from './views/Days';
import { daysOfMont } from './helpers';
import { Month } from './views/Month';

export default function Calendar() {

    const initDateState = {
        day: new Date().getDate(),
        month: new Date().getMonth(),
        year: new Date().getFullYear()
    }

    const [date, setDate] = useState(initDateState)

    const initViewState = {
        type: "days"
    }

    const [view, setView] = useState(initViewState)

    const changeViewToOut = (month, year) => {

        setDate({
            ...date,
            month: month,
            year: year
        })

        setView(initViewState)

    }

    const changeViewToIn = () => {
        if (view.type === "days") {
            setView({
                type: "month"
            })
        }
    }

    const setNextMonth = (day, month, year) => {
        setDate({
            day,
            month,
            year
        })
    }


    const handleNextMonth = ({ type }, { day, month, year }) => {

        let nextMonth = date.month + 1, nextYear = Number(date.year) + 1

        if (type === "days") {

            if (nextMonth > 11) {
                setNextMonth(day, 0, nextYear)
            } else {
                setNextMonth(day, nextMonth, year)
            }
        } else if (type === "month") {
            setNextMonth(day, month, nextYear)
        }
    }

    const setPreviousMonth = (day, month, year) => {
        setDate({
            day,
            month,
            year
        })
    }

    const handlePreviousMont = ({ type }, { day, month, year }) => {
        let previousMonth = month - 1, previousYear = year - 1;

        if (type === "days") {
            if (previousMonth < 0) {

                setPreviousMonth(day, 11, previousYear)
            } else {
                setPreviousMonth(day, previousMonth, year)
            }
        } else if (type === "month") {
            setPreviousMonth(day, month, previousYear)
        }
    }

    const titleView = ({ type }) => {
        if (type === "days") {
            return `${daysOfMont(date.month).name} ${date.year}`
        } else if (type === "month") {
            return `${date.year}`
        }
    }

    return (
        <>

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
                            onClick={() => handlePreviousMont(view, date)}
                            value="<"
                            className="calendar_button"
                        />
                        <input
                            type="button"
                            onClick={() => setDate(initDateState)}
                            value="Hoy"
                            className="calendar_button"

                        />
                        <input
                            type="button"
                            onClick={() => handleNextMonth(view, date)}
                            value=">"
                            className="calendar_button"

                        />
                    </div>

                    <h3
                        className="calendar_title"
                        onClick={changeViewToIn}
                    >
                        {titleView(view)}
                    </h3>

                    {
                        view.type === "days"
                            ?
                            <Days
                                date={date}
                                setDate={setDate}
                            />
                            :
                            null
                    }
                    {
                        view.type === "month"
                            ?
                            <Month
                                changeViewToOut={changeViewToOut}
                                date={date}
                            />
                            :
                            null
                    }
                </div>
            </div>
        </>
    )
}
