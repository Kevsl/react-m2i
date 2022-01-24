import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  {
    field: "sexe",
    headerName: "Sexe",
    type: "number",
    width: 110,
    editable: true,
    renderCell: (cellValues) => {
      return cellValues.value === false ? <p> Fille</p> : <p>Garçon</p>;
    },
  },
];

const rows = [
  { id: 1, firstName: "John", lastName: "Doe", age: 32, sexe: true },
  { id: 2, firstName: "Khalid", lastName: "Sookia", age: 27, sexe: false },
  { id: 3, firstName: "Celia", lastName: "m2i", age: 12, sexe: false },
  { id: 4, firstName: "Jessica", lastName: "Macron", age: 90, sexe: false },
  { id: 5, firstName: "Pierre", lastName: "Paul-Jacques", age: 22, sexe: true },
];

export default function DataGridDemo() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
