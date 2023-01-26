import { useEffect, useState } from "react";
import { useAppContext } from "../context/appContext";

import { DataGrid } from "@mui/x-data-grid";

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
      console.log("isPaid", isPaid);
      updateStudent();
    }
  }, [isPaid]);

  const columns = [
    { field: "name", headerName: "Imię", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    {
      field: "isPaid",
      headerName: "Opłata",
      flex: 1,
      editable: true,
      type: "boolean",
    },
    {
      field: "nextLesson",
      headerName: "Następna lekcja",
      flex: 1,
      editable: true,
      type: "date",
    },
    { field: "lastLesson", headerName: "Ostatnia lekcja", flex: 1 },
    { field: "homework", headerName: "Zadanie domowe", flex: 1 },
  ];

  useEffect(() => {
    getAllStudents();
  }, []);

  if (allStudents.length === 0) {
    return <h2>Brak nowych kursów.</h2>;
  }

  const handleSetUpdate = (cellData) => {
    // const { id, field, value, row, name } = cellData;
    // console.log(row._id, cellData.value);
    // setUpdateStudent(row._id, value);
  };

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
        onCellClick={handleSetUpdate}
        hideFooter={true}
      />
    </div>
  );
}
