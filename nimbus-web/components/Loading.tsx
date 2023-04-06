import { CircularProgress } from "@mui/material";
import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { nimbusTheme } from "@/styles/NimbusMuiTheme";

const Loading = () => (
    <ThemeProvider theme={nimbusTheme}>
        <div className="m-auto">
            <CircularProgress color="primary" />
        </div>
    </ThemeProvider>
);

export default Loading;
