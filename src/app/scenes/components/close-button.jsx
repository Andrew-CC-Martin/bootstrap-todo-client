import React from 'react'
import { func } from 'prop-types'
import styled from 'styled-components'

const StyleWrapper = styled.div`
  button {
    border-radius: 50%;
    height: 30px;
    width: 30px;
    border: 0;
  }
`

const CloseButton = ({ onClose }) => (
  <StyleWrapper>
    <button type='button' onClick={onClose}>
      x
    </button>
  </StyleWrapper>

)
CloseButton.propTypes = {
  onClose: func.isRequired,
}

export default CloseButton
