import React from "react"
import styled from "styled-components";
import {fonts, colors} from "../utils/styles";

const Stats = () => {
    return(
        <StatsWrapper>
            <StatList>
                <Stat title={"Born"} value={"4/10/20 9:09am"} />
                <Stat title={"Weight"} value={"9 lbs"} />
                <Stat title={"Height"} value={"21 inches"} />
            </StatList>
        </StatsWrapper>
    )
}

const StatList = styled.ul`
    list-style: none;
    margin-left: 0;
    margin-bottom: 0;
`

const StatsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${fonts.primary};
    padding: 40px;
    background: ${colors.background};
    width: 100%;


`
const Stat = ({title, value}) => (
    <li><StatTitle>{title}: </StatTitle>{value}</li>
)


const StatTitle = styled.span`
    font-weight: 700;
`
export default Stats;