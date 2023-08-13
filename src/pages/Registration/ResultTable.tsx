import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect } from "react";
import { RegistrationByReceiver } from "../../models";
import { localizeDate } from "../../utils/date-util";

export const ResultTable = ({ data }: { data: RegistrationByReceiver }) => {
  useEffect(() => {}, [data]);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead style={{ backgroundColor: "lightgray" }}>
          <TableRow>
            <TableCell>Người tiếp nhận</TableCell>
            <TableCell>Thời gian</TableCell>
            <TableCell>Số lượng</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          {data.receivers.map((receiver, index) => (
            <>
              {Object.keys(receiver.data).map((date, dateIndex) => (
                <TableRow key={`${index}-${dateIndex}`}>
                  {dateIndex === 0 && (
                    <TableCell
                      rowSpan={Object.keys(receiver.data).length}
                      scope="row"
                    >
                      {receiver.name}
                    </TableCell>
                  )}

                  <TableCell scope="row">{localizeDate(date)}</TableCell>
                  <TableCell>{receiver.data[date]}</TableCell>
                </TableRow>
              ))}
            </>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
