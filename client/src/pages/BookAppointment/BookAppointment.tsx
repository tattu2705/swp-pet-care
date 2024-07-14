import React from 'react'
import Header from '../../components/Header/Header'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import './BookAppointment.scss'
import TextField from '@mui/material/TextField';
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { toast } from 'react-toastify';
import { bookAppointment, getAllDoctors } from '../../services';
import Calender from '../../components/Calender/Calender';

interface Doctor {
    _id: string;
    name: string;
    speciality: string;
    experience: number;
}

const BookAppointment = () => {
    const [date, setDate] = React.useState<Dayjs | null>(dayjs());
    const [reason, setReason] = React.useState('')
    const [petType, setPetType] = React.useState('')
    const [dateError, setDateError] = React.useState(false)
    const [name, setName] = React.useState('')
    const [phone, setPhone] = React.useState('')
    const [doctors, setDoctors] = React.useState<Doctor[]>([])
    const [doctor, setDoctor] = React.useState<string>()
    const user_id = JSON.parse(localStorage.getItem('data') as string)?._id

    const handleChangeDate = (newDate: Dayjs | null) => {
        //handle date is the passed date is less than the current date
        if (newDate && newDate.isBefore(dayjs())) {
            setDateError(true)
        } else {
            setDateError(false)
            setDate(newDate)
        }
    }

    const handleBook = () => {
        if (!user_id) {
            return toast.error('Please login to book an appointment')
        }
        if (dateError) {
            return toast.error('Please select the date after today')
        } else {
            bookAppointment({
                user: user_id,
                date: date?.format('YYYY-MM-DD') as string,
                doctor,
                user_name: name,
                user_phone: phone,
                user_pet_type: petType,
                time: new Date().toLocaleDateString(),
                status: 'pending',
                reason
            }).then(() => {
                setDate(dayjs())
                setReason('')
                setPetType('')
                setName('')
                setPhone('')
                setDoctor('')
                toast.success('Appointment booked successfully')
            })
            // console.log({
            //     user: user_id,
            //     date: date?.format('YYYY-MM-DD') as string,
            //     doctor,
            //     user_name: name,
            //     user_phone: phone,
            //     user_pet_type: petType,
            //     time: new Date().toLocaleDateString(),
            //     status: 'pending',
            //     reason
            // })
        }
    }

    React.useEffect(() => {
        getAllDoctors().then((data) => {
            setDoctors(data)
        })
    }, [])

    return (
        <>
            <Header />
            <div className='appointment-container'>
                <div className='appointment-header'>
                    <h1>Book an appointment</h1>
                </div>
                <div className='appointment-content'>
                    <div className='appointment-content__info'>
                        <FormControl sx={{ minWidth: 240 }}>
                            <InputLabel id="demo-simple-select-helper-label">Reason for visit</InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={reason}
                                label="Reason for visit"
                                onChange={(e) => setReason(e.target.value)}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={"Monthly check up"}>Monthly check up</MenuItem>
                                <MenuItem value={"Pet Illness"}>Pet Illness</MenuItem>
                                <MenuItem value={"Intensive care"}>Intensive care</MenuItem>
                                <MenuItem value={"Diagnostic Disease"}>Diagnostic Disease</MenuItem>
                            </Select>
                        </FormControl>
                        <div>
                            <TextField
                                required
                                id="outlined-required"
                                label="Name"
                                placeholder="Enter your name"
                                fullWidth
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div>
                            <TextField
                                required
                                id="outlined-required"
                                label="Phone number"
                                placeholder="Enter your phone number"
                                fullWidth
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                        <div>
                            <FormControl sx={{ minWidth: 240 }} fullWidth>
                                <InputLabel id="demo-simple-select-helper-label">Pet Type</InputLabel>
                                <Select
                                    labelId="demo-simple-select-helper-label"
                                    id="demo-simple-select-helper"
                                    value={petType}
                                    label="Pet Type"
                                    onChange={(e) => setPetType(e.target.value)}
                                >
                                    <MenuItem value={"Dog"}>Dog</MenuItem>
                                    <MenuItem value={"Cat"}>Cat</MenuItem>
                                    <MenuItem value={"Hamster"}>Hamster</MenuItem>
                                    <MenuItem value={"Other"}>Other</MenuItem>

                                </Select>
                            </FormControl>
                        </div>
                    </div>

                    <div className='appointment-content__calender'>
                        <LocalizationProvider dateAdapter={AdapterDayjs} >
                            <DatePicker
                                sx={{ width: '100%' }}
                                label="Pick an Appointment Date"
                                value={date}
                                onChange={handleChangeDate}
                            />
                        </LocalizationProvider>
                        <div>
                            <FormControl sx={{ minWidth: 240 }} fullWidth>
                                <InputLabel id="demo-simple-select-helper-label">Select Doctor</InputLabel>
                                <Select
                                    labelId="demo-simple-select-helper-label"
                                    id="demo-simple-select-helper"
                                    value={doctor}
                                    label="Select Doctor"
                                    onChange={(e) => setDoctor(e.target.value)}
                                >
                                    {
                                        doctors.map((doc) => (
                                            <MenuItem value={doc?._id}>{doc.name}</MenuItem>
                                        ))
                                    }
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                    
                </div>
                <div className='appointment-confirmation'>
                    <Button onClick={handleBook} variant="outlined">Book now</Button>
                </div>
            </div>
            <Calender userId={user_id}/>
        </>
    )
}

export default BookAppointment