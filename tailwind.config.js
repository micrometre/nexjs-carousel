module.exports = {
  purge: {
    enabled: false
  },
  theme: {
    container: {
      center: true,
      padding: {
        default: "0rem",
        sm: "2rem",
        lg: "3rem",
        xl: "4rem"
      }
    },
    extend: {
      fontFamily: {
        body: ["Raleway"]
      },
      colors: {
        baseDark: "#06479B",
        baseNormal: "#2670d0",
        baseLess: "#5a96e2",
        "accent-1": "#FAFAFA",
        "accent-2": "#EAEAEA",
        "accent-7": "#333",
        success: "#0070f3",
        cyan: "#79FFE1",
        white: "#fff",
        gold: "#FCC200",
        "black-transparent": "#00000052",
        "black-90": "#111"
      },
      borderRadius: {
        xl: "1rem"
      },
      borderWidth: {
        1: "1px"
      },
      letterSpacing: {
        tighter: "-.04em"
      },
      lineHeight: {
        tight: 1.2
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
        "14xl": "9rem"
      },
      boxShadow: {
        small: "0 5px 10px rgba(0, 0, 0, 0.12)",
        medium: "0 8px 30px rgba(0, 0, 0, 0.12)",
        "2xl": "0 25px 50px -1px rgba(0, 0, 0, 0.2)",
        "3xl": "0 25px 60px -1px rgba(0,0,0,0.5)"
      },
      width: {
        "1/8": "12.5%",
        "3/8": "37.5%"
      },
      spacing: {
        "1/2": "50vh",
        "1/3": "33vh",
        "12/12": "100%",
        9: "2.25rem",
        11: "2.75rem",
        38: "9.5rem",
        46: "11.5rem",
        100: "25rem",
        28: "7rem"
      },
      zIndex: {
        max: "999999"
      },
      inset: {
        25: "6.25rem"
      }
    }
  },
  variants: {
    translate: ["responsive", "hover", "focus", "active", "group-hover"],
    borderWidth: ["hover"],
    textAlign: ["responsive"]
  }
};
