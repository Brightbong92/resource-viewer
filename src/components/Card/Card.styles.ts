import styled from 'styled-components';

export namespace S {
  export const CardWrap = styled.ul`
    width: 260px;
    height: 90px;
    background: #ffffff;
    border-radius: 10px;
    padding: 4px 6px;
    display: flex;
    flex-direction: column;
  `;

  export const IconWrap = styled.div`
    padding-top: 35px;
    display: inline;
    text-align: right;

    & span:last-child {
      padding-left: 10px;
    }
  `;

  export const IconButton = styled.span`
    cursor: pointer;
  `;

  export const CustomInput = styled.input`
    width: 250px;
    height: 30px;
    border: none;
    background-color: #fff;
  `;
}
