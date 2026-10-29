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
