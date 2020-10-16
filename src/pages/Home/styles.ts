import styled, { css } from 'styled-components'

export const HomeStyled = styled.div`
  display: flex;
  min-height: 100vh;
  > div {
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    &:first-child {
      background-color: ${(props) => props.theme.colors.primary};
    }
  }
  .chat {
    .response {
      margin-top: 3rem;
    }
  }
  form {
    button {
      margin-top: 2rem;
    }
  }
  @media (min-width: 1200px) {
    .chat {
      width: 70%;
    }
    > div {
      width: 50%;
      padding: ${(props) => props.theme.spacing};
    }
  }
  @media (max-width: 1199.98px) {
    flex-direction: column;
  }
`

export const ContentJustifyStyled = styled.div`
  display: flex;
  flex-direction: column;
  p {
    color: ${(props) => props.theme.colors.textGrey};
    margin-bottom: 2rem;
  }
  @media (min-width: 768px) {
    width: 40%;
  }
`

export const MessageStyled = styled.div<{ type: string }>`
  ${(props) =>
    props.type === 'receive' &&
    css`
      background-color: ${props.theme.colors.primary};
      color: #fff;
    `};
  ${(props) =>
    props.type === 'sent' &&
    css`
      background-color: #f1f1f1;
      color: ${props.theme.colors.textGrey};
      margin-left: auto;
    `};

  padding: 1.5rem;
  border-radius: 100px;
  margin-bottom: ${(props) => props.theme.spacing};
  @media (min-width: 768px) {
    width: 80%;
  }
`
