import * as React from 'react';
import TextField from '@mui/material/TextField';
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { useState } from "react";
import HalfRating from "./HalfRating";

export default function MultilineTextFields() {

    const paperStyle = { padding: '50px 20px', width: '100%', margin: "20px auto" };
    const [name, setName] = useState('');
    const [ingred, setIngred] = useState('');
    const [steps, setSteps] = useState('');

    return (
        <Container>
            <Paper elevation={3} style={paperStyle}>
                <Stack spacing={2}>
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Name"
                        multiline
                        maxRows={4}
                        fullWidth
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        id="outlined-multiline-static"
                        label="Ingredients"
                        placeholder="Placeholder"
                        multiline
                        rows={4}
                        fullWidth
                        value={ingred}
                        onChange={(e) => setIngred(e.target.value)}
                    />
                    <TextField
                        id="outlined-multiline-static"
                        label="Steps"
                        multiline
                        rows={4}
                        fullWidth
                        value={steps}
                        onChange={(e) => setSteps(e.target.value)}
                    />
                    <Box display="flex" justifyContent="center">
                        <HalfRating />
                    </Box>
                </Stack>
            </Paper>
        </Container>
    );
}
