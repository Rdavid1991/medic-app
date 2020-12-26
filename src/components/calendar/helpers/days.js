import { createElement } from 'react';
import { months } from './general';

let createTaskFn;

const getDaysTable = (date, createTask) => {
    createTaskFn = createTask;

    let td = [], tr = [], count = 0, countDay = 0;
    let day = new Date(date.year, date.month).getDay();
    let previousDaysOfMonth = months(date.month - 1).value - day;
    let nextDaysOfMonth = 0, year, month;

    for (let i = 0; i < 6; i++) {
        td = [];
        for (let j = 0; j < 7; j++) {
            count++;

            if (count > day && count - day <= months(date.month).value) {
                countDay++;
                td.push(getDays(
                    countDay, 
                    date.month, 
                    date.year, 
                    'current_month', 
                    date
                ));
            } else if (count <= day) {
                previousDaysOfMonth++;
                year = date.year;

                if (date.month === 0) {
                    year = date.year - 1;
                    month = 11;
                } else {
                    month = date.month - 1;
                }
                td.push(getDays(
                    previousDaysOfMonth,
                    month,
                    year,
                    'previous_month',
                    date
                ));
            } else {
                nextDaysOfMonth++;
                year = date.year;

                if (date.month === 11) {
                    year = new Date().getFullYear() + 1;
                    month = 0;
                } else {
                    month = Number(date.month) + 1;
                }
                td.push(getDays(
                    nextDaysOfMonth,
                    month,
                    year,
                    'next_month',
                    date
                ));
            }
        }
        tr.push(createElement(
            'tr',
            {
                "key": `${i}`
            },
            [td])
        );
    }
    return tr;
};

const drawTask = (day, month, year) => {

    let taskYear = '', taskMont = '', taskDay = '';

    let task = JSON.parse(localStorage.getItem('task')) | [];

    if (task.lenght > 0) {
        taskYear = task.date.split('-')[0];
        taskMont = task.date.split('-')[1];
        taskDay = task.date.split('-')[2];
    }

    if (Number(taskDay) === day && Number(taskMont) === month + 1 && Number(taskYear) === year) {
        return (
            createElement('div', {

            }, task.title)
        );
    }

};

function getDays(day, month, year, monthClass, date) {
    let todayClass;
    const currenDate = new Date();

    if (
        currenDate.getDate() === Number(day) &&
        currenDate.getMonth() === Number(month) &&
        currenDate.getFullYear() === Number(year)
    ) {
        todayClass = 'day today';
    } else if (
        Number(date.day) === Number(day) &&
        Number(date.month) === Number(month) &&
        Number(date.year) === Number(year)
    ) {
        todayClass = "day selected";
    } else {
        todayClass = 'day';
    }

    return createElement(
        'td',
        {
            "key"    : `${day}${month}${year}`,
            className: todayClass,
            onClick  : () => {
                createTaskFn(day, month, year);
            }
        },
        createElement('div', {
            className: `${monthClass} date`,
        }, day),
        drawTask(day, month, year)
    );
}

export {
    getDaysTable
};