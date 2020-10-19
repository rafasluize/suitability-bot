import PropTypes from 'prop-types'
import React, { FormEvent } from 'react'
import { maskJs } from 'mask-js'
import { InputStyled } from './styles'

interface IProps {
  name: string
  label?: string
  placeholder?: string
  value?: string | number
  type?: string
  maxLength?: number
  mask?: string
  autoFocus?: boolean | false
  onChange(e: FormEvent<HTMLTextAreaElement | HTMLInputElement>): void
}

const InputText: React.FC<IProps> = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  maxLength,
  type,
  mask,
  autoFocus
}) => {
  function changeValue(e: FormEvent<HTMLTextAreaElement | HTMLInputElement>): void {
    if (mask) {
      const target = e.target as HTMLTextAreaElement | HTMLInputElement
      target.value = maskJs(mask, target.value)
    }
    onChange(e)
  }

  return (
    <InputStyled>
      <label htmlFor="name">{label}</label>
      <input
        name={name}
        id={name}
        type={type}
        onChange={changeValue}
        value={value}
        maxLength={maxLength}
        placeholder={placeholder}
        autoFocus={autoFocus}
      />
    </InputStyled>
  )
}

InputText.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  maxLength: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  mask: PropTypes.string,
  autoFocus: PropTypes.bool
}

InputText.defaultProps = {
  label: '',
  maxLength: 50,
  placeholder: '',
  type: 'text',
  value: '',
  mask: '',
  autoFocus: false
}

export default InputText
