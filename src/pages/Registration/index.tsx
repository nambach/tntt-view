import {
  Grid,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useLoader } from "../../components/Loader";
import { useGetRegistrationsSummaryQuery } from "../../api/registration";
import { ResultTable } from "./ResultTable";

interface RegistrationProps {
  isBlocked: boolean;
}

const Registration = ({ isBlocked }: RegistrationProps) => {
  const receivers: any = [];
  const schoolYearId = 5;
  const { data, isFetching } = useGetRegistrationsSummaryQuery({
    schoolYearId,
  });
  const { Loader } = useLoader();

  return (
    <>
      <Loader loading={isFetching} />
      <Grid container spacing={2}>
        <Grid item xs={0} sm={2}></Grid>
        <Grid item xs={12} sm={8}>
          <Stack margin={4} spacing={6}>
            
            <Typography variant="h5" gutterBottom>
              Quản lý ghi danh năm học
            </Typography>

            {data?.dates?.length ? (
              <ResultTable data={data} />
            ) : !isFetching ? (
              <div>Không lấy được thống kê.</div>
            ) : (
              <></>
            )}
          </Stack>
        </Grid>
        <Grid item xs={0} sm={2}></Grid>
      </Grid>
    </>
  );
};

export default Registration;
