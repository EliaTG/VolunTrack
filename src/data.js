export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.username}
            <span>{params.row.name}</span>
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
    },
    {
      field: "country",
      headerName: "Country",
      width: 230,
    },
    {
      field: "age",
      headerName: "Age",
      width: 70,
    },
    {
      field: "status",
      headerName: "Status",
      width: 100,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
  ];


export const  userRows = [
    {
      id: 1,
      img: "https://imgs.search.brave.com/6INsQcdbRU7Y_pz1wkNkcX5k9wR3lAirYXW_yJ7sEro/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzM4L2Mw/LzdjLzM4YzA3Y2Mz/MDMyNDBlNTRmMDVk/YTYwNzJjZWVkYWY4/LS1qb24tc2NobmVl/LWtpdC1oYXJyaW5n/dG9uLmpwZw",
      name: "Jon Snow",
      email: "jonElbastardo@gmail.com",
      age: 32,
      country: "Dominican Republic",
      status: "Active",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      name: "Emma Lopez",
      email: "emmazz@gmail.com",
      age: 22,
      country: "Dominican Republic",
      status: "Active",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      name: "Brayan Gonzalez",
      email: "elbrayan@gmail.com",
      age: 23,
      country: "Dominican Republic",
      status: "Banned",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      name: "Pedro Ortega",
      email: "Portega@gmail.com",
      age: 24,
      country: "Dominican Republic",
      status: "Active",
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      name: "Jose Smith",
      email: "josesito@gmail.com",
      age: 23,
      country: "Dominican Republic",
      status: "Active",
    },
    {
      id: 6,
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      name: "Manuel Ortega",
      email: "Mortega@gmail.com",
      age: 26,
      country: "Dominican Republic",
      status: "Active",
    },

  ];