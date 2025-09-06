import {Button, Link, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';
import {CourseChip} from '../../components/CourseChip';
import {RegistrationItem} from '../../models';
import {useTeachersDialog} from './components/useTeachersDialog';

export const renderRegistrationDetail = (item: RegistrationItem) => {
  const {registrationId, currentYearCourse} = item

  if (currentYearCourse!=='-') {
    return <CourseChip courseName={currentYearCourse}/>
  }

  return !!registrationId ?
  <span style={{color: 'green'}}>Đã ghi danh</span>:<span style={{color: 'red'}}>Chưa ghi danh</span>
}

export const ResultTable = ({students}: { students: RegistrationItem[] }) => {
  const {Dialog, showModal} = useTeachersDialog()
  return <>
    <Dialog/>
    <TableContainer component={Paper}>
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
              {student.currentYearCourse!=='-'
              ? <Link component='button' style={{textAlign:'left'}} onClick={() => showModal(student)}>{student.fullName}</Link>
              : student.fullName}
            </TableCell>
            <TableCell>{student.birthYear}</TableCell>
            <TableCell>{student.lastYearCourse}</TableCell>
            <TableCell>{renderRegistrationDetail(student)}</TableCell>
          </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </>

}
