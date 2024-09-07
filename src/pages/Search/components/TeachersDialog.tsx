import {CircularProgress, List, ListItem, ListItemText} from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {useTheme} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import * as React from 'react';
import {CourseChip} from '../../../components/CourseChip';
import {Course, Teacher} from '../../../models';
import {CourseChatLink} from './CourseChatLink';

interface Props {
  course?: Course
  isOpen: boolean
  close: () => void
  isFetching: boolean
  teachers: Teacher[]
}

export const TeachersDialog = ({course, isOpen, close, isFetching, teachers = []}: Props) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClose = () => {
    close()
  };

  return (
  <div>
    <Dialog
    fullScreen={fullScreen}
    open={isOpen}
    onClose={handleClose}
    aria-labelledby="responsive-dialog-title"
    >
      {isFetching ? <CircularProgress/>:
      <><DialogTitle id="responsive-dialog-title">
        {course?.name ? <CourseChip courseName={course.name}/>:null}
      </DialogTitle>
        <DialogContent>
          <b>Giáo lý viên</b>
          {teachers.length === 0 ? <p>Danh sách GLV sẽ được cập nhật sau.</p> : null}
          <ol style={{paddingLeft: '20px'}}>
            {teachers.map(teacher => <li key={teacher.id}>
              {teacher.teacherTitle} {teacher.canonicalSaintName} <b>{teacher.fullName}</b> {teacher.phone ? <> - <a
            href={`tel:${teacher.phone}`}>{teacher.phone}</a></>:null}
            </li>)}
          </ol>

          <br/>
          <b>Liên lạc</b>
          <CourseChatLink courseName={course?.name}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            <b>Đóng</b>
          </Button>
        </DialogActions>
      </>
      }
    </Dialog>
  </div>
  );
}
