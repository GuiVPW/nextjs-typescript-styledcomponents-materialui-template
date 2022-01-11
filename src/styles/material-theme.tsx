import { createTheme, ThemeOptions } from '@mui/material/styles'

import { pxToRem } from '../utils/px-to-rem'
import { theme as colorTheme, Theme } from './theme'

declare module '@mui/material/styles' {
	interface TypographyVariants {
		display1: React.CSSProperties
		display2: React.CSSProperties
		display3: React.CSSProperties
	}

	interface TypographyVariantsOptions {
		display1?: React.CSSProperties
		display2?: React.CSSProperties
		display3?: React.CSSProperties
	}
}

const materialBaseTheme = (theme: Theme): ThemeOptions => ({
	palette: {
		primary: {
			main: theme.colors.primary
		},
		secondary: {
			main: theme.colors.secondary
		},
		text: {
			primary: theme.text.main,
			secondary: theme.text.description
		},
		common: {
			black: theme.tags.black,
			white: theme.tags.white
		},
		background: {
			paper: theme.background.main
		}
	},
	typography: {
		display1: {
			fontSize: pxToRem(40),
			fontWeight: 700
		},
		display2: {
			fontSize: pxToRem(30),
			fontWeight: 700
		},
		display3: {
			fontSize: pxToRem(24),
			fontWeight: 600
		},
		h1: {
			fontSize: pxToRem(22),
			fontWeight: 700
		},
		h2: {
			fontSize: pxToRem(20),
			fontWeight: 400
		},
		h3: {
			fontSize: pxToRem(18)
		},
		h4: {
			fontSize: pxToRem(16)
		},
		h5: {
			fontSize: pxToRem(15)
		},
		button: {
			fontSize: pxToRem(20)
		},
		body1: {
			fontSize: pxToRem(14)
		},
		body2: {
			fontSize: pxToRem(12)
		}
	},
	components: {
		MuiButton: {
			defaultProps: {
				disableElevation: true,
				disableRipple: true
			},
			styleOverrides: {
				root: {
					textTransform: 'capitalize',
					fontSize: pxToRem(14),
					borderRadius: '25px',
					fontWeight: 600
				},
				text: {
					fontWeight: 400,
					padding: '2px 5px',
					'& .MuiButton-label': {
						justifyContent: 'space-between'
					}
				}
			}
		}
	}
})

export const materialTheme = createTheme(materialBaseTheme(colorTheme))
