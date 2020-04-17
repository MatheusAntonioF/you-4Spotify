import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #424242;
  width: 100%;
  height: 100%;
`;

export const DivOutside = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;

  width: 20%;
  height: 40%;

  border-radius: 20px;

  ${(props) => {
    const { primary, secondary } = props.theme;

    return css`
      background-image: linear-gradient(
        to right,
        ${secondary.default},
        ${primary.default}
      );
    `;
  }}
`;

export const DivImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  outline: 0;
  top: -20%;

  background: none;

  width: 70%;
  height: 40%;

  z-index: 1;

  img {
    width: 100%;
    height: 100%;
    border-radius: 20px;
  }
`;

export const DivInside = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 95%;
  height: 95%;
  border-radius: 18px;
  background: rgba(242, 242, 242, 0.5);
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  font-size: 32px;

  color: ${(props) => props.theme.white.default};

  transition: 200ms ease;

  & > svg {
    margin-right: 5px;
  }

  &:hover {
    transform: scale(1.1);
  }
`;
