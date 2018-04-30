import React from 'react';
import Table from './table'

export default () => {

    const students = [
        {
            student: 'Tommy',
            course: 'Science',
            grade: 94
        },
        {
            student: 'Jennifer',
            course: 'Biology',
            grade: 44
        },
        {
            student: 'Steven',
            course: 'Math',
            grade: 25
        }
    ]

    return (
        <div className='container'>
            <h1>Student Grade Table</h1>
            <Table data={students}/>
        </div>
    )
};

