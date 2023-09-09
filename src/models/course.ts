export interface Course {
  id: number;
  name: string;
  programId: number;
  schoolYearId: number;
  departmentId: number;
  schoolYear: {
    current: boolean;
    name: string;
  };
}

export interface Teacher {
  id: number;
  teacherTitle: string;
  fullName: string;
  canonicalSaintName: string;
  birthYear: number;
  phone: string;
  priority: number;
}
