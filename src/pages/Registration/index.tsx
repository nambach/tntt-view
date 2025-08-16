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
import { useParams } from "react-router-dom";
import { useLoader } from "../../components/Loader";
import { useGetRegistrationsSummaryQuery } from "../../api/registration";
import { ResultTable } from "./ResultTable";

interface RegistrationProps {
  isBlocked: boolean;
}

const parseDate = (dateString: string) => {
  const parts = dateString.split('/');
  // Note: Month is 0-indexed in JavaScript Date objects (0 for January, 11 for December)
  const day = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10) - 1; // Subtract 1 for 0-indexed month
  const year = parseInt(parts[2], 10);

  return new Date(year, month, day);
}

const sortDates = (dates: string[]) => {
  const cache: Record<string, Date> = {}
  return [...dates].sort((a, b) => {
    let dateA = cache[a]
    if (dateA == null) {
      dateA = parseDate(a)
      cache[a] = dateA
    }

    let dateB = cache[b]
    if (dateB == null) {
      dateB = parseDate(b)
      cache[b] = dateB
    }

    return dateA.getTime() - dateB.getTime()
  })
}

const Registration = ({ isBlocked }: RegistrationProps) => {
  const receivers: any = [];
  const { yearId } = useParams();
  const schoolYearId = yearId ? +yearId : 1;
  const { data, isFetching } = useGetRegistrationsSummaryQuery({
    schoolYearId,
  });
  const sortedDates = sortDates(data?.dates || []);
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
              <ResultTable data={data} dates={sortedDates} />
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
