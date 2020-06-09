import styled from 'styled-components'

const OuterContainer = styled.div`
    // font-family: Roboto;
    // color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    @media (min-width: 800px) {
        position: absolute;
        top: 25%;
        left: 25%;
        width: 50%;
        // height: 50%;
    }
`

export default OuterContainer
