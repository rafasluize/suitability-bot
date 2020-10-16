import React from 'react'
import PropTypes from 'prop-types'
import { ButtonStyled } from '../Button/styles'

type types = 'primary' | 'default' | 'link' | 'outline' | 'secondary'
interface IProps {
  type?: types
  text?: string
  disabled?: boolean
  className?: string
}

const ButtonSubmit: React.FC<IProps> = ({ type, text, className, disabled }) => {
  return (
    <ButtonStyled className={`${type} ${className}`} type="submit" disabled={disabled}>
      {text}
    </ButtonStyled>
  )
}

ButtonSubmit.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['default', 'primary', 'outline', 'link', 'secondary'])
}

ButtonSubmit.defaultProps = {
  text: '',
  type: 'default',
  className: '',
  disabled: false
}

export default ButtonSubmit
