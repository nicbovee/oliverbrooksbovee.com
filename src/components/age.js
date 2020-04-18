import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import {fonts, colors} from "../utils/styles";

const BIRTHDAY =  new Date(2020, 3, 10, 9, 9, 0 , 0);
const MS_IN_MIN = 60000;
const MS_IN_HR = MS_IN_MIN * 60;
const MS_IN_DAY = MS_IN_HR * 24;
const MS_IN_WEEK = MS_IN_DAY * 7;
const MS_IN_MONTH = MS_IN_DAY * 30;
const MS_IN_YEAR = 31536000000;
const MS_IN_HEARTBEAT = 500;
const MS_IN_BREATH = 1333;

const getCurrentAge = () => Date.now() - BIRTHDAY.getTime()
const getCurrentAgeMinutes = () => Math.floor(getCurrentAge() / MS_IN_MIN)
const calculateAge = () => {
    let current = getCurrentAge();
    let years = Math.floor(current/MS_IN_YEAR);
    let weeks = Math.floor(current/MS_IN_WEEK);
    let days = Math.floor((current%MS_IN_WEEK)/MS_IN_DAY);
    let hours = Math.floor((current%MS_IN_DAY)/MS_IN_HR);
    let minutes = Math.floor((current%MS_IN_HR) / MS_IN_MIN);

    let stringYears = years ? `${years} year${years > 1 ? 's' : ''} ` : '';
    let stringWeeks = weeks ? `${weeks} week${weeks > 1 ? 's' : ''}` : '';
    let stringDays = days ? `${days} day${days > 1 ? 's' : ''}` : '';
    let stringHours = hours ? `${hours} hour${hours > 1 ? 's' : ''}` : '';
    let stringMinutes = minutes ? `${minutes} minute${minutes > 1 ? 's' : ''}`: '';
    
    return `${stringYears} ${stringWeeks} ${stringDays} ${stringHours} ${stringMinutes ? "and " + stringMinutes : stringMinutes} old`
}

const calculateHeartBeats = () =>  (Math.floor(getCurrentAge() / MS_IN_HEARTBEAT));
const calculateBreaths = () => (Math.floor(getCurrentAge() / MS_IN_BREATH));

const Age = () => {
    const [age, setAge] = useState(calculateAge());
    const [heartbeats, setHeartBeats] = useState(calculateHeartBeats());
    const [breaths, setBreaths] = useState(calculateBreaths());
    
    useEffect(() =>  {
        setTimeout(() => {
            setAge(calculateAge());
        }, 1000);

        const breath_id = setTimeout(() => {
            setBreaths(calculateBreaths());
        }, MS_IN_BREATH);
    
        const age_id = setTimeout(() => {
            setHeartBeats(() => calculateHeartBeats());
        }, MS_IN_HEARTBEAT);
        
    })

    

   
    return(
        <AgeWrapper>
            <Intro>Oliver is</Intro>
            <StyledAge>{age}</StyledAge>
            <BreathWrapper>His heart has beaten {heartbeats} times and he has taken {breaths} breaths.</BreathWrapper>
        </AgeWrapper>
    )
}

const Intro = styled.p`
    font-size: 1.5rem;
    font-family: ${fonts.primary};
    color: ${colors.button};
    margin-bottom: 1rem;
`
const StyledAge = styled.p`
    font-size: 1.5rem;
    font-family: ${fonts.primary};
    font-weight: 100;
`
const AgeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: .5rem;
`
const BreathWrapper = styled.p`
    font-size: .7rem;
    font-family: ${fonts.primary};
    color: ${colors.button}

`
export default Age;