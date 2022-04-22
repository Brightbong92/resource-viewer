import styled from 'styled-components';

export namespace S {
  export const Main = styled.main`
    display: flex;
  `;

  export const Section = styled.section`
    flex-grow: 1;
    height: 100vh;
  `;

  export const UrlHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 98%;
    font-size: 14px;
    padding: 17px;
  `;

  export const CloseIconWrap = styled.span`
    cursor: pointer;
  `;
}
