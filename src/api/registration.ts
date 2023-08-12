import {RegistrationItem, RegistrationReq} from '../models'
import {api} from './baseRtkqApi'

export const authenticationApi = api.injectEndpoints({
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

//TODO: define endpoint registration-summary
// /api/registration/school-year/${schoolYearId}/by-receiver

export const {
  useGetRegistrationsQuery,
} = authenticationApi
