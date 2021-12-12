import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Link } from "react-router-dom";

const getNestedVal = (jsonObject, path) => {
  let result = jsonObject;
  try {
    path.split(".").forEach(function (key) {
      result = result[key];
    });
    return result;
  } catch {
    return null;
  }
};

const formatVal = (val, format) => {
  switch (format) {
    case "yesno":
      val = val ? "Yes" : "No";
      break;
    case "datetime":
      val = new Date(val).toLocaleString();
      break;
    case "array":
      val = (
        <List className="table-cell-list">
          {val.map((item, i) => (
            <ListItem className="table-cell-list" key={i}>
              {item}
            </ListItem>
          ))}
        </List>
      );
      break;
    default:
      break;
  }
  return val;
};

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
                          {column.linkIdPath ? (
                            <Link to={`${column.linkIdPath}${row.id}`}>
                              {formatVal(
                                getNestedVal(row, column.fieldName),
                                column.format
                              )}
                            </Link>
                          ) : (
                            formatVal(
                              getNestedVal(row, column.fieldName),
                              column.format
                            )
                          )}
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
