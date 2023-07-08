import { createTheme } from '@mui/material/styles';
import palette from './palette'

export let theme = createTheme()
theme = createTheme({
    palette: {
        primary: { // these colors that we created here will be the default colors for material ui components
            main: palette.primary[500]
        },
        secondary: {
            main: palette.secondary[500]
        },
        neutral: {
            dark: palette.neutral[700],
            main: palette.neutral[500],
            light: palette.neutral[100]
        }
    },
    direction: 'rtl',
    spacing: 2.5,
    typography: {
        h1: {
            fontWeight: 700,
            fontSize: 50 ,
            lineHeight: "4rem",
            fontFamily: "IRANSans",
            color: 'black',
            [theme.breakpoints.down('xs')]: {
                fontSize:40 ,
            }
        },
        h2: {
            fontWeight: 700,
            fontSize: 39,
            lineHeight: "3.2857rem",
            fontFamily: "IRANSans",
            color: 'black',
            [theme.breakpoints.down('xs')]: {
                fontSize: 32,
            }
        },
        h3: {
            fontWeight: 600,
            fontSize: 30,
            lineHeight: "2.7rem",
            fontFamily: "IRANSans",
            textAlign: 'left',
            color: 'black',
            [theme.breakpoints.down('xs')]: {
                fontSize: 28,
            }
        },
        h4: {
            fontWeight: 700,
            fontSize: 25,
            lineHeight: "2.43rem",
            fontFamily: "IRANSans",
            color: 'black',
            [theme.breakpoints.down('xs')]: {
                fontSize: 22,
            }
        },
        h5: {
            fontWeight: 600,
            fontSize: 20,
            lineHeight: "2.14rem",
            fontFamily: "IRANSans",
            color: "black",
            [theme.breakpoints.down('xs')]: {
                fontSize: 18,
            }
        },
        h6: {
            fontWeight: 400,
            fontSize: 16,
            lineHeight: "1.857rem",
            fontFamily: "IRANSans",
            color: 'black',
            [theme.breakpoints.down('xs')]: {
                fontSize: 14,
            }
        },
        subtitle1: {
            fontWeight: 400,
            fontSize: 18,
            lineHeight: "2rem",
            fontFamily: "IRANSans",
            marginTop: 15,
            [theme.breakpoints.down('xs')]: {
                fontSize: 15,
            }
        },
        body1: {
            fontWeight: 400,
            fontSize: 16,
            lineHeight: "1.8rem",
            fontFamily: "IRANSans",
            color: "black",
            textAlign:"justify",
            [theme.breakpoints.down('xs')]: {
                fontSize: 13,
            }
        },
        body2: {
            fontWeight: 600,
            fontSize: 13,
            lineHeight: "1.8rem",
            width: "100%",
            letterSpacing: 1,
            fontFamily: "IRANSans",
            color: "black",
            textAlign: 'center',
            [theme.breakpoints.down('xs')]: {
                fontSize: 11,
            }
        },
        button: {
            fontSize: 12,
            letterSpacing: 2,
            fontFamily: "IRANSans",
            fontWeight: 400,
            color: "black",
            [theme.breakpoints.down('xs')]: {
                fontSize: 12,
            }
        }
    }
})

// const theme = createTheme({
//     direction: 'rtl',
//   })
  export default theme