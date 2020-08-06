import React from 'react';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';

// CSS
import './styles.css';  



export default function TeacherList () {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="These are the available Proffys">
                <form id="search-teachers">
                    <Input name="subject" label="Subject"/>

                    <Input name="week_day" label="Week Day"/>

                    <Input name="time" label="Time"/>
                </form>
            </PageHeader>

            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>
    )
}