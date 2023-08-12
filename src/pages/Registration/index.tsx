import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";
import { useLoader } from "../../components/Loader";

interface RegistrationProps {
  isBlocked: boolean;
}

const Registration = ({ isBlocked }: RegistrationProps) => {
  const receivers: any = [];
  // const { data, isFetching } = useGetRegistrationsSummaryQuery({ search });
  const { Loader } = useLoader();

  return (
    <>
      {/* <Loader loading={isFetching} /> */}
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead style={{ backgroundColor: "lightgray" }}>
            <TableRow>
              <TableCell>Người nhận đăng ký</TableCell>
              <TableCell>Số lượng</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {receivers.map((receiver: any, index: number) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {"Hung"}
                </TableCell>
                <TableCell component="th" scope="row">
                  {"20"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Registration;
