import React from 'react';
import { NavLink } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { selectList, selectIsLoading } from '../../../store/selectors/users'
import { deleteUser } from '../../../store/actions/users';


function UsersList() {
  const dispatch = useDispatch();
  const usersList = useSelector(selectList);
  const isLoading = useSelector(selectIsLoading);

  const columns = [
    {
      field: "name",
      headerName: "Name",
      flex: 1,
    },
    {
      field: "surname",
      headerName: "Surname",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: '',
      headerName: 'Actions',
      headerAlign: 'center',
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params) => {
        return (
          <Box sx={{ display: 'flex' }}>
            <IconButton
              to={params.id}
              component={NavLink}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              onClick={() => {
                dispatch(deleteUser(params.id));
              }}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        );
      },
    },
  ];
  return (
    <DataGrid
      loading={isLoading}
      sx={{minHeight: '500px'}}
      rows={usersList}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
    />
  )
}

export default UsersList