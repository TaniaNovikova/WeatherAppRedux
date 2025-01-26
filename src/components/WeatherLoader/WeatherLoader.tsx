import { APPS_COLORS } from "enums";
import { DotSpan, WeatherLoaderWrapper } from "./styles";

function WeatherLoader() {
 const colors = [APPS_COLORS.RAIN_COLORS_1, APPS_COLORS.RAIN_COLORS_2, APPS_COLORS.RAIN_COLORS_3, APPS_COLORS.RAIN_COLORS_4];

  return (
    <WeatherLoaderWrapper>
      {colors.map((color, index) => (
        <DotSpan key={index} color={color} delay={index * 0.2} />
      ))}
    </WeatherLoaderWrapper>
  );
}

export default WeatherLoader
