import React from 'react';
import { getDaysTable } from '../../helpers/days';
import PropTypes from 'prop-types';

export const DaysScreen = ({ date, setDate }) => {

    const createTask = (day, month, year) => {
        setDate({ day, month, year });
    };

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th><h3>Domingo</h3></th>
                        <th><h3>Lunes</h3></th>
                        <th><h3>Martes</h3></th>
                        <th><h3>Miercoles</h3></th>
                        <th><h3>Jueves</h3></th>
                        <th><h3>Viernes</h3></th>
                        <th><h3>Sabado</h3></th>
                    </tr>
                </thead>
                <tbody>
                    {getDaysTable(
                        date,
                        createTask
                    )}
                </tbody>
            </table>
        </>
    );
};

DaysScreen.propTypes = {
    date   : PropTypes.object.isRequired,
    setDate: PropTypes.func.isRequired
};
