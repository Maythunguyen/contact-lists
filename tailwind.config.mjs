/** @type {import('tailwindcss').Config} */
const config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
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
      boxShadow: {
        subtle: "0px 1px 3px rgba(0,0,0,0.1), 0px 1px 2px rgba(0,0,0,0.06)",
      },
  	},
  	fontFamily: {
  		sans: [
  			'Satoshi',
  			'sans-serif'
  		]
  	},
  	animation: {
  		accordionDown: 'accordion-down 0.2s ease-out',
  		accordionUp: 'accordion-up 0.2s ease-out',
  		spotlight: 'spotlight 2s ease 0.75s 1 forwards',
  		shimmer: 'shimmer 2s linear infinite',
  		moveHorizontal: 'moveHorizontal 40s ease infinite',
  		moveInCircle: 'moveInCircle 20s ease infinite',
  		moveVertical: 'moveVertical 30s ease infinite',
  		scroll: 'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite'
  	},
  	keyframes: {
  		accordionDown: {
  			from: {
  				height: '0'
  			},
  			to: {
  				height: 'var(--radix-accordion-content-height)'
  			}
  		},
  		accordionUp: {
  			from: {
  				height: 'var(--radix-accordion-content-height)'
  			},
  			to: {
  				height: '0'
  			}
  		},
  		spotlight: {
  			'0%': {
  				opacity: '0',
  				transform: 'translate(-72%, -62%) scale(0.5)'
  			},
  			'100%': {
  				opacity: '1',
  				transform: 'translate(-50%, -40%) scale(1)'
  			}
  		},
  		shimmer: {
  			'0%': {
  				backgroundPosition: '0 0'
  			},
  			'100%': {
  				backgroundPosition: '-200% 0'
  			}
  		},
  		moveHorizontal: {
  			'0%': {
  				transform: 'translateX(-50%) translateY(-10%)'
  			},
  			'50%': {
  				transform: 'translateX(50%) translateY(10%)'
  			},
  			'100%': {
  				transform: 'translateX(-50%) translateY(-10%)'
  			}
  		},
  		moveInCircle: {
  			'0%': {
  				transform: 'rotate(0deg)'
  			},
  			'50%': {
  				transform: 'rotate(180deg)'
  			},
  			'100%': {
  				transform: 'rotate(360deg)'
  			}
  		},
  		moveVertical: {
  			'0%': {
  				transform: 'translateY(-50%)'
  			},
  			'50%': {
  				transform: 'translateY(50%)'
  			},
  			'100%': {
  				transform: 'translateY(-50%)'
  			}
  		},
  		scroll: {
  			'100%': {
  				transform: 'translate(calc(-50% - 0.5rem))'
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
