import "../ThemeSlider.css";

const ThemeSlider = ({ toggleTheme, darkMode }) => {
  return (
    <div className="theme-slider">
      <span role="img" aria-label="sun">
        🌞
      </span>
      <label className="switch">
        <input type="checkbox" onChange={toggleTheme} checked={darkMode} />
        <span className="slider"></span>
      </label>
      <span role="img" aria-label="moon">
        🌜
      </span>
    </div>
  );
};

export default ThemeSlider;
