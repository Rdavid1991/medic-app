import React, { createElement } from 'react';
import { daysOfMont } from '../helpers';
import PropTypes from 'prop-types';

export const Month = ({ changeViewToOut, date }) => {

    const getMonths = () => {

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
                        "onClick"   : ({target}) => changeViewToOut(target.dataset.month, target.dataset.year)
                    },
                    daysOfMont(month).name
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


    return (
        <>
            <table>
                <tbody>
                    {getMonths(changeViewToOut)}
                </tbody>
            </table>
        </>
    );
};

Month.propTypes = {
    changeViewToOut: PropTypes.func.isRequired,
    date           : PropTypes.object.isRequired
};
