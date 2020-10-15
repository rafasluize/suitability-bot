import styled from 'styled-components'

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
  @media (min-width: 992px) {
    > div {
      width: 50%;
      padding: ${(props) => props.theme.spacing};
    }
  }
  @media (max-width: 991.98px) {
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

export const MessageReceivedStyled = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  padding: ${(props) => props.theme.spacing};
  border-radius: 100px;
  color: #fff;
  margin-bottom: ${(props) => props.theme.spacing};
  width: 80%;
`
