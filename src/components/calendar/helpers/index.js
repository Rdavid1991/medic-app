import { createElement } from 'react';

let createTaskFn;

const getRows = (date, createTask) => {
    createTaskFn = createTask;

    let td = [], tr = [], count = 0, countDay = 0;
    let day = new Date(date.year, date.month).getDay();
    let previousDaysOfMonth = daysOfMont(date.month - 1).value - day;
    let nextDaysOfMonth = 0, year, month;

    for (let i = 0; i < 6; i++) {
        td = [];
        for (let j = 0; j < 7; j++) {
            count++;

            if (count > day && count - day <= daysOfMont(date.month).value) {
                countDay++;
                td.push(getDays(countDay, date.month, date.year, 'current_month', date));
            } else if (count <= day) {
                previousDaysOfMonth++;
                year = date.year;

                if (date.month === 0) {
                    year = date.year - 1;
                    month = 11;
                } else {
                    month = date.month - 1;
                }
                td.push(getDays(previousDaysOfMonth, month, year, 'previous_month', date));
            } else {
                nextDaysOfMonth++;
                year = date.year;

                if (date.month === 11) {
                    year = new Date().getFullYear() + 1;
                    month = 0;
                } else {
                    month = Number(date.month) + 1;
                }
                td.push(getDays(nextDaysOfMonth, month, year, 'next_month', date));
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

//Verificar cuales son los años bisiestos
function isLeap(year) {
    return ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0);
}

function daysOfMont(item) {

    let feb;
    isLeap(new Date().getFullYear()) ? feb = 29 : feb = 28;

    if (item < 0) {
        item = 11;
    } else if (item > 11) {
        item = 0;
    }

    const array = [
        {
            name : "Enero",
            value: 31,
        }, {
            name : "Febrero",
            value: feb,
        }, {
            name : "Marzo",
            value: 31
        }, {
            name : "Abril",
            value: 30
        }, {
            name : "Mayo",
            value: 31
        }, {
            name : "junio",
            value: 30
        }, {
            name : "Julio",
            value: 31
        }, {
            name : "Agosto",
            value: 31
        }, {
            name : "Septiembre",
            value: 30
        }, {
            name : "Octubre",
            value: 31
        }, {
            name : "Noviembre",
            value: 30
        }, {
            name : "Diciembre",
            value: 31
        }];
    return array[item];
}

const daysName = (index) => {
    const arrayDay = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    return arrayDay[index];
};

export {
    daysOfMont,
    getRows,
    daysName
};