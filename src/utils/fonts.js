export const FONT_URLS = {
    pressStart: 'https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap'
};

export const FONTS = {
    montserrat: "'Montserrat', sans-serif",
    inter: "'Inter', system-ui, sans-serif",
    pressStart: "'Press Start 2P', cursive"
};

export function getRootFontVariables() {
    return {
        'font-montserrat': FONTS.montserrat,
        'font-inter': FONTS.inter,
        'font-press-start': FONTS.pressStart
    };
}