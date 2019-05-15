import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classname'

const TextInputGroup = ({label,name,value,placeholder,type,onChange,error}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input 
      type={type} 
      name={name} 
      className={classnames('form-control', 'form-control-lg', {'is-invalid':error})}
      placeholder ={placeholder} 
      value = {value}
      onChange ={onChange}
      // onChange ={this.onNameChange}
      />

      {error && <div className="invalid-feedback">{error}</div>}

      </div>
  )
}

TextInputGroup.protoTypes = {
  name: PropTypes.string.isRequired,
  palceholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired
}

TextInputGroup.defaultProps = {
  type: 'text'
}
export default TextInputGroup;