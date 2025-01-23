import { DotSpan, WeatherLoaderWrapper } from "./styles";

function WeatherLoader() {
  const colors = ["#7ee9fc", "#008800", "#e484f7", "#8dfa8d"];
  // const colors = ["#ffcc00", "#008800", "#008ae6", "#e60000"];
  

  return (
    <WeatherLoaderWrapper>
      {colors.map((color, index) => (
        <DotSpan key={index} color={color} delay={index * 0.2} />
      ))}
    </WeatherLoaderWrapper>
  );
}

export default WeatherLoader;
