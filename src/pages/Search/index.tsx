import SearchIcon from "@mui/icons-material/Search";
import {
  Alert,
  Button,
  Grid,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import {useGetAllCoursesQuery,  useLazyGetRegistrationsQuery} from "../../api/registration";
import { useLoader } from "../../components/Loader";
import { normalizeSpecialVietnameseText, trimSpace } from '../../utils/text-utils';
import {CoursesContext} from './CoursesContext';
import { ResultTable } from "./ResultTable";
import styles from "./Search.desktop.module.css";

interface SearchProps {
  isBlocked: boolean;
}

const Search = ({ isBlocked }: SearchProps) => {
  const [name, setName] = useState("");
  const [search, setSearch] = useState("");
  const [touched, setTouched] = useState(false);
  const [fetchStudents, {data: students, isFetching: isFetchingStudents}] = useLazyGetRegistrationsQuery();
  const { data: courses, isFetching: isFetchingCourses } = useGetAllCoursesQuery();
  const { Loader } = useLoader();

  const shouldShowError = () => {
    return touched && name.length <= 2
  }

  const handleSearch = () => {
    setTouched(true)
    if (isBlocked || name.length <= 2) return;
    const search = normalizeSpecialVietnameseText(trimSpace(name))
    setSearch(search);
    fetchStudents({search})
  };

  return (
    <CoursesContext.Provider value={courses || []}>
      <Loader loading={isFetchingStudents || isFetchingCourses} />
      <Grid container spacing={2}>
        <Grid item xs={0} sm={2}></Grid>
        <Grid item xs={12} sm={8}>
          <Stack margin={4} spacing={6}>
            <Stack spacing={2}>
              <TextField
                className={styles.searchInput}
                value={name}
                onKeyUp={(e) => {
                  if (e["key"] === "Enter") {
                    handleSearch();
                  }
                }}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nhập họ tên đoàn sinh"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                helperText={shouldShowError() ? 'Vui lòng nhập từ 3 kí tự trở lên' : undefined}
              />
              <Button variant="contained" onClick={() => handleSearch()}>
                Tìm
              </Button>
              <Stack direction="row" spacing={2} justifySelf="stretch">
                <Alert severity="warning">
                  Website chưa hỗ trợ tìm theo tên Thánh.
                </Alert>
              </Stack>
            </Stack>
            {students?.length ? (
              <ResultTable students={students} />
            ) : search && !isFetchingStudents ? (
              <div>Không tìm thấy đoàn sinh.</div>
            ) : (
              <></>
            )}
          </Stack>
        </Grid>
        <Grid item xs={0} sm={2}></Grid>
      </Grid>
    </CoursesContext.Provider>
  );
};

export default Search;
