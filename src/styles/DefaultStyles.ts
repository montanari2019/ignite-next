import { createStitches } from "@stitches/react";

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config} = createStitches({
    theme:{
        colors:{
            green500:"#00875F",
            green300:"#00B37E",
            gray300:"#C4C4CC",
            gray100:"#E1E1E6",
            gray800:"#202024",
            gray900:"#121214",
            white:"#ffff"
        },
        fontSizes:{
            md: '1.125rem',
            lg: '1.25rem',
            xl: '1.5rem',
            "2xl": '2rem',
        },
    }
    
})