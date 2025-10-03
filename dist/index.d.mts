interface Theme {
    /**
    * name of the theme
    */
    name: string;
    /**
    * stitches theme object
    */
    theme: ThemeObject;
}
interface ThemesParameter {
    /**
    * the list of themes to display in the dropdown
    */
    values: Theme[];
    /**
    * name of the theme to use by default
    */
    default?: string;
    /**
    * disable the addon
    */
    disable?: boolean;
}
interface ThemeObject {
    className: string;
}

declare const _default: {};

export { type ThemesParameter, _default as default };
