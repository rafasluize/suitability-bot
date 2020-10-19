import styled from 'styled-components'

export const InputStyled = styled.div`
  margin-bottom: ${(props) => props.theme.spacing};

  label {
    display: block;
    font-size: 1rem;
    margin-bottom: ${(props) => props.theme.spacing};
  }
  input {
    border-radius: 10px;
    background-color: ${(props) => props.theme.colors.grey};
    border: 1px solid ${(props) => props.theme.colors.grey};
    padding: ${(props) => props.theme.spacing};
    display: block;
    width: 100%;
    &:focus {
      border: 1px solid #222;
    }
    &::placeholder {
      color: #e0e7ee;
    }
  }
  .error {
    margin-top: 0.5rem;
    font-size: 0.9rem;
  }
`
