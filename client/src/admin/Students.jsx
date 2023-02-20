import { useEffect, useState } from "react";
import { useAppContext } from "../context/appContext";

import { DataGrid } from "@mui/x-data-grid";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Calendar from "./Calendar";
import { gapi } from "gapi-script";
import Calendar3 from "./Calendar3";
import Calendar2 from "./Calendar2";
import Calendar4 from "./Calendar4";
import Calendar5 from "./Calendar5";

export default function Students() {
  const {
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

  const handleEmail = (params) => {
    window.location = `mailto:${params.row.email}`;
  };

  const columns = [
    {
      field: "name",
      headerName: "Imię",
      flex: 1,
      renderCell: (params) => {
        return (
          <p>
            {params.value}
            <MailOutlineIcon
              sx={{ width: "1rem", marginLeft: ".625rem", cursor: "pointer" }}
              onClick={() => handleEmail(params)}
            />
          </p>
        );
      },
    },
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
    <div style={{ height: 700, width: "100%", marginTop: "60px" }}>
      <Calendar5 />
      {/* <Calendar2 /> */}
      {/* <DataGrid
        rows={allStudents}
        columns={columns}
        getRowId={(row) => row._id}
        onCellEditCommit={handleUpdate}
        hideFooter={true}
      /> */}
    </div>
  );
}
