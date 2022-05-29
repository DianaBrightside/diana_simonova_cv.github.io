import {
    createTheme
} from "@mui/material";


export const theme = createTheme({
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    fontFamily: 'sans-serif',
                    color: '#373037'
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
                    fontFamily: "sans-serif"
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    color: '#373037',
                    fontFamily: "sans-serif"
                }
            }
        }
    }
})