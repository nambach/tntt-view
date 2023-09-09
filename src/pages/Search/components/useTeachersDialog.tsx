import {useContext, useState} from 'react';
import {useLazyGetCourseTeachersQuery} from '../../../api/registration';
import {Course} from '../../../models';
import {CoursesContext} from '../CoursesContext';
import {TeachersDialog} from './TeachersDialog';

export const useTeachersDialog = () => {
  const [open, setOpen] = useState(false)
  const [course, setCourse] = useState<Course | undefined>()
  const [fetch, {data, isFetching}] = useLazyGetCourseTeachersQuery()

  const courses = useContext(CoursesContext)

  const showModal = (courseName: string) => {
    const course = courses.find(c => c.name===courseName)

    if (course==null) {
      return
    }

    setCourse(course)
    setOpen(true)
    fetch({courseId: course?.id || 0})
  }
  const hideModal = () => setOpen(false)

  const Dialog = () => <TeachersDialog course={course} close={hideModal} isOpen={open} teachers={data || []}
                                       isFetching={isFetching}/>

  return {
    showModal,
    hideModal,
    Dialog
  }
}
