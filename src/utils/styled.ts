import styled, { CreateStyled } from 'react-emotion';

export interface Theme {
    colors: {
        background: string,
        body: string,
        headings: string,
        borders: string,
        brand: string,
        black: string,
        white: string,
        sidebarBackground: string
    },
    fonts: {
        body: string,
        headings: string,
        monospace: string
    },
    fontSizes: {
        h1: string,
        h2: string,
        h3: string,
        h4: string
    },
    containerPadding: string,
    breakpoints: {
        xs: string,
        sm: string,
        md: string,
        lg: string,
        xl: string
    },
    widths: {
        md: string,
        lg: string,
        xl: string
    },
    sidebar: {
        openWidth: string,
        closedWidth: string
    }
    heights: {
        header: string
    }
}

export default styled as CreateStyled<Theme>;