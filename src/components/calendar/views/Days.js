import React from 'react';
import { getRows } from '../helpers';
import PropTypes from 'prop-types';

export const Days = ({ date, setDate }) => {

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
                    {getRows(
                        date,
                        createTask
                    )}
                </tbody>
            </table>
        </>
    );
};

Days.propTypes = {
    date   : PropTypes.object.isRequired,
    setDate: PropTypes.func.isRequired
};
