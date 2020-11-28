import React, { createElement, useState } from 'react'
import { isLeap } from '../../helpers';
import "./calendar.css";
import { Month } from './views/Month';

export default function Calendar() {

    return (
       <Month/>
    )
}
