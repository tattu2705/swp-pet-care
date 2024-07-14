'use client';

import * as React from 'react';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { getAppointments, updateAppointment, deleteAppointment, updateAppointmentData } from '@/services';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';

interface Appointment {
  _id: string;
  user_name: string;
  user_pet_type: string;
  user_phone: string;
  date: string;
  time: string;
  status: string;
  reason: string;
}

const formatDate = (date: Date) => {
  //  2024-07-13T00:00:00.000Z
  const d = new Date(date);
  return `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}`;
}

const handleAccept = async (id: string) => {
  await updateAppointment(id, 'accepted');
  window.location.reload()
}

const handleReject = async (id: string) => {
  await updateAppointment(id, 'rejected');
  window.location.reload()
}

const handleDelete = async (id: string) => {
  await deleteAppointment(id);
  window.location.reload()
}


export default function Page(): React.JSX.Element {
  const [rows, setRows] = React.useState<Appointment[]>([]);
  const [openModal, setOpenModal] = React.useState(false);
  const [editingAppointment, setEditingAppointment] = React.useState<Appointment | null>(null);

  const handleEdit = (appointment: Appointment) => {
    setEditingAppointment(appointment);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setEditingAppointment(null);
  };

  const handleSaveEdit = async () => {
    if (editingAppointment) {
      const data = {
        user_name: editingAppointment.user_name,
        user_pet_type: editingAppointment.user_pet_type,
        user_phone: editingAppointment.user_phone,
        status: editingAppointment.status,
        reason: editingAppointment.reason,
      }
      await updateAppointmentData(editingAppointment._id, data);
      window.location.reload();
      handleCloseModal();
    }
  };

  const columns: GridColDef[] = [
    { field: '_id', headerName: 'ID', width: 70 },
    { field: 'user_name', headerName: 'Pet Owner Name', width: 130 },
    { field: 'user_pet_type', headerName: 'Pet Type', width: 130 },
    {
      field: 'user_phone',
      headerName: 'Phone',
      width: 250,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 90,
    },
    {
      field: 'reason',
      headerName: 'Reason',
      width: 230,
    },
    {
      field: 'date',
      headerName: 'Appointment Date',
      sortable: false,
      width: 160,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      sortable: false,
      width: 330,
      renderCell: (params: GridRenderCellParams<Appointment>) => (
        <>
          {
            params.row.status === 'pending' ? (
              <>
                <Button onClick={() => handleAccept(params.row._id)} sx={{ marginRight: '20px' }} variant="contained" color="success">
                  Accept
                </Button>
                <Button onClick={() => handleReject(params.row._id)} variant="outlined" color="error">
                  Reject
                </Button>
              </>
            ) :
              (
                <>
                  <Button onClick={() => handleEdit(params.row)} sx={{ marginRight: '20px' }} variant="contained" color="success">
                    Edit
                  </Button>
                  <Button onClick={() => handleDelete(params.row._id)} variant="outlined" color="error">
                    Delete
                  </Button>
                </>
              )
          }

        </>
      ),
    }
  ];

  React.useEffect(() => {
    const fetchAppointments = async () => {

      const appointments = await getAppointments();
      const datas: Appointment[] = appointments.map((data) => (
        {
          _id: data._id,
          user_name: data.user_name,
          user_pet_type: data.user_pet_type,
          user_phone: data.user_phone,
          date: formatDate(data.date),
          time: data.time,
          status: data.status,
          reason: data.reason,
        }
      ))
      setRows(datas);

    };

    void fetchAppointments();
  }, []);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        getRowId={(row: Appointment) => row._id}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />

<Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle>Edit Appointment</DialogTitle>
        <DialogContent>
          {editingAppointment && (
            <>
              <TextField
                margin="dense"
                label="Pet Owner Name"
                type="text"
                fullWidth
                value={editingAppointment.user_name}
                onChange={(e) => setEditingAppointment({ ...editingAppointment, user_name: e.target.value })}
              />
              <TextField
                margin="dense"
                label="Pet Type"
                type="text"
                fullWidth
                value={editingAppointment.user_pet_type}
                onChange={(e) => setEditingAppointment({ ...editingAppointment, user_pet_type: e.target.value })}
              />
              <TextField
                margin="dense"
                label="Phone"
                type="text"
                fullWidth
                value={editingAppointment.user_phone}
                onChange={(e) => setEditingAppointment({ ...editingAppointment, user_phone: e.target.value })}
              />
              <TextField
                margin="dense"
                label="Status"
                type="text"
                fullWidth
                value={editingAppointment.status}
                onChange={(e) => setEditingAppointment({ ...editingAppointment, status: e.target.value })}
              />
              <TextField
                margin="dense"
                label="Reason"
                type="text"
                fullWidth
                value={editingAppointment.reason}
                onChange={(e) => setEditingAppointment({ ...editingAppointment, reason: e.target.value })}
              />
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSaveEdit} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}