export const CARD_COLORS = {
    yellow: { color: '#F6E05E', bgGrey: '#B2AFA0' },
    red:    { color: '#FEB2B2', bgGrey: '#B8A8A8' },
    green:  { color: '#9AE6B4', bgGrey: '#A1AD9F' },
    blue:   { color: '#90CDF4', bgGrey: '#9EA8B3' }
};

export const TEXT_COLORS = {
    white: '#EAECEF',
    grey: '#9CA3AF'
};

export const BG_COLORS = {
    light: '#383B42',
    normal: '#232529',
    dark: '#18191C'
};

export function getRootColourVariables() {
    return {
        // Colores de acento y sus tonos hover
        'color-yellow': CARD_COLORS.yellow.color,
        'color-yellow-bg': CARD_COLORS.yellow.bgGrey,
        'color-red': CARD_COLORS.red.color,
        'color-red-bg': CARD_COLORS.red.bgGrey,
        'color-green': CARD_COLORS.green.color,
        'color-green-bg': CARD_COLORS.green.bgGrey,
        'color-blue': CARD_COLORS.blue.color,
        'color-blue-bg': CARD_COLORS.blue.bgGrey,

        // Colores de texto
        'white-text': TEXT_COLORS.white,
        'grey-text': TEXT_COLORS.grey,

        // Colores de fondo
        'light-bg': BG_COLORS.light,
        'normal-bg': BG_COLORS.normal,
        'dark-bg': BG_COLORS.dark
    };
}