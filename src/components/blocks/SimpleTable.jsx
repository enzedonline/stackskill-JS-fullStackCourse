import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const getNestedVal = (jsonObject, path) => {
  let result = jsonObject;
  path.split(".").forEach(function (key) {
    result = result[key];
  });
  return result;
};

const formatVal = (val) => {
    switch (typeof(val)) {
        case 'boolean':
            val = val ? 'Yes' : 'No';
            break;
        case 'string':
            const valToDate = Date.parse(val)
            if (valToDate) {
                val = new Date(valToDate).toLocaleString()
            }
            break;
        case 'object':
            if (Array.isArray(val)) {
                val = val.join(', ');
            }
            break;
        default:
            console.log(typeof(val))
    }
    return val;
}

export default function SimpleTable(props) {
  const { rows, columns } = props;
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns
              ? columns.map((column, i) => {
                  return <TableCell key={i}>{column.label}</TableCell>;
                })
              : null}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows
            ? rows.map((row, i) => {
                return (
                  <TableRow key={i}>
                    {columns.map((column, columnIndex) => {
                      return (
                        <TableCell key={columnIndex}>
                          {formatVal(getNestedVal(row, column.fieldName))}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })
            : null}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
