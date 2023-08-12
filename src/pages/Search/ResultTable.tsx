import {Chip, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';
import {RegistrationItem} from '../../models';

export const ResultTable = ({students}: { students: RegistrationItem[] }) => {
  return <TableContainer component={Paper}>
    <Table aria-label="simple table">
      <TableHead style={{backgroundColor: 'lightgray'}}>
        <TableRow>
          <TableCell>Tên Thánh</TableCell>
          <TableCell>Họ và tên</TableCell>
          <TableCell>Năm sinh</TableCell>
          <TableCell>Lớp cũ</TableCell>
          <TableCell>Trạng thái</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {students.map((student) => (
        <TableRow
        key={student.studentId}
        sx={{'&:last-child td, &:last-child th': {border: 0}}}
        >
          <TableCell component="th" scope="row">
            {student.canonicalSaintName}
          </TableCell>
          <TableCell component="th" scope="row">
            {student.fullName}
          </TableCell>
          <TableCell>{student.birthYear}</TableCell>
          <TableCell>{student.lastYearCourse}</TableCell>
          <TableCell>{student.registrationId ?
          <Chip label="Đã ghi danh" color="success"/>:<Chip label="Chưa ghi danh" color="error"/>}</TableCell>
        </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>

}
