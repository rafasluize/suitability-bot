import React from 'react'
import { Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'
import GlobalStyle from '../../styles/global'
import light from '../../styles/themes/light'
import { DefaultStyled } from './styles'

const Body: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={light}>
      <DefaultStyled>
        <GlobalStyle />
        {children}
      </DefaultStyled>
    </ThemeProvider>
  )
}

const DefaultRoute: React.FC<any> = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(matchProps) => (
      <Body>
        <Component {...matchProps} />
      </Body>
    )}
  />
)

Body.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
}
DefaultRoute.propTypes = {
  component: PropTypes.func.isRequired
}

export default DefaultRoute
