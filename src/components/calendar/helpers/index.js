import { createElement } from 'react'

const getRows = (date) => {
    let td = [], tr = [], count = 0, countDay = 0;
    let day = new Date(date.year, date.month).getDay();
    let previousDaysOfMonth = daysOfMont(date.month - 1).value - day + 1;
    let nextDaysOfMonth = 1;
    let todayClass;

    for (let i = 0; i < 6; i++) {
        td = []
        for (let j = 0; j < 7; j++) {
            count++

            if (count > day && count - day <= daysOfMont(date.month).value) {

                countDay++

                todayClass = (new Date().getDate() === countDay && new Date().getMonth() === date.month && new Date().getFullYear() === Number(date.year))? 'day today' : 'day';

                td.push(createElement(
                    'td',
                    { className: todayClass },
                    createElement('div', { className: 'current_month' }, countDay)
                ))
            } else if (count - day <= daysOfMont(date.month).value) {

                previousDaysOfMonth++

                todayClass = (new Date().getDate() === previousDaysOfMonth && new Date().getMonth() === date.month - 1 && new Date().getFullYear() === Number(date.year))? 'day today' : 'day';

                td.push(createElement(
                    'td',
                    { className: todayClass },
                    createElement('div', { className: 'previous_month' }, previousDaysOfMonth)
                ))
            } else {
                nextDaysOfMonth++

                todayClass = (new Date().getDate() === nextDaysOfMonth && new Date().getMonth() === date.month + 1 && new Date().getFullYear() === Number(date.year))? 'day today' : 'day';

                td.push(createElement(
                    'td',
                    { className: todayClass },
                    createElement('div', { className: 'next_month' }, nextDaysOfMonth)
                ))
            }
        }
        tr.push(createElement('tr', null, [td]))
    }
    return tr;
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

export {
    daysOfMont,
    getRows
}

