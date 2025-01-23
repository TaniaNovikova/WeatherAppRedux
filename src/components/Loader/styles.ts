import styled from "@emotion/styled";



// Основной контейнер
export const StyledLoader = styled.div`
  height: 25px;
  width: 25px;
  position: relative;
`;

// Базовый стиль для шариков
const BallBase = styled.div`
  position: absolute;
  height: 25px;
  width: 25px;
  border-radius: 50%;
`;

export const StyledUpper = styled(BallBase)`
  left: 0;
  top: -25px;
  background: #2da2ff;
  animation: upper 1s infinite;

  @keyframes upper {
    50%,
    100% {
      top: 25px;
    }
  }
`;

export const StyledRight = styled(BallBase)`
  bottom: 0;
  right: -25px;
  background: #ff337a;
  animation: right 1s infinite;

  @keyframes right {
    50%,
    100% {
      right: 25px;
    }
  }
`;

export const StyledLower = styled(BallBase)`
  bottom: -25px;
  right: 0;
  background: #ffff00;
  animation: lower 1s infinite;

  @keyframes lower {
    50%,
    100% {
      bottom: 25px;
    }
  }
`;

export const StyledLeft = styled(BallBase)`
  left: -25px;
  bottom: 0;
  background: #00ff00;
  animation: left 1s infinite;

  @keyframes left {
    50%,
    100% {
      left: 25px;
    }
  }
`;