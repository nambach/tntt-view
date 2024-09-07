import {useContext, useState} from 'react';
import {useLazyGetCourseTeachersQuery} from '../../../api/registration';
import {Course, RegistrationItem, Teacher} from '../../../models';
import {CoursesContext} from '../CoursesContext';
import {TeachersDialog} from './TeachersDialog';

export const useTeachersDialog = () => {
  const [open, setOpen] = useState(false)
  const [course, setCourse] = useState<Course | undefined>()
  const [student, setStudent] = useState<RegistrationItem | undefined>()
  const [fetch, {data, isFetching}] = useLazyGetCourseTeachersQuery()

  const courses = useContext(CoursesContext)

  const showModal = (student: RegistrationItem) => {
    const course = courses.find(c => c.name===student.currentYearCourse)

    if (course==null) {
      return
    }

    setStudent(student)
    setCourse(course)
    setOpen(true)
    fetch({courseId: course?.id || 0})
  }
  const hideModal = () => setOpen(false)

  const Dialog = () => <TeachersDialog course={course} close={hideModal} isOpen={open} teachers={data || []}
                                       isFetching={isFetching} student={student}/>

  return {
    showModal,
    hideModal,
    Dialog
  }
}
