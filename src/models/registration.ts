export interface RegistrationItem {
  studentId: number;
  canonicalSaintName: string;
  fullName: string;
  birthYear: number;
  lastYearCourse: string;
  currentYearCourse: string;
  registrationId: number;
  nextProgramLabel: string;
  nextProgramName: string;
}

export interface RegistrationReq {
  search: string
}
