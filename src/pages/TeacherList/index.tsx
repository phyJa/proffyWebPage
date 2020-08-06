import React from 'react';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

// CSS
import './styles.css';  

export default function TeacherList () {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="These are the available Proffys">
                <form id="search-teachers">
                    <Select 
                            name="subject" 
                            label="Subject"
                            options={
                                [
                                    {value: 'Art', label: 'Art'},
                                    {value: 'Biology', label: 'Biology'},
                                    {value: 'Physic Education', label: 'Physic Education'},
                                    {value: 'English', label: 'English'},
                                    {value: 'Portuguese', label: 'Portuguese'},
                                    {value: 'Physics', label: 'Physics'},
                                    {value: 'Chemistry', label: 'Chemistry'},
                                    {value: 'History', label: 'History'},
                                    {value: 'Geography', label: 'Geography'}
                                ]
                            }
                    />

                    <Select 
                        name="week_day" 
                        label="Week Day"
                        options={
                            [
                                {value: '0', label: 'Sunday'},
                                {value: '1', label: 'Monday'},
                                {value: '2', label: 'Tuesday'},
                                {value: '3', label: 'Wednesday'},
                                {value: '4', label: 'Thursday'},
                                {value: '5', label: 'Friday'},
                                {value: '6', label: 'Saturday'}
                            ]
                        }
                    />
                    
                    <Input name="time" label="Time" type="time"/>
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