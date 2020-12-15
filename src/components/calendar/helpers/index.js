import { createElement } from 'react'

let createTaskFn;

const getRows = (date,createTask) => {

    createTaskFn = createTask;
    let td = [], tr = [], count = 0, countDay = 0;
    let day = new Date(date.year, date.month).getDay();
    let previousDaysOfMonth = daysOfMont(date.month - 1).value - day + 1;
    let nextDaysOfMonth = 0;

    for (let i = 0; i < 6; i++) {
        td = []
        for (let j = 0; j < 7; j++) {
            count++

            if (count > day && count - day <= daysOfMont(date.month).value) {
                countDay++
                td.push(getDays(countDay, date.month, date.year, 'current_month'))
            } else if (count - day <= daysOfMont(date.month).value) {
                previousDaysOfMonth++
                let year = date.year;
                let month;

                if (date.month === 0 && new Date().getFullYear() === date.year - 1) {
                    year = new Date().getFullYear();
                    month = 11;
                } else {
                    month = date.month - 1
                }

                td.push(getDays(previousDaysOfMonth, month, year, 'previous_month'))
            } else {
                nextDaysOfMonth++

                let year = date.year;
                let month;

                if (date.month === 11) {
                    year = new Date().getFullYear() + 1;
                    month = 0;
                    console.log('entro');
                } else {
                    month = Number(date.month) + 1
                }

                td.push(getDays(nextDaysOfMonth, month, year, 'next_month'))
            }
        }
        tr.push(createElement('tr', null, [td]))
    }
    return tr;
}

function getDays(day, month, year, monthClass) {
    let todayClass;
    const date = new Date();

    if (date.getDate() === day &&
        date.getMonth() === month &&
        date.getFullYear() === Number(year)) {

        todayClass = 'day today';
    } else {
        todayClass = 'day';
    }

    return createElement(
        'td',
        { 
            className: todayClass,
            onClick:()=>createTaskFn(day,month,year)
        },
        createElement('div', { 
            className: monthClass,
        }, day)
    )
}

//Años bisiesto
function isLeap(year) {
    return ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)
}

function daysOfMont(item) {

    let feb;
    isLeap(new Date().getFullYear()) ? feb = 29 : feb = 28;

    if (item < 0) {
        item = 11
    }

    const array = [
        {
            name: "Enero",
            value: 31
        }, {
            name: "Febrero",
            value: feb
        }, {
            name: "Marzo",
            value: 31
        }, {
            name: "Abril",
            value: 30
        }, {
            name: "Mayo",
            value: 31
        }, {
            name: "junio",
            value: 30
        }, {
            name: "Julio",
            value: 31
        }, {
            name: "Agosto",
            value: 31
        }, {
            name: "Septiembre",
            value: 30
        }, {
            name: "Octubre",
            value: 31
        }, {
            name: "Noviembre",
            value: 30
        }, {
            name: "Diciembre",
            value: 31
        }]
    return array[item]
}

const daysName = (index)=>{
    const arrayDay = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    return arrayDay[index];
}

export {
    daysOfMont,
    getRows,
    daysName
}