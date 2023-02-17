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
        secondary: {
            main: "#A2ECE8",
            light: "#FFF",
        },
    },
    typography: {
        fontFamily: ["Montserrat", "sans-serif"].join(","),
    },
    components: {
        MuiChip: {
            variants: [
                {
                    props: { variant: "outlined" },
                    style: {
                        borderColor: "#000",
                        color: "#000",
                        borderWidth: "2px",
                    },
                },
            ],
        },
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
    borderRadius: "12px",
    "& .MuiOutlinedInput-notchedOutline": {
        border: "none",
    },
    "& fieldset": {
        borderRadius: "12px",
    },
};

export const TagsStyles = {
    margin: "3px",
    borderRadius: "12px",
};
