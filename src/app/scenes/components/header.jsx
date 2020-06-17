import React from 'react'
import { bool, func } from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { BasicButton } from './basic-button'

const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding: 10px;
  a {
    margin: 5px;
  }
`

const Header = ({ loggedIn, setLoggedOut }) => {
  const logout = () => {
    // Setting logged out in redux is probably redundant,
    // but doing it anyway just to be careful
    setLoggedOut()

    localStorage.clear()

    window.location.reload(true)
  }

  return (
    <StyledHeader>
      <h1>Todo List</h1>
      {loggedIn ? <BasicButton text='log out' onClick={logout} /> : <span />}
    </StyledHeader>
  )
}
Header.propTypes = {
  loggedIn: bool.isRequired,
  setLoggedOut: func.isRequired,
}

const mapStateToProps = ({ loggedIn }) => ({ loggedIn })

const mapDispatchToProps = (dispatch) => ({
  setLoggedOut: () => {
    dispatch({ type: 'SET_LOGGED_OUT' })
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
