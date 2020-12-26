import React from 'react';

import PropTypes from 'prop-types';
import { getMonths } from '../../helpers/month';

export const MonthScreen = ({ changeViewToOut, date }) => {

    return (
        <>
            <table>
                <tbody>
                    {getMonths(changeViewToOut, date)}
                </tbody>
            </table>
        </>
    );
};

MonthScreen.propTypes = {
    changeViewToOut: PropTypes.func.isRequired,
    date           : PropTypes.object.isRequired
};
