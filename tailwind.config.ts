import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				solid: {
					basic: {
						brand: {
							'50': '#ECF1F8',
							'100': '#DAE2F1',
							'200': '#B5C5E3',
							'300': '#90A8D5',
							'400': '#6B8BC7',
							'500': '#132647',
							'600': '#385894',
							'700': '#2A426F',
							'800': '#1C2C4A',
							'900': '#0E1625',
							'950': '#070B13'
						},
						grayBlue: {
							'50': '#F1F2F4',
							'100': '#E3E6E8',
							'200': '#C6CCD2',
							'300': '#AAB3BB',
							'400': '#8D99A5',
							'500': '#85929E',
							'600': '#5A6672',
							'700': '#444D55',
							'800': '#2D3339',
							'900': '#171A1C',
							'950': '#0B0D0E'
						},
						lightBlue: {
							'50': '#EDF2F8',
							'100': '#DAE4F1',
							'200': '#B6C9E2',
							'300': '#91AED4',
							'400': '#6D93C5',
							'500': '#D9E3F0',
							'600': '#3A6092',
							'700': '#2B486E',
							'800': '#1D3049',
							'900': '#0E1825',
							'950': '#070C12'
						},
						blue: {
							'50': '#E5F2FF',
							'100': '#CCE5FF',
							'200': '#99CCFF',
							'300': '#66B2FF',
							'400': '#3399FF',
							'500': '#007FFF',
							'600': '#0066CC',
							'700': '#004C99',
							'800': '#003366',
							'900': '#001933',
							'950': '#000D1A'
						},
						neutral: {
							'50': '#F2F2F2',
							'100': '#E6E6E6',
							'200': '#CCCCCC',
							'300': '#B3B3B3',
							'400': '#999999',
							'500': '#808080',
							'600': '#666666',
							'700': '#4D4D4D',
							'800': '#333333',
							'900': '#1A1A1A',
							'950': '#0D0D0D'
						}
					},
					feedBack: {
						warning: {
							'50': '#FFE5E5',
							'100': '#FFCCCC',
							'200': '#FF9999',
							'300': '#FF6666',
							'400': '#FF3333',
							'500': '#FF0000',
							'600': '#CC0000',
							'700': '#990000',
							'800': '#660000',
							'900': '#330000',
							'950': '#1A0000'
						},
						success: {
							'50': '#E9FDE7',
							'100': '#D3FCCF',
							'200': '#A7F8A0',
							'300': '#7BF570',
							'400': '#4FF240',
							'500': '#1BBA0D',
							'600': '#1CBF0D',
							'700': '#158F0A',
							'800': '#0E5F07',
							'900': '#073003',
							'950': '#041802'
						},
						red: {
							'50': '#FFE5EE',
							'100': '#FFCCDD',
							'200': '#FF99BB',
							'300': '#FF6699',
							'400': '#FF3377',
							'500': '#FF0055',
							'600': '#CC0044',
							'700': '#990033',
							'800': '#660022',
							'900': '#330011',
							'950': '#1A0008'
						}
					}
				},
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
