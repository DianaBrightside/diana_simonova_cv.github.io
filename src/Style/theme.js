import {
    createTheme
} from "@mui/material";


export const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: '#454952'
                }
            }
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    boxShadow: 'none'
                }
            }
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: "#EEEFF1",
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    color: '#191B1F'
                }
            }
        }
    }
})