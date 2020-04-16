import React from "react"
import { Link } from "gatsby"
import Stats from "../components/Stats"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import Age from '../components/age'
import BackgroundImage from 'gatsby-background-image'
import {fonts, colors} from '../utils/styles'
import Day from "../components/day"

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "main-oliver-background.JPG" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          <h2>Oliver Brooks Bovee</h2>
        </BackgroundImage>
      )
    }}
  />
)

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  height: 100vh;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`



const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Logo>
      Oliver Brooks Bovee
    </Logo>
    <Image />
    <Row>
      <Col  style={{flexBasis: "40%"}}>
        <Stats />
      </Col>
      <Col>
        <Age /> 
      </Col>
    </Row>
    <Row>
      <hr style={{border: '1px solid black'}}/>
    </Row>
    <Row>
      <Col >
        <RowTitle>Day by day</RowTitle>
      </Col>
    </Row>
    <Image image="firstNight" />
    <Day number={1}>
      Oliver was born today! He had a really hard time latching onto Mom, but got an occasional good one every now and then. He also pooped a ton! Almost 3 diapers full in one day. He was a great sleeper through the night. First poop, First bath.
    </Day>
    <Image image="crossed-close" />
    <Day number={2}>
      First time latching, lots of crying, very little sleeping.

    </Day>
    <Image image="crossed" />
    <Day number={3}>
      First little laugh. First day out of the hospital. First car ride. First day back at home. First time trying breast milk. It's adorable to watch him wrap his arms around mommy's boob. Really fussy.
    </Day>
    <Day number={4}>
      First time at the pediatrics office. Dani was really concerned because he was so under weight. The doctor said we had to supplement formula to help him get his weight back up. He was sleeping better after one bottle of formula.
    </Day>
    <Day number={5}>
      First smile. Gained half a pound over night. Had to get blood drawn to test for conjegated bilirubin. 😢 First bath!
    </Day>
  </Layout>
)
const dark = "black";

const Logo = styled.h1`
  font-size: 2rem;
  text-align: center;
  font-family: ${fonts.primary};
  font-weight: 300;
  text-transform: uppercase;
  border-bottom: solid ${colors.headline} 1px;
  width: 50%;
  margin: 30px auto;
  color: ${colors.headline};
`

const RowTitle = styled.h2`
  font-family: ${fonts.primary};
  text-align: center;
  width: 100%;
  margin-top: 100px;
`


const Row = styled.div`
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
  @media screen and (min-width: 640px) {
    display: flex;
}
`
const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px -15px;
  width: 100%;

`
export default IndexPage
