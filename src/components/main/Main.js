import "./main.css";
import React from 'react';
import Calendar from '../calendar/Calendar';

export const Main = () => {
    return (
        <div
            className="container"
        >
            <nav
                className = "nav"
            >
                Hola mundo
            </nav>

            <div
                className="main-container"
            >
                <aside
                    className="side-bar"
                >
                    TEST
                </aside>

                <Calendar />

            </div>
        </div>
    );
};
