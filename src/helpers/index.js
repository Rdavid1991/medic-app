
//Años bisiesto
function isLeap(year) {
    return ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)
}

function daysOfMont(item) {
    let feb;
    isLeap(new Date().getFullYear()) ? feb = 29 : feb = 28;
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
    daysOfMont
}