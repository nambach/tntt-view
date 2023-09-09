import {
  Course,
  RegistrationByReceiver,
  RegistrationItem,
  RegistrationReq,
  RegistrationSummaryReq,
  Teacher
} from '../models'
import {api} from './baseRtkqApi'

export const registrationApi = api.injectEndpoints({
  endpoints: (build) => ({
    getRegistrations: build.query<RegistrationItem[], RegistrationReq>({
      query: (queryArg) => ({
        url: `/api/registration/current-year/check-registration-status`,
        method: 'GET',
        params: queryArg
      }),
    }),
    getAllCourses: build.query<Course[], void>({
      query: () => ({
        url: `/api/course/all/this-year`,
        method: 'GET',
      })
    }),
    getCourseTeachers: build.query<Teacher[], { courseId: number }>({
      query: (params) => ({
        url: `/api/course/${params.courseId}/enrollment?entities=teachers`,
        method: 'GET'
      }),
      transformResponse: (resp: { teachers: Teacher[] }) => resp.teachers
    })
  }),
  overrideExisting: false,
})

export const registrationSummaryApi = api.injectEndpoints({
  endpoints: (build) => ({
    getRegistrationsSummary: build.query<RegistrationByReceiver, RegistrationSummaryReq>({
      query: (param) => ({
        url: `/api/registration/school-year/${param.schoolYearId || 5}/by-receiver`,
        method: 'GET',
      }),
    }),
  }),
  overrideExisting: false,
})

export const {
  useGetAllCoursesQuery,
  useLazyGetCourseTeachersQuery,
  useLazyGetRegistrationsQuery ,
} = registrationApi

export const {
  useGetRegistrationsSummaryQuery,
} = registrationSummaryApi
