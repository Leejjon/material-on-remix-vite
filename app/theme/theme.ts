import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    bg: {
        main: '#fff',
        light: '#F4F5F7'
    },
    text: {
        main: '#172B4D',
        light: '#262930'
    },
    palette: {
        primary: {
            main: '#00cc47',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#222222',
            contrastText: '#ffffff'
        },
        background: {
            paper: '#fafafa',
            default: '#d6d6d6',
        }
    },
    typography: {
        fontFamily: "\"Archivo\", \"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
        fontSize: 12,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        h1: {
            fontWeight: 500,
            fontSize: "1.1rem",
            lineHeight: 1.6,
            letterSpacing: "0.0075em"
        },
        h2: {
            fontSize: "1.5rem",
        },
        body1: {
            color: "rgba(0, 0, 0, 0.87)",
            fontFamily: "Archivo, Roboto, Helvetica, Arial, sans-serif",
            fontWeight: 400,
            fontSize: "1rem",
            lineHeight: 1.5
        },

        button: {
            textTransform: 'none'
        }
    },
    components: {
        MuiDivider: {
            styleOverrides: {
                root: {
                    marginTop: "0.5em"
                }
            }
        }
    }
});

export default theme;
