import { createTheme, ThemeOptions } from '@mui/material/styles'
import { IBM_Plex_Sans_Thai } from 'next/font/google'

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    fontLight24: true
    fontLight30: true
    fontNormal16: true
    fontNormalVw12: true
    fontNormalVw13: true
    fontNormalVw14: true
    fontNormalVw14Sm10: true
    fontNormalVw14Sm12: true
    fontNormalVw14Sm13: true
    fontNormalVw16Sm10: true
    fontNormalVw16Sm12: true
    fontNormalVw16Sm13: true
    fontNormalVw16Sm14: true
    fontNormalVw16Md12Sm12: true
    fontNormalVw16Md14Sm12: true
    fontNormalVw16Md14Sm13: true
    fontNormalVw16Md15Sm13: true
    fontNormalVw16Md14Sm14: true
    fontNormalVw16Md15Sm14: true
    fontNormalVw16Md15Sm15: true
    fontNormalVw16Md16Sm10: true
    fontNormalVw16Md16Sm16: true
    fontNormalVw18Md16Sm16: true
    fontNormalVw18Md16: true
    fontNormalVw18Md16Sm14: true
    fontNormalVw26: true
    fontNormalVw26Md20Sm16: true
    fontMedium18: true
    fontMediumVw12: true
    fontMediumVw12Md12Sm12: true
    fontMediumVw14: true
    fontMediumVw14Md10: true
    fontMediumVw14Sm12: true
    fontMediumVw14Md10Sm10: true
    fontMediumVw14Md14Sm14: true
    fontMediumVw16: true
    fontMediumVw16Sm13: true
    fontMediumVw16Sm14: true
    fontMediumVw16Md12: true
    fontMediumVw16Md13Sm12: true
    fontMediumVw16Md14Sm12: true
    fontMediumVw16Md15Sm14: true
    fontMediumVw16Md16Sm12: true
    fontMediumVw16Md16Sm16: true
    fontMediumVw18: true
    fontMediumVw18Sm13: true
    fontMediumVw18Md17Sm16: true
    fontMediumVw18Md18Sm18: true
    fontMediumVw20: true
    fontMediumVw20Md18Sm14: true
    fontMediumVw20Md18Sm16: true
    fontMediumVw22Md16Sm15: true
    fontMediumVw22Md20Sm18: true
    fontMediumVw24Md19Sm18: true
    fontMediumVw24Md20Sm16: true
    fontMediumVw24Md20Sm18: true
    fontMediumVw24Md22Sm18: true
    fontMediumVw26Md18Sm16: true
    fontMediumVw26Md20Sm18: true
    fontMediumVw30Md22Sm16: true
    fontMediumVw30Md22Sm18: true
    fontMediumVw30Md24Sm18: true
    fontMediumVw30Md24Sm20: true
    fontMediumVw32Sm15: true
    fontMediumVw32Md22Sm18: true
    fontMediumVw32Md22Sm16: true
    fontMediumVw32Md24Sm18: true
    fontMediumVw32Md24Sm24: true
    fontMediumVw32Md32Sm32: true
    fontMediumVw36Md18: true
    fontMediumVw40: true
    fontMediumVw40Md30Sm24: true
    fontMediumVw50: true
    fontSemiBoldVw12: true
    fontSemiBoldVw14: true
    fontSemiBoldVw16Md16Sm14: true
    fontSemiBoldVw20: true
    fontSemiBoldVw32: true
    fontSemiBoldVw32Md22Sm20: true
    fontBoldVw24Md22Sm20: true
    fontBoldVw30Md22Sm18: true
    fontBoldVw30Md24Sm18: true
    fontBoldVw52Md36Sm24: true
  }
}

const ibmTh = IBM_Plex_Sans_Thai({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  subsets: ['latin', 'thai'],
})

let defaultTheme = createTheme({
  palette: {
    blue: {
      blue1: ' #014F86',
      blue2: ' #2A78AE',
      blue3: ' #4794CB',
      blue4: ' #DAECF9',
    },
    gold: {
      gold1: ' #B49441',
      gold2: ' #D4BC7D',
      gold3: ' #F8ECCD',
    },
    black: {
      black1: ' #1F2223',
      black2: ' #363939',
      black3: ' #57595A',
      black4: ' #797A7B',
      black5: ' #8E9090',
      black6: ' #B1B2B2',
      black7: ' #D2D3D3',
      black8: ' #EFEFEF',
      black9: ' #F6F6F6',
      black10: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: `${ibmTh.style.fontFamily}`,
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 361,
      md: 769,
      lg: 1200,
      xl: 1400,
    },
  },
} as ThemeOptions)

