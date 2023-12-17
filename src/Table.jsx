import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import axios from "axios";
import React, { useState } from "react";


const Table = () => {
  const [posts, setPosts] = useState([]);
  
  React.useEffect(() => {
    axios.get("https://erp.seopage1.net/api/leads").then((response) => {
      setPosts(response.data.data);
    });
  }, []);

  const columns = [
    { field: 'id', headerName: '#', width: 90},
    {
      field: 'client_name',
      headerName: 'Name',
      width: 150,
    },
    {
      field: 'project_link',
      headerName: 'Project Link',
      width: 150,
      
    },
    {
      field: 'project_id',
      headerName: 'Project ID',
      width: 100,
      valueGetter: (params) => "NA"      
    },
    {
      field: 'bid_value',
      headerName: 'Project Budget',
      width: 200,
      valueGetter: (params) => `${params.row.bid_value}-${params.row.bid_value2}$`
    },
    {
      field: 'actual_value',
      headerName: 'Bid Value',
      valueGetter: (params) => `${params.row.bid_value} $`
    },
    {
      field: 'deadline',
      headerName: 'Created',
      width: 110,
    },
    {
      field: 'added_by',
      headerName: 'Create By',
      width: 110,
      editable: true,
    },
    {
      field: 'biddingDelayTime',
      headerName: 'Bigging Delay Time',
      width: 200,
      valueGetter: (params) => `${params.row.bidding_minutes} mins ${params.row.bidding_seconds} seconds`
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 200,
      renderCell: (params) => {
        return (
          <>
            {params.row.deal_status ===1
              ? (<p className="green">Converted to Deal</p>)
              : (<p className="red">Not Converted to Deal</p>)}
          </>
        );
      },
    },
    {
      field: 'deal_status',
      headerName: 'Deal Status',
      width: 200,
      renderCell: (params) => {
        return (
          <>
            {params.row.deal_status ===1
              ? (<p className="yellow">Not Activity Yet</p>)
              : (<p>Not Applicable</p>)}
          </>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      sortable: false,
      renderCell: (params) => {
        return (
          <i className="ri-menu-line actionBar"></i>
        );
      },
    },

  ];


  return (
    <>
      <section className="table">
      <Box sx={{  width: '100%' }}>
      <DataGrid
        rows={posts}
        columns={columns}
        slots={{ toolbar: GridToolbar }}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[5, 10, 25]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
      />
    </Box>
      </section>
    </>
  );
};

export default Table;