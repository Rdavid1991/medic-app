import {createElement} from 'react';
import { months } from './general';

const getMonths = (changeViewToOut, date) => {

    let tr = [], td = [], month = 0, year = date.year;

    for (let i = 0; i < 4; i++) {
        td = [];
        for (let j = 0; j < 4; j++) {

            if (month > 11) {
                month = 0;
                year++;
            }
            
            td.push(createElement(
                'td',
                {
                    "key"       : `${j}`,
                    "data-month": month,
                    "data-year" : year,
                    "onClick"   : ({target}) => target.tagName== 'TD'? changeViewToOut(target.dataset.month, target.dataset.year):'',
                    "className" : "month"
                },createElement(
                    'div',
                    {
                        
                    },
                    months(month).name)
                
            ));
            month++;
        }
        tr.push(createElement(
            'tr', 
            {
                "key": `${i}`
            }, 
            [td]));
    }
    return tr;
};

export {
    getMonths
};