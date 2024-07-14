import axios from "axios";

interface Appointment {
    _id: string;
    user: string;
    doctor: string;
    date: Date;
    time: string;
    status: string;
    reason: string;
    user_name: string;
    user_phone: string;
    user_pet_type: string;
  }

  export const getAppointments = async (): Promise<Appointment[]> => {
    const response = await axios.get<Appointment[]>("http://localhost:9999/appointments");
    return response.data;
  }

  export const updateAppointment = async (id: string, status: string): Promise<void> => {
    await axios.post(`http://localhost:9999/appointments/update/${id}`, { status });
  }