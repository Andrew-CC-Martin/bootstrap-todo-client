import React from 'react'
import { func, string, bool } from 'prop-types'
import styled from 'styled-components'

import { colorPallette } from '../../constants'

const StyleWrapper = styled.div`
  button {
    border-radius: 5px;
    border: 1px solid ${colorPallette.lavendergray};
    padding: 10px;
  }

  button:hover {
    background: 1px solid ${colorPallette.lavendergray};
  }
`

export const BasicButton = ({ onClick, text, disabled }) => (
  <StyleWrapper>
    <button disabled={disabled} type='button' onClick={onClick}>
      {text}
    </button>
  </StyleWrapper>
)
BasicButton.propTypes = {
  onClick: func.isRequired,
  text: string.isRequired,
  disabled: bool,
}
BasicButton.defaultProps = {
  disabled: false,
}

export const SubmitButton = ({ text, disabled }) => (
  <StyleWrapper>
    <button disabled={disabled} type='submit'>
      {text}
    </button>
  </StyleWrapper>
)
SubmitButton.propTypes = {
  text: string.isRequired,
  disabled: bool,
}
SubmitButton.defaultProps = {
  disabled: false,
}
