import React from 'react'
import { string, bool, func } from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

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

const Header = ({ text, loggedIn, setLoggedOut }) => {
  const logout = () => {
    // Setting logged out in redux is probably redundant,
    // but doing it anyway just to be prudent
    setLoggedOut()

    localStorage.clear()

    window.location.reload(true)
  }

  return (
    <StyledHeader>
      <Link to='/todos'>
        <span role='img' aria-label='home'>🏠</span>
      </Link>
      <h1>{text}</h1>
      {loggedIn ? <BasicButton text='log out' onClick={logout} /> : <span />}
    </StyledHeader>
  )
}
Header.propTypes = {
  text: string.isRequired,
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
