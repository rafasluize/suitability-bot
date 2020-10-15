import styled from 'styled-components'

export const ButtonStyled = styled.button`
  font-weight: bold;
  outline: none !important;
  padding: 24px 32px;
  min-width: 131px;
  min-height: 72px;
  box-shadow: none;
  display: block;
  color: ${(props) => props.theme.colors.text};
  text-align: center;
  -webkit-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  line-height: 1.5;
  transition: 0.2s cubic-bezier(0.55, 0, 0.1, 1);
  -webkit-transition: 0.2s cubic-bezier(0.55, 0, 0.1, 1);
  width: 100%;
  font-size: 1.15rem !important;
  text-transform: uppercase;
  border-radius: 100px;
  &.primary {
    background-color: ${(props) => props.theme.colors.primary};
    border-color: ${(props) => props.theme.colors.primary};
    color: #fff;
  }
  &:hover {
    transform: scale(1.05);
    -webkit-transform: scale(1.05);
  }
  &:focus {
    box-shadow: none !important;
  }
`
