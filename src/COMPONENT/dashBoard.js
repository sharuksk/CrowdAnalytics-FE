import React, { useEffect, useState } from "react";
import './dashBoard.css'
import {linkNode} from "../nodelink";
import axios from "axios";
import { DataGrid, GridToolbar  } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

export default function DashBoard () {
  const [dataRow, setDataRow] = useState([]);

  const rows = dataRow;
  const columns = [
    {
      field: 'personin',
      headerName: 'Person In',
      type: 'number',
      width: 90,
    },
    {
        field: 'personout',
        headerName: 'Person Out',
        type: 'number',
        width: 90,
    },
    {
        field: 'inside',
        headerName: 'Inside',
        type: 'number',
        width: 90,
    },
    {
        field: 'total',
        headerName: 'Total',
        type: 'number',
        width: 90,
    },
    {
        field: 'timestamp',
        headerName: 'Timestamp',
        type: 'time',
        width: 90,
    },
  ];


  useEffect(() =>{
    handleGetVideo();
  }, []);

  const { data, loading } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 4,
    maxColumns: 6,
  });

    const handleGetVideo = async() => {
        await axios.post(`${linkNode}/getdata`).then(async (res) => {
            
            try{
                let fromData = res.data;
                let toData = [];
                for (let i = 0; i < fromData.length; i++) {
                    toData.push({
                      id: fromData[i]._id,
                      personin: fromData[i].personin,
                      personout: fromData[i].personout,
                      inside: fromData[i].inside,
                      total: fromData[i].total,
                      timestamp: fromData[i].timestamp,
                    });
                  }
                setDataRow(toData);
            
        }
        catch{
            console.log("video")
        }
        });
        // await axios.post(`${linkNode}/getvideo`).then(async (res) => {
        //     setVideo(res.data.file64);
        //     console.log(res.data.file64);
        // });
    }
    
  return (
    <>
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                loading={loading} slots={{ toolbar: GridToolbar }}/>
        </div>
    </>
  )
}
