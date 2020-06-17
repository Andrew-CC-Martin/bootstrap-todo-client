import React from 'react'
import { func, bool } from 'prop-types'
import styled from 'styled-components'

const StyleWrapper = styled.div`
  button {
    border-radius: 50%;
    height: 30px;
    width: 30px;
    border: 0;
  }
`

const CloseButton = ({ onClose, disabled }) => (
  <StyleWrapper>
    <button disabled={disabled} type='button' onClick={onClose}>
      x
    </button>
  </StyleWrapper>

)
CloseButton.propTypes = {
  onClose: func.isRequired,
  disabled: bool,
}
CloseButton.defaultProps = {
  disabled: false,
}

export default CloseButton
