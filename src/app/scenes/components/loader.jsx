import React from 'react'
import styled from 'styled-components'

const StyleWrapper = styled.div`
  @keyframes ldio-hb41ro2081b {
    0% {
      top: 96px;
      left: 96px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 18px;
      left: 18px;
      width: 156px;
      height: 156px;
      opacity: 0;
    }
  }

  .ldio-hb41ro2081b div {
    position: absolute;
    border-width: 4px;
    border-style: solid;
    opacity: 1;
    border-radius: 50%;
    animation: ldio-hb41ro2081b 1s cubic-bezier(0,0.2,0.8,1) infinite;
  }

  .ldio-hb41ro2081b div:nth-child(1) {
    border-color: #e90c59;
  }

  .ldio-hb41ro2081b div:nth-child(2) {
    border-color: #46dff0;
    animation-delay: -0.5s;
  }

  .loadingio-spinner-ripple-r9cq850x9ib {
    width: 200px;
    height: 200px;
    display: inline-block;
    overflow: hidden;
    background: #ffffff;
  }
  .ldio-hb41ro2081b {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0;
  }
  .ldio-hb41ro2081b div { box-sizing: content-box; }
`

const Loader = () => (
  <StyleWrapper>
    <div className='loadingio-spinner-ripple-r9cq850x9ib'>
      <div className='ldio-hb41ro2081b'>
        <div />
        <div />
      </div>
    </div>
  </StyleWrapper>
)

export default Loader
