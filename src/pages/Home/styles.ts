import styled from "@emotion/styled"

export const HomeContainer=styled.div`
display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
`


export const SearchWrapper = styled.div<{ hasLoader: boolean }>`
  margin-bottom: ${(props) => (props.hasLoader ? "0px" : "120px")};
  display: flex;
  align-items: center;
`;

