
//Verificar cuales son los años bisiestos
function isLeap(year) {
    return ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0);
}

function months(item) {

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
    months,
    daysName
};
