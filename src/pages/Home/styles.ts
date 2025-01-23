import styled from "@emotion/styled"

export const HomeContainer=styled.div`
display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  /* gap: 120px; */
`
// export const SearchWrapper=styled.div`
// margin-bottom:120px;
// `

export const SearchWrapper = styled.div<{ hasLoader: boolean }>`
  margin-bottom: ${(props) => (props.hasLoader ? "0px" : "120px")};
  display: flex;
  align-items: center;
`;

export const Loader = styled.div`
  margin-left: 8px; /* Отступ для лоадера рядом с Input */
`;