defaultTheme = createTheme(defaultTheme, {
  typography: {
    fontLight30: {
      fontSize: '2.083vw',
      fontWeight: 300,
      [defaultTheme.breakpoints.down('md')]: {
        fontSize: '2.344vw',
      },
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '4.167vw',
      },
    },
    fontLight24: {
      fontSize: '1.667vw',
      fontWeight: 300,
      [defaultTheme.breakpoints.down('md')]: {
        fontSize: '2.083vw',
      },
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '3.611vw',
      },
    },
    fontNormal16: {
      fontSize: '1.111vw',
      fontWeight: 400,
      [defaultTheme.breakpoints.down('md')]: { fontSize: '2.083vw' },
      [defaultTheme.breakpoints.down('sm')]: { fontSize: '4.444vw' },
    },

    fontNormalVw12: {
      fontSize: '0.833vw',
      fontWeight: 400,
      [defaultTheme.breakpoints.down('md')]: { fontSize: '1.563vw' },
      [defaultTheme.breakpoints.down('sm')]: { fontSize: '2.778vw' },
    },
    fontNormalVw13: {
      fontSize: '0.903vw',
      fontWeight: 400,
      [defaultTheme.breakpoints.down('md')]: { fontSize: '1.693vw' },
      [defaultTheme.breakpoints.down('sm')]: { fontSize: '3.611vw' },
    },
    fontNormalVw14: {
      fontSize: '0.972vw',
      fontWeight: 400,
      [defaultTheme.breakpoints.down('md')]: {
        fontSize: '1.313vw',
      },
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '2.268vw',
      },
    },
    fontNormalVw14Sm10: {
      fontSize: '0.972vw',
      fontWeight: 400,
      [defaultTheme.breakpoints.down('md')]: {
        fontSize: '1.823vw',
      },
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '3.611vw',
      },
    },
    fontNormalVw14Sm12: {
      fontSize: '0.972vw',
      fontWeight: 400,
      [defaultTheme.breakpoints.down('md')]: {
        fontSize: '1.823vw',
      },
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '3.333vw',
      },
    },
    fontNormalVw14Sm13: {
      fontSize: '0.972vw',
      fontWeight: 400,
      [defaultTheme.breakpoints.down('md')]: {
        fontSize: '1.823vw',
      },
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '3.611vw',
      },
    },
    fontNormalVw16Sm10: {
      fontSize: '1.111vw',
      fontWeight: 400,
      [defaultTheme.breakpoints.down('md')]: {
        fontSize: '1.823vw',
      },
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '3.611vw',
      },
    },
    fontNormalVw16Sm12: {
      fontSize: '1.111vw',
      fontWeight: 400,
      [defaultTheme.breakpoints.down('md')]: {
        fontSize: '1.823vw',
      },
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '3.333vw',
      },
    },
    fontNormalVw16Sm13: {
      fontSize: '1.111vw',
      fontWeight: 400,
      [defaultTheme.breakpoints.down('md')]: {
        fontSize: '2.083vw',
      },
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '3.611vw',
      },
    },
    fontNormalVw16Sm14: {
      fontSize: '1.111vw',
      fontWeight: 400,
      [defaultTheme.breakpoints.down('md')]: {
        fontSize: '2.083vw',
      },
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '3.889vw',
      },
    },
    fontNormalVw16Md12Sm12: {
      fontSize: '1.111vw',
      fontWeight: 400,
      [defaultTheme.breakpoints.down('md')]: { fontSize: '1.563vw' },
      [defaultTheme.breakpoints.down('sm')]: { fontSize: '3.333vw' },
    },
    fontNormalVw16Md14Sm12: {
      fontSize: '1.111vw',
      fontWeight: 400,
      [defaultTheme.breakpoints.down('md')]: { fontSize: '1.823vw' },
      [defaultTheme.breakpoints.down('sm')]: { fontSize: '3.333vw' },
    },
    fontNormalVw16Md14Sm14: {
      fontSize: '1.111vw',
      fontWeight: 400,
      [defaultTheme.breakpoints.down('md')]: { fontSize: '1.823vw' },
      [defaultTheme.breakpoints.down('sm')]: { fontSize: '3.889vw' },
    },
    fontNormalVw16Md14Sm13: {
      fontSize: '1.111vw',
      fontWeight: 400,
      [defaultTheme.breakpoints.down('md')]: { fontSize: '1.823vw' },
      [defaultTheme.breakpoints.down('sm')]: { fontSize: '3.612vw' },
    },
    fontNormalVw16Md15Sm13: {
      fontSize: '1.111vw',
      fontWeight: 400,
      [defaultTheme.breakpoints.down('md')]: {
        fontSize: '1.953vw',
      },
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '3.611vw',
      },
    },
    fontNormalVw16Md15Sm15: {
      fontSize: '1.111vw',
      fontWeight: 400,
      [defaultTheme.breakpoints.down('md')]: {
        fontSize: '1.953vw',
      },
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '4.167vw',
      },
    },
    fontNormalVw16Md15Sm14: {
      fontSize: '1.111vw',
      fontWeight: 400,
      [defaultTheme.breakpoints.down('md')]: {
        fontSize: '1.953vw',
      },
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '3.889vw',
      },
    },
    fontNormalVw16Md16Sm10: {
      fontSize: '1.111vw',
      fontWeight: 400,
      [defaultTheme.breakpoints.down('md')]: {
        fontSize: '2.083vw',
      },
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '3.611vw',
      },
    },
    fontNormalVw16Md16Sm16: {
      fontSize: '1.111vw',
      fontWeight: 400,
      [defaultTheme.breakpoints.down('md')]: {
        fontSize: '2.083vw',
      },
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '4.444vw',
      },
    },
    fontNormalVw18Md16: {
      fontSize: '1.250vw',
      fontWeight: 400,
      [defaultTheme.breakpoints.down('md')]: {
        fontSize: '2.083vw',
      },
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '4.444vw',
      },
    },
    fontNormalVw18Md16Sm14: {
      fontSize: '1.250vw',
      fontWeight: 400,
      [defaultTheme.breakpoints.down('md')]: {
        fontSize: '2.083vw',
      },
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '3.889vw',
      },
    },
    fontNormalVw18Md16Sm16: {
      fontSize: '1.250vw',
      fontWeight: 400,
      [defaultTheme.breakpoints.down('md')]: { fontSize: '2.083vw' },
      [defaultTheme.breakpoints.down('sm')]: { fontSize: '4.444vw' },
    },
    fontMedium18: {
      fontSize: '18px',
      fontWeight: 500,
    },
    fontNormalVw26: {
      fontSize: '1.806vw',
      fontWeight: 400,
    },
    fontNormalVw26Md20Sm16: {
      fontSize: '1.806vw',
      fontWeight: 400,
      [defaultTheme.breakpoints.down('md')]: { fontSize: '2.604vw' },
      [defaultTheme.breakpoints.down('sm')]: { fontSize: '4.444vw' },
    },
    fontMediumVw12: {
      fontSize: '0.833vw',
      fontWeight: 500,
      [defaultTheme.breakpoints.down('md')]: { fontSize: '1.563vw' },
      [defaultTheme.breakpoints.down('sm')]: { fontSize: '2.222vw' },
    },
    fontMediumVw12Md12Sm12: {
      fontSize: '0.833vw',
      fontWeight: 500,
      [defaultTheme.breakpoints.down('md')]: { fontSize: '1.563vw' },
      [defaultTheme.breakpoints.down('sm')]: { fontSize: '3.333vw' },
    },
    fontMediumVw14: {
      fontSize: '0.972vw',
      fontWeight: 500,
      [defaultTheme.breakpoints.down('md')]: {
        fontSize: '1.563vw',
      },
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '2.778vw',
      },
    },
    fontMediumVw14Md10: {
      fontSize: '0.972vw',
      fontWeight: 500,
      [defaultTheme.breakpoints.down('md')]: {
        fontSize: '1.302vw',
      },
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '2.778vw',
      },
    },
    fontMediumVw14Sm12: {
      fontSize: '0.972vw',
      fontWeight: 500,
      [defaultTheme.breakpoints.down('md')]: {
        fontSize: '1.823vw',
      },
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '3.333vw',
      },
    },
    fontMediumVw14Md10Sm10: {
      fontSize: '0.972vw',
      fontWeight: 500,
      [defaultTheme.breakpoints.down('md')]: {
        fontSize: '1.302vw',
      },
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '2.778vw',
      },
    },
    fontMediumVw14Md14Sm14: {
      fontSize: '0.972vw',
      fontWeight: 500,
      [defaultTheme.breakpoints.down('md')]: {
        fontSize: '1.823vw',
      },
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '3.889vw',
      },
    },
    fontMediumVw16: {
      fontSize: '1.111vw',
      fontWeight: 500,
      [defaultTheme.breakpoints.down('md')]: {
        fontSize: '1.823vw',
      },
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '3.333vw',
      },
    },
    fontMediumVw16Sm13: {
      fontSize: '1.111vw',
      fontWeight: 500,
      [defaultTheme.breakpoints.down('md')]: { fontSize: '2.083vw' },
      [defaultTheme.breakpoints.down('sm')]: { fontSize: '3.611vw' },
    },
    fontMediumVw16Sm14: {
      fontSize: '1.111vw',
      fontWeight: 500,
      [defaultTheme.breakpoints.down('md')]: { fontSize: '1.823vw' },
      [defaultTheme.breakpoints.down('sm')]: { fontSize: '3.889vw' },
    },
    fontMediumVw16Md12: {
      fontSize: '1.111vw',
      fontWeight: 500,
      [defaultTheme.breakpoints.down('md')]: { fontSize: '1.563vw' },
      [defaultTheme.breakpoints.down('sm')]: { fontSize: '3.333vw' },
    },
    fontMediumVw16Md13Sm12: {
      fontSize: '1.111vw',
      fontWeight: 500,
      [defaultTheme.breakpoints.down('md')]: { fontSize: '1.693vw' },
      [defaultTheme.breakpoints.down('sm')]: { fontSize: '3.333vw' },
    },
    fontMediumVw16Md14Sm12: {
      fontSize: '1.111vw',
      fontWeight: 500,
      [defaultTheme.breakpoints.down('md')]: { fontSize: '1.823vw' },
      [defaultTheme.breakpoints.down('sm')]: { fontSize: '3.333vw' },
    },
    fontMediumVw16Md15Sm14: {
      fontSize: '1.111vw',
      fontWeight: 500,
      [defaultTheme.breakpoints.down('md')]: { fontSize: '1.953vw' },
      [defaultTheme.breakpoints.down('sm')]: { fontSize: '3.889vw' },
    },
    fontMediumVw16Md16Sm12: {
      fontSize: '1.111vw',
      fontWeight: 500,
      [defaultTheme.breakpoints.down('md')]: { fontSize: '2.083vw' },
      [defaultTheme.breakpoints.down('sm')]: { fontSize: '3.333vw' },
    },
    fontMediumVw16Md16Sm16: {
      fontSize: '1.111vw',
      fontWeight: 500,
      [defaultTheme.breakpoints.down('md')]: { fontSize: '2.083vw' },
      [defaultTheme.breakpoints.down('sm')]: { fontSize: '4.444vw' },
    },
    fontMediumVw18: {
      fontSize: '1.250vw',
      fontWeight: 500,
    },
    fontMediumVw18Sm13: {
      fontSize: '1.250vw',
      fontWeight: 500,
      [defaultTheme.breakpoints.down('md')]: {
        fontSize: '1.823vw',
      },
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '3.611vw',
      },
    },
    fontMediumVw18Md17Sm16: {
      fontSize: '1.250vw',
      fontWeight: 500,
      [defaultTheme.breakpoints.down('md')]: {
        fontSize: '2.214vw',
      },
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '4.444vw',
      },
    },
    fontMediumVw18Md18Sm18: {
      fontSize: '1.250vw',
      fontWeight: 500,
      [defaultTheme.breakpoints.down('md')]: {
        fontSize: '2.344vw',
      },
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '5vw',
      },
    },
    fontMediumVw20: {
      fontSize: '1.389vw',
      fontWeight: 500,
      [defaultTheme.breakpoints.down('md')]: { fontSize: '2.604vw' },
      [defaultTheme.breakpoints.down('sm')]: { fontSize: '3.333vw' },
    },
    fontMediumVw20Md18Sm14: {
      fontSize: '1.389vw',
      fontWeight: 500,
      [defaultTheme.breakpoints.down('md')]: {
        fontSize: '2.344vw',
      },
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '3.889vw',
      },
    },
    fontMediumVw20Md18Sm16: {
      fontSize: '1.389vw',
      fontWeight: 500,
      [defaultTheme.breakpoints.down('md')]: {
        fontSize: '2.344vw',
      },
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '4.444vw',
      },
    },
    fontMediumVw22Md16Sm15: {
      fontSize: '1.528vw',
      fontWeight: 500,
      [defaultTheme.breakpoints.down('md')]: {
        fontSize: '2.083vw',
      },
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '4.167vw',
      },
    },
    fontMediumVw22Md20Sm18: {
      fontSize: '1.528vw',
      fontWeight: 500,
      [defaultTheme.breakpoints.down('md')]: {
        fontSize: '2.604vw',
      },
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '5vw',
      },
    },
    fontMediumVw24Md19Sm18: {
      fontSize: '1.667vw',
      fontWeight: 500,
      [defaultTheme.breakpoints.down('md')]: {
        fontSize: '2.474vw',
      },
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '5vw',
      },
    },
    fontMediumVw24Md20Sm16: {
      fontSize: '1.667vw',
      fontWeight: 500,
      [defaultTheme.breakpoints.down('md')]: {
        fontSize: '2.604vw',
      },
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '4.444vw',
      },
    },
    fontMediumVw24Md20Sm18: {
      fontSize: '1.667vw',
      fontWeight: 500,
      [defaultTheme.breakpoints.down('md')]: {
        fontSize: '2.604vw',
      },
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '5vw',
      },
    },
    fontMediumVw24Md22Sm18: {
      fontSize: '1.667vw',
      fontWeight: 500,
      [defaultTheme.breakpoints.down('md')]: {
        fontSize: '2.865vw',
      },
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '5vw',
      },
    },
    fontMediumVw26Md18Sm16: {
      fontSize: '1.806vw',
      fontWeight: 500,
      [defaultTheme.breakpoints.down('md')]: {
        fontSize: '2.344vw',
      },
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '4.444vw',
      },
    },
    fontMediumVw26Md20Sm18: {
      fontSize: '1.806vw',
      fontWeight: 500,
      [defaultTheme.breakpoints.down('md')]: {
        fontSize: '2.604vw',
      },
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '5vw',
      },
    },
    fontMediumVw30Md22Sm16: {
      fontSize: '2.083vw',
      fontWeight: 500,
      [defaultTheme.breakpoints.down('md')]: { fontSize: '2.865vw' },
      [defaultTheme.breakpoints.down('sm')]: { fontSize: '4.444vw' },
    },
    fontMediumVw30Md22Sm18: {
      fontSize: '2.083vw',
      fontWeight: 500,
      [defaultTheme.breakpoints.down('md')]: { fontSize: '2.865vw' },
      [defaultTheme.breakpoints.down('sm')]: { fontSize: '5vw' },
    },
    fontMediumVw30Md24Sm18: {
      fontSize: '2.083vw',
      fontWeight: 500,
      [defaultTheme.breakpoints.down('md')]: {
        fontSize: '3.125vw',
      },
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '5vw',
      },
    },
    fontMediumVw30Md24Sm20: {
      fontSize: '2.083vw',
      fontWeight: 500,
      [defaultTheme.breakpoints.down('md')]: {
        fontSize: '3.125vw',
      },
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '5.556vw',
      },
    },

    fontMediumVw32Sm15: {
      fontSize: '2.222vw',
      fontWeight: 500,
      [defaultTheme.breakpoints.down('md')]: {
        fontSize: '2.865vw',
      },
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '4.167vw',
      },
    },
    fontMediumVw32Md22Sm16: {
      fontSize: '2.222vw',
      fontWeight: 500,
      [defaultTheme.breakpoints.down('md')]: {
        fontSize: '2.865vw',
      },
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '4.444vw',
      },
    },
    fontMediumVw32Md22Sm18: {
      fontSize: '2.222vw',
      fontWeight: 500,
      [defaultTheme.breakpoints.down('md')]: {
        fontSize: '2.865vw',
      },
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '5vw',
      },
    },
    fontMediumVw32Md24Sm18: {
      fontSize: '2.222vw',
      fontWeight: 500,
      [defaultTheme.breakpoints.down('md')]: {
        fontSize: '3.125vw',
      },
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '5vw',
      },
    },
    fontMediumVw32Md24Sm24: {
      fontSize: '2.222vw',
      fontWeight: 500,
      [defaultTheme.breakpoints.down('md')]: {
        fontSize: '3.125vw',
      },
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '6.667vw',
      },
    },
    fontMediumVw32Md32Sm32: {
      fontSize: '2.222vw',
      fontWeight: 500,
      [defaultTheme.breakpoints.down('md')]: {
        fontSize: '4.167vw',
      },
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '8.889vw',
      },
    },
    fontMediumVw36Md18: {
      fontSize: '2.500vw',
      fontWeight: 500,
      [defaultTheme.breakpoints.down('md')]: {
        fontSize: '2.344vw',
      },
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '5vw',
      },
    },
    fontMediumVw40: {
      fontSize: '2.778vw',
      fontWeight: 500,
      [defaultTheme.breakpoints.down('md')]: {
        fontSize: '3.125vw',
      },
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '5.556vw',
      },
    },
    fontMediumVw40Md30Sm24: {
      fontSize: '2.778vw',
      fontWeight: 500,
      [defaultTheme.breakpoints.down('md')]: {
        fontSize: '3.906vw',
      },
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '6.667vw',
      },
    },
    fontMediumVw50: {
      fontSize: '3.472vw',
      fontWeight: 500,
      [defaultTheme.breakpoints.down('md')]: {
        fontSize: '5.208vw',
      },
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '8.889vw',
      },
    },
    fontSemiBoldVw12: {
      fontSize: '0.833vw',
      fontWeight: 600,
      [defaultTheme.breakpoints.down('md')]: { fontSize: '1.563vw' },
      [defaultTheme.breakpoints.down('sm')]: { fontSize: '3.333vw' },
    },
    fontSemiBoldVw14: {
      fontSize: '0.972vw',
      fontWeight: 600,
      [defaultTheme.breakpoints.down('md')]: {
        fontSize: '1.563vw',
      },
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '3.333vw',
      },
    },
    fontSemiBoldVw16Md16Sm14: {
      fontSize: '1.111vw',
      fontWeight: 600,
      [defaultTheme.breakpoints.down('md')]: { fontSize: '2.083vw' },
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '3.889vw',
      },
    },
    fontSemiBoldVw20: {
      fontSize: '1.389vw',
      fontWeight: 600,
      [defaultTheme.breakpoints.down('md')]: { fontSize: '2.083vw' },
      [defaultTheme.breakpoints.down('sm')]: { fontSize: '3.889vw' },
    },
    fontSemiBoldVw32: {
      fontSize: '2.222vw',
      fontWeight: 600,
      [defaultTheme.breakpoints.down('md')]: {
        fontSize: '3vw',
      },
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '5.184vw',
      },
    },
    fontSemiBoldVw32Md22Sm20: {
      fontSize: '2.222vw',
      fontWeight: 600,
      [defaultTheme.breakpoints.down('md')]: {
        fontSize: '2.865vw',
      },
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '5.556vw',
      },
    },
    fontBoldVw24Md22Sm20: {
      fontSize: '1.667vw',
      fontWeight: 700,
      [defaultTheme.breakpoints.down('md')]: {
        fontSize: '2.865vw',
      },
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '5.556vw',
      },
    },
    fontBoldVw30Md22Sm18: {
      fontSize: '2.083vw',
      fontWeight: 700,
      [defaultTheme.breakpoints.down('md')]: {
        fontSize: '2.865vw',
      },
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '5vw',
      },
    },
    fontBoldVw30Md24Sm18: {
      fontSize: '2.083vw',
      fontWeight: 700,
      [defaultTheme.breakpoints.down('md')]: {
        fontSize: '3.125vw',
      },
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '5vw',
      },
    },
    fontBoldVw52Md36Sm24: {
      fontSize: '3.611vw',
      fontWeight: 700,
      [defaultTheme.breakpoints.down('md')]: {
        fontSize: '4.688vw',
      },
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '6.667vw',
      },
    },
  },
})

export default defaultTheme
