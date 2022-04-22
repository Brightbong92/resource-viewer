import styled, { css } from 'styled-components';

export const ButtonCSS = css`
  height: 30px;
  width: 125px;
  border-radius: 5px;

  background-color: #ffffff;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 5px;
  cursor: pointer;

  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
`;

export namespace S {
  export const ButtonWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 280px;
    height: 50px;
    background: #ffffff;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    padding: 10px;
  `;

  export const CustomButton = styled.button`
    ${ButtonCSS}
  `;

  export const FileLabel = styled.label`
    ${ButtonCSS}
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  export const CustomInputFile = styled.input`
    display: none;
  `;

  export const CardListWrap = styled.div`
    min-height: 100vh;
    background-color: #e5e5e5;
    display: flex;
    flex-direction: column;
    align-items: center;

    padding-top: 10px;

    & > div:not(:last-child) {
      margin-bottom: 10px;
    }
  `;
}
