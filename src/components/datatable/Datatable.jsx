import React from 'react'
import './datatable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from "../../data";


const Datatable = () => {

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <section className="cellAction">
            {/* <Link to="/users/test" style={{ textDecoration: "none" }}> */}
              <section className="viewButton">View</section>
            {/* </Link> */}
            <section
              className="deleteButton"
              // onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </section>
          </section>
        );
      },
    },
  ];

  return (
    <section className='datatable'>
          <DataGrid
            rows={userRows}
            columns={userColumns.concat(actionColumn)}
            pageSize={9}
            rowsPerPageOptions={[9]}
            checkboxSelection
         />
    </section>
  )
}

export default Datatable