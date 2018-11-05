import { lighten } from 'polished';
import { Theme } from '../../utils/styled';
import brandColors from '../colors/brandColors';

const darkTheme: Theme = {
    colors: {
        background: brandColors.gray75,
        body: brandColors.gray10,
        headings: brandColors.gray5,
        black: brandColors.black,
        white: brandColors.white,
        borders: lighten(0.05, brandColors.gray75),
        brand: brandColors.red,
        sidebarBackground: brandColors.green
    },
    fonts: {
        headings: "Roboto, Arial, sans-serif",
        body: "Roboto, Arial, sans-serif",
        monospace: "Courier New, monospace"
    },
    fontSizes: {
        h1: '2.441rem',
        h2: '1.953rem',
        h3: '1.563rem',
        h4: '1.25rem',
    },
    containerPadding: '1.5rem',
    breakpoints: {
        xs: '0px',
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px'
    },
    widths: {
        md: '720px',
        lg: '960px',
        xl: '1140px'
    },
    sidebar: {
        openWidth: '250px',
        closedWidth: '32px'
    },
    heights: {
        header: '60px'
    }
}

export default darkTheme;