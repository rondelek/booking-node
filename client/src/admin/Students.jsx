import { useEffect, useState } from "react";
import { useAppContext } from "../context/appContext";

import { DataGrid } from "@mui/x-data-grid";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { Button } from "@mui/material";

export default function Students() {
  const {
    user,
    getAllStudents,
    allStudents,
    updateStudent,
    setUpdateStudent,
    isPaid,
  } = useAppContext();

  useEffect(() => {
    if (isPaid !== "") {
      updateStudent();
    }
  }, [isPaid]);

  const handleCellClick = () => {
    console.log("handle cell click");
  };

  const columns = [
    {
      field: "name",
      headerName: "Imię",
      flex: 1,
      renderCell: (params) => {
        return (
          <>
            <p
              onClick={(event) => {
                handleCellClick(event, params);
              }}
              style={{ cursor: "pointer" }}
            >
              {params.value}
            </p>
          </>
        );
      },
    },
    { field: "email", headerName: "Email", flex: 1 },
    {
      field: "isPaid",
      headerName: "Opłata",
      flex: 1,
      editable: true,
      type: "boolean",
      renderCell: (params) => {
        return params.value ? (
          <CheckCircleIcon
            style={{
              color: "green",
            }}
          />
        ) : (
          <CancelIcon
            style={{
              color: "red",
            }}
          />
        );
      },
    },
    {
      field: "price",
      headerName: "Wysokość opłaty",
      flex: 1,
      editable: true,
      type: "number",
    },
    {
      field: "lessonsFinished",
      headerName: "Liczba zrealizowanych lekcji",
      flex: 1,
    },
    {
      field: "lessonsLimit",
      headerName: "Liczba wykupionych godzin",
      flex: 1,
    },
  ];

  useEffect(() => {
    getAllStudents();
  }, []);

  if (allStudents.length === 0) {
    return <h2>Brak nowych kursów.</h2>;
  }

  const handleUpdate = (cellData) => {
    const { row } = cellData;
    const updateStudentID = row._id;
    const isPaid = cellData.value;
    setUpdateStudent(updateStudentID, isPaid);
  };

  return (
    <div style={{ height: 400, width: "100%" }}>
      <h1>Kursanci</h1>
      <DataGrid
        rows={allStudents}
        columns={columns}
        getRowId={(row) => row._id}
        onCellEditCommit={handleUpdate}
        hideFooter={true}
      />
    </div>
  );
}
