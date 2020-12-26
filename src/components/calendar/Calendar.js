import "./styles/calendar.scss";
import React, { useState } from 'react';
import { DaysScreen } from './components/days/DaysScreen';
import { MonthScreen } from './components/month/MonthScreen';
import { months } from './helpers/general';
import { Modal } from "./components/modal/Modal";

export default function Calendar() {

    const initDateState = {
        day  : new Date().getDate(),
        month: new Date().getMonth(),
        year : new Date().getFullYear()
    };
    
    const initViewState = {
        type: "days"
    };

    const initialModalState = false;

    const [date, setDate] = useState(initDateState);

    const [view, setView] = useState(initViewState);

    const [modal, setModal] = useState(initialModalState);

    const changeViewToOut = (month, year) => {

        console.log(month);

        setDate({
            ...date,
            month: month,
            year : year
        });

        setView(initViewState);

    };

    const changeViewToIn = () => {
        if (view.type === "days") {
            setView({
                type: "month"
            });
        }
    };

    const setNextMonth = (day, month, year) => {
        setDate({
            day,
            month,
            year
        });
    };

    const handleNextMonth = ({ type }, { day, month, year }) => {

        let nextMonth = date.month + 1, nextYear = Number(date.year) + 1;

        if (type === "days") {

            if (nextMonth > 11) {
                setNextMonth(day, 0, nextYear);
            } else {
                setNextMonth(day, nextMonth, year);
            }
        } else if (type === "month") {
            setNextMonth(day, month, nextYear);
        }
    };

    const setPreviousMonth = (day, month, year) => {
        setDate({
            day,
            month,
            year
        });
    };

    const handlePreviousMont = ({ type }, { day, month, year }) => {
        let previousMonth = month - 1, previousYear = year - 1;

        if (type === "days") {
            if (previousMonth < 0) {

                setPreviousMonth(day, 11, previousYear);
            } else {
                setPreviousMonth(day, previousMonth, year);
            }
        } else if (type === "month") {
            setPreviousMonth(day, month, previousYear);
        }
    };

    const titleView = ({ type }) => {
        if (type === "days") {
            return `${months(date.month).name} ${date.year}`;
        } else if (type === "month") {
            return `${date.year}`;
        }
    };

    const handleShowModal = ()=>{
        setModal(!modal);
    };

    return (
        <>
            <div
                className="calendar"
            >
                <div
                    className="calendar_options"
                >
                    <div
                        className="left"
                    >
                        <input
                            type="button"
                            onClick={() => setDate(initDateState)}
                            value="Hoy"
                            className="calendar_button"

                        />
                        <input
                            type="button"
                            onClick={() => handlePreviousMont(view, date)}
                            value="<"
                            className="calendar_button"
                        />
                        <input
                            type="button"
                            onClick={() => handleNextMonth(view, date)}
                            value=">"
                            className="calendar_button"

                        />
                        <div
                            className="calendar_title"
                            onClick={changeViewToIn}
                        >
                            {titleView(view)}
                        </div>
                    </div>
                    <div
                        className="right"
                    >
                        <input
                            type="button"
                            value="Agregar cita"
                            onClick={handleShowModal}
                        /> 

                    </div>
                </div>

                <div className="calendar_table">
                    {
                        view.type === "days"
                            ?
                            <DaysScreen
                                date={date}
                                setDate={setDate}
                            />
                            :
                            null
                    }
                    {
                        view.type === "month"
                            ?
                            <MonthScreen
                                changeViewToOut={changeViewToOut}
                                date={date}
                            />
                            :
                            null
                    }
                </div>
            </div>
            <Modal
                modal={modal}
                handleShowModal={handleShowModal}
            />
        </>
    );
}
