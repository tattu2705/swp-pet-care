import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { getUserAppointments } from '../../services'
import './Calender.scss'
import React, { useEffect } from 'react'

const Calender = ({userId} : {userId: string}) => {
    const [appointments, setAppointments] = React.useState<any>(null)
    const [events, setEvents] = React.useState<any>([])
    useEffect(() => {
        getUserAppointments(userId).then((data) => {
            setAppointments(data)
        })
    }, [userId])

    useEffect(() => {
        if (appointments) {
            const events = appointments.map((appointment: any) => {
                return {
                    title: appointment.reason,
                    date: appointment.date
                }
            })
            setEvents(events)
        }
    }, [appointments])

    return (
        <div className='calender-container'>
            <h1>Calender</h1>
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                events={events}
            />
        </div>

    )
}

export default Calender