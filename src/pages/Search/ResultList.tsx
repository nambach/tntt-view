import React from "react";
import {
    List,
    ListItem,
    ListItemText,
    Typography,
    Box, Stack,
} from "@mui/material";
import {RegistrationItem} from "../../models";
import {renderRegistrationDetail} from "./ResultTable";
import {useTeachersDialog} from "./components/useTeachersDialog";

const buildTitle = (saintName: string | undefined, fullName: string, birthYear: number | undefined) => {
    const arr: any[] = [];
    if (saintName != null && !saintName.includes('thánh')) {
        arr.push(saintName);
    }
    arr.push(<b> {fullName} </b>)
    if (birthYear != null) {
        arr.push(`(${birthYear})`)
    }
    return arr;
}

export function StudentList({students}: { students: RegistrationItem[] }) {
    const {Dialog, showModal} = useTeachersDialog()

    return (
        <>
            <Dialog/>
            <List sx={{width: "100%", maxWidth: 400, mx: "auto"}}>
                {students.map((student, index) => (
                    <ListItem
                        onClick={() => showModal(student)}
                        key={index}
                        sx={{
                            cursor: "pointer",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            borderRadius: 2,
                            border: "1px solid lightgray",
                            mb: 2,
                            p: 2,
                            bgcolor: "background.paper",
                        }}
                    >
                        <ListItemText
                            primary={buildTitle(student.canonicalSaintName, student.fullName, student.birthYear)}
                            secondary={
                                <Stack mt={1} spacing={1}>
                                    <div>{renderRegistrationDetail(student)}</div>
                                    {student.lastYearCourse && student.lastYearCourse !== '-' &&
                                        <Typography variant="body2" color="text.secondary">
                                            Lớp cũ: {student.lastYearCourse}
                                        </Typography>
                                    }
                                </Stack>
                            }
                        />


                    </ListItem>
                ))}
            </List>
        </>
    );
}
