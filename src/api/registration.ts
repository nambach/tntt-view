import {RegistrationByReceiver, RegistrationItem, RegistrationReq, RegistrationSummaryReq} from '../models'
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
  useGetRegistrationsQuery,
} = registrationApi

export const {
  useGetRegistrationsSummaryQuery,
} = registrationSummaryApi