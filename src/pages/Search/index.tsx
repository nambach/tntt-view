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
import { useGetRegistrationsQuery } from "../../api/registration";
import { useLoader } from "../../components/Loader";
import { ResultTable } from "./ResultTable";
import styles from "./Search.desktop.module.css";

interface SearchProps {
  isBlocked: boolean;
}

const Search = ({ isBlocked }: SearchProps) => {
  const [name, setName] = useState("");
  const [search, setSearch] = useState("");
  const { data, isFetching } = useGetRegistrationsQuery({ search });
  const { Loader } = useLoader();

  const handleSearch = () => {
    if (isBlocked) return;
    setSearch(name);
  };

  return (
    <>
      <Loader loading={isFetching} />
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
            {data?.length ? (
              <ResultTable students={data} />
            ) : search && !isFetching ? (
              <div>Không tìm thấy đoàn sinh.</div>
            ) : (
              <></>
            )}
          </Stack>
        </Grid>
        <Grid item xs={0} sm={2}></Grid>
      </Grid>
    </>
  );
};

export default Search;
