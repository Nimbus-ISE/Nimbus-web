import { createTheme } from "@mui/material";

const nimbusBlue = "#40E0D0";
const nimbusLightBlue = "#A2ECE8";
const nimbusLightGray = "rgb(243 244 246);";
const nimbusGray = "rgb(107 114 128)";

export const nimbusTheme = createTheme({
    palette: {
        primary: {
            main: nimbusBlue,
            dark: nimbusBlue,
        },
        error: {
            main: "#e57373",
            dark: "#e57373",
        },
        secondary: {
            main: nimbusLightBlue,
            light: "#FFF",
        },
        info: {
            main: nimbusLightGray,
            light: "#FFF",
        },
        success: {
            main: nimbusLightBlue,
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
                        backgroundColor: "#FFF",
                        color: "#000",
                        borderWidth: "2px",
                    },
                },
                {
                    props: { variant: "outlined", color: "secondary" },
                    style: {
                        borderColor: nimbusLightGray,
                        backgroundColor: nimbusLightGray,
                        color: nimbusGray,
                        borderWidth: "2px",
                    },
                },
                {
                    props: { variant: "filled" },
                    style: {
                        border: "2px solid",
                        borderColor: nimbusLightBlue,
                    },
                },
                {
                    props: { variant: "filled", color: "info" },
                    style: {
                        borderColor: nimbusLightGray,
                        backgroundColor: nimbusLightGray,
                        color: nimbusGray,
                        borderWidth: "2px",
                    },
                },
                {
                    props: { variant: "filled", color: "success" },
                    style: {
                        borderColor: nimbusLightBlue,
                        backgroundColor: nimbusLightBlue,
                        color: "#000",
                        borderWidth: "2px",
                        "&:hover": {
                            backgroundColor: nimbusLightBlue,
                        },
                    },
                },
            ],
        },
    },
});

export const datePickerStyles = {
    width: 175,
    boxShadow:
        "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)", // tailwind shadow-md
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

export const BudgetStyles = {
    shrink: "false",
};

export const distanceStyles = {
    margin: "10px",
    borderRadius: "12px",
    width: "180px",
    height: "200px",
    fontSize: "16px",
};
