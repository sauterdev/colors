import {rgb, hsl, hsv, cmyk} from 'color-convert'

export type UpdateHexColorAction = {
    type: 'update-hex-color'
    payload: {
        hexColor: string;
    }
}

type UdpateRGBColorAction = {
    type: 'update-rgb-color';
    payload: {
        rgb:  [r:number, g:number, b:number] 
    }
}

type UpdateHSLColorAction = {
    type: 'update-hsl-color';
    payload: {
        hsl:  [h:number, s:number, l:number] 
    }
}

type UpdateHSVColorAction = {
    type: 'update-hsv-color';
    payload: {
        hsv:  [h:number, s:number, v:number] 
    }
}

type UpdateCMYKColorAction = {
    type: 'update-cmyk-color';
    payload: {
        cmyk:  [c:number, m:number, y:number, k:number] 
    }
}

type ColorState = {
    hexColor: string;
}

export type AdjustColorActions = UpdateHexColorAction | UdpateRGBColorAction | UpdateHSLColorAction | UpdateHSVColorAction | UpdateCMYKColorAction;

export const initialState: ColorState = {
    hexColor: '#BADA55',
}

export const colorReducer = (
    state: ColorState = initialState,
    action: AdjustColorActions
) => {
    if (action.type === 'update-hex-color') {
        const { hexColor } = action.payload;
        return { ...state, hexColor};
    }

    if (action.type === 'update-rgb-color') {
        const  hexColor = '#' + rgb.hex(action.payload.rgb);
        return { ...state, hexColor};
    }

    if (action.type === 'update-hsl-color') {
        const hexColor = '#' +  hsl.hex(action.payload.hsl);
        return {...state, hexColor}
    }

    if (action.type === 'update-hsv-color') {
        const hexColor = '#' +  hsv.hex(action.payload.hsv);
        return {...state, hexColor}
    }

    if (action.type === 'update-cmyk-color') {
        const hexColor = '#' +  cmyk.hex(action.payload.cmyk);
        return {...state, hexColor}
    }

    return state;
}