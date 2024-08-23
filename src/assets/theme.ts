import './base.css'

export const customDarkTheme = {
    options: { customProperties: true },
    dark : true,
    colors : {
        background : '#080239',
        surface : '#080239',
        secondary : "#fa3968",
        'surface-variant' : '#c3c5fe', 
        'surface-variant-light' : '#f4e0f1',
        'on-surface-variant' : "#ffffff",
    },
    variables : {
        'custom-gradient' : 'linear-gradient(to top, #6054c9, #080239 70%);',
        'border-color' : '#ffffff',
        'border-opacity' : 1,
    }
};

export const customLightTheme = {
    options: { customProperties: true },
    dark : true,
    colors : {
        background : '#ace0f9',
        surface : '#ace0f9',
        secondary : "#fa3968",
        'on-background' : "#0a3055",
        'on-surface' : "#0a3055",
        'surface-variant' : '#c3c5fe', 
        'surface-variant-light' : '#f4e0f1',
        'on-surface-variant' : "#ffffff",
        'border-color' : '#ffffff',
    },
    variables : {
        'custom-gradient' : 'linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);',
        'border-color' : '#ffffff',
        'border-opacity' : 1,
    }
};
