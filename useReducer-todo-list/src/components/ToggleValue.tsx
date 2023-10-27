import { useTheme, useThemeUpdate } from './ThemeProvider'

const ToggleValue = () => {
    const darkTheme = useTheme();
    const updateTheme = useThemeUpdate();

    const themeStyle = {
        backgroundColor: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#CCC' : '#333',
        margin: '2rem',
        padding: '2rem',
    }

    return (
        <div>
            <button onClick={() => updateTheme()}>Toggle Theme</button>
            <div style={themeStyle}>Toggle Colour</div>
        </div>
    )
}

export default ToggleValue
