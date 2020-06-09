import React from 'react'
import { func } from 'prop-types'

const CloseButton = ({ onClose }) => (
  <button type='button' onClick={onClose}>
    x
  </button>
)
CloseButton.propTypes = {
  onClose: func.isRequired,
}

export default CloseButton
