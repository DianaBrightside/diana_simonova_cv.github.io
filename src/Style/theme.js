import {
    createTheme
} from "@mui/material";


export const theme = createTheme({
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    fontFamily: 'Roboto',
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
                    backgroundColor: "#fff",
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
        },
        MuiLink: {
            styleOverrides: {
                root: {
                    fontWeight: 'bold',
                    color: '#373037',
                    textDecorationColor: '#808080'
                }
            }
        },
    }
})