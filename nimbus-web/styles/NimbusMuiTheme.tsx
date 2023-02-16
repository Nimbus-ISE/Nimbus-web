import { createTheme, ThemeProvider } from "@mui/material";

export const nimbusTheme = createTheme({
    palette: {
        primary: {
            main: "#40E0D0",
            dark: "#40E0D0",
        },
        error: {
            main: "#e57373",
            dark: "#e57373",
        },
    },
    typography: {
        fontFamily: ["Montserrat", "sans-serif"].join(","),
    },
});

export const datePickerStyles = {
    width: 175,
    "& fieldset": {
        borderColor: "rgb(243 244 246)",
        borderWidth: "2px",
        borderRadius: "12px",
    },
    "& .MuiSvgIcon-root": {
        color: "#9ca3af",
    },
    "& .MuiOutlinedInput-root": {
        color: "#9ca3af",
    },
    "& .MuiOutlinedInput-root:hover": {
        "& > fieldset": {
            borderColor: "#f5f5f7",
        },
    },
    "& .MuiFormLabel-root": {
        color: "#9ca3af",
    },
    "& .MuiInputBase-root": {
        paddingRight: "20px",
    },
    "& .MuiInputBase-root:focus": {
        backgroundColor: "white",
    },
};

export const TripTypeStyles = {
    "& .MuiOutlinedInput-notchedOutline": {
        border: "none",
        borderRadius: "12px",
    },
    "& fieldset": {
        borderRadius: "12px",
    },
};
