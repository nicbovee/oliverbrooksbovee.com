import React from "React";
import styled from "styled-components"
import {fonts, colors} from "../utils/styles"

const Day = ({number, children}) => {

    return(
        <DayWrapper>
            <DayTitle>Day {number}</DayTitle>
            {children}
        </DayWrapper>
    )
}

export default Day;

const DayTitle = styled.h3`
    font-family: ${fonts.primary};
    color: ${colors.primary};
`
const DayWrapper = styled.div`
    background: ${colors.background};
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
`