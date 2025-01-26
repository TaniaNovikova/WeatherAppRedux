
// import { css, keyframes } from "@emotion/react";
// import styled from "@emotion/styled";

// export const bounce = keyframes`
//   0%, 100% {
//     transform: translateY(0);
//     opacity: 0.8;
//   }
//   50% {
//     transform: translateY(-10px);
//     opacity: 1;
//   }
// `;

// export const DotSpan = styled.span<{ color: string; delay: number }>`
//   display: inline-block;
//   width: 12px;
//   height: 12px;
//   margin: 0 5px;
//   background-color: ${({ color }) => color};
//   border-radius: 50%;
//   animation: ${bounce} 1.2s ease-in-out infinite;
//   animation-delay: ${({ delay }) => delay}s;
//   box-shadow: 0 0 8px ${({ color }) => color}, 0 0 12px rgba(255, 255, 255, 0.5);
// `;
// export const WeatherLoaderWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   /* height: 100%; */
//   height: 80px;
//   /* background: linear-gradient(0deg, rgba(18, 45, 77, 0.5), rgba(255, 255, 255, 0.1)); */
// `;

import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
    opacity: 0.8;
  }
  50% {
    transform: translateY(-6px);
    opacity: 1;
  }
`;

export const DotSpan = styled.span<{ color: string; delay: number }>`
  display: inline-block;
  width: 12px;
  height: 12px;
  margin: 0 6px;
  background-color: ${({ color }) => color};
  border-radius: 50%;
  animation: ${bounce} ${({ delay }) => (delay === 0 ? 1.5 : 1.8)}s ease-in-out infinite;
  animation-delay: ${({ delay }) => delay}s;
  box-shadow: 0 0 4px ${({ color }) => color}, 0 0 6px rgba(255, 255, 255, 0.3);
`;


export const WeatherLoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
`; 


