
import { createContext , useState , useEffect } from "react";

export const themes = {
  dark: "dark",
  light: "light",
};

export const ThemeContext = createContext();


const ThemeContextWrapper = ( props ) => {
  /**
   * @param {string} [theme=light] - theme value
  */
  const [ theme, setTheme ] = useState( themes.dark );

  function changeTheme(theme) {
    setTheme(theme);
  }

  useEffect(() => {
    switch (theme) {
      case themes.light:
        document.body.classList.add('white-content');
        break;
      case themes.dark:
      default:
        document.body.classList.remove('white-content');
        break;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextWrapper;