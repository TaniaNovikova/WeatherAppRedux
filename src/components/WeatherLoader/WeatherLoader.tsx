import { APPS_COLORS } from "../../enums";
import { DotSpan, WeatherLoaderWrapper } from "./styles";

function WeatherLoader() {
 const colors = ["#ffcc00", "#008800", "#008ae6", "#e60000"];
  

  return (
    <WeatherLoaderWrapper>
      {colors.map((color, index) => (
        <DotSpan key={index} color={color} delay={index * 0.2} />
      ))}
    </WeatherLoaderWrapper>
  );
}

export default WeatherLoader;
