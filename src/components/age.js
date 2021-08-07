import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { fonts, colors } from "../utils/styles"

let leapdays = 0
function leapyear(year) {
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0
}
const currentYear = new Date().getFullYear()
console.log({ currentYear })
for (let i = 2020; i < currentYear; i++) {
  if (leapyear(i)) {
    leapdays++
  }
}
const BIRTHDAY = new Date(2020, 3, 10, 9, 9, 0, 0)
const MS_IN_MIN = 60000
const MS_IN_HR = MS_IN_MIN * 60
const MS_IN_DAY = MS_IN_HR * 24
const MS_IN_LEAPDAYS = MS_IN_DAY * leapdays
const MS_IN_WEEK = MS_IN_DAY * 7
const MS_IN_MONTH = MS_IN_DAY * 30.4166666667
const MS_IN_YEAR = MS_IN_MONTH * 12
const MS_IN_HEARTBEAT = 500
const MS_IN_BREATH = 1333

const getCurrentAge = () => Date.now() - BIRTHDAY.getTime()
const getCurrentAgeMinutes = () => Math.floor(getCurrentAge() / MS_IN_MIN)
const calculateAge = () => {
  const ageObj = {}

  let current = getCurrentAge()
  let years = Math.floor(current / MS_IN_YEAR)
  let months = Math.floor((current % MS_IN_YEAR) / MS_IN_MONTH)
  let weeks = Math.floor((current % MS_IN_MONTH) / MS_IN_WEEK)
  let days = Math.floor((current % MS_IN_WEEK) / MS_IN_DAY)
  let hours = Math.floor((current % MS_IN_DAY) / MS_IN_HR)
  let minutes = Math.floor((current % MS_IN_HR) / MS_IN_MIN)

  ageObj.stringYears = years ? `${years} year${years > 1 ? "s " : " "} ` : ""
  ageObj.stringMonths = months
    ? `${months} month${months > 1 ? "s " : " "} `
    : ""
  ageObj.stringWeeks = weeks ? `${weeks} week${weeks > 1 ? "s " : " "}` : ""
  ageObj.stringDays = days ? `${days} day${days > 1 ? "s " : " "}` : ""git
  ageObj.stringHours = hours ? `${hours} hour${hours > 1 ? "s " : " "}` : ""
  ageObj.stringMinutes = minutes
    ? `${minutes} minute${minutes > 1 ? "s " : " "}`
    : ""

  return ageObj
  // return `${stringYears} ${stringWeeks} ${stringDays} ${stringHours} ${stringMinutes ? "and " + stringMinutes : stringMinutes} old`
}

const calculateHeartBeats = () =>
  Math.floor(getCurrentAge() / MS_IN_HEARTBEAT)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
const calculateBreaths = () =>
  Math.floor(getCurrentAge() / MS_IN_BREATH)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")

const Age = () => {
  const [age, setAge] = useState(calculateAge())
  const [heartbeats, setHeartBeats] = useState(calculateHeartBeats())
  const [breaths, setBreaths] = useState(calculateBreaths())

  useEffect(() => {
    setTimeout(() => {
      setAge(calculateAge())
    }, 1000)

    const breath_id = setTimeout(() => {
      setBreaths(calculateBreaths())
    }, MS_IN_BREATH)

    const age_id = setTimeout(() => {
      setHeartBeats(() => calculateHeartBeats())
    }, MS_IN_HEARTBEAT)
  })

  return (
    <AgeWrapper>
      <Intro>Oliver is</Intro>
      <StyledAge>
        {Object.keys(age).map((x, i) => {
          if (i === Object.keys(age).length - 1) {
            return <div>and {age[x]} old.</div>
          }
          return <div style={{ paddingRight: "10px" }}>{age[x]}</div>
        })}
      </StyledAge>
      <BreathWrapper>
        His heart has beaten {heartbeats} times and he has taken {breaths}{" "}
        breaths.
      </BreathWrapper>
    </AgeWrapper>
  )
}

const Intro = styled.p`
  font-size: 1.5rem;
  font-family: ${fonts.primary};
  color: ${colors.button};
  margin-bottom: 1rem;
  font-weight: 500;
  width: 100%;
  @media screen and (min-width: 850px) {
    text-align: center;
  }
`
const StyledAge = styled.p`
  font-size: 1.5rem;
  font-family: ${fonts.primary};
  font-weight: 100;
  display: flex;
  width: 100%;
  @media screen and (max-width: 850px) {
    flex-direction: column;
  }
`
const AgeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
`
const BreathWrapper = styled.p`
  font-size: 0.7rem;
  font-family: ${fonts.primary};
  color: ${colors.button};
`
export default Age
