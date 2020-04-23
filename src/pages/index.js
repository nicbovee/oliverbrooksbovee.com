import React from "react"
import { Link } from "gatsby"
import Stats from "../components/Stats"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { graphql, StaticQuery, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import Age from '../components/age'
import BackgroundImage from 'gatsby-background-image'
import {fonts, colors} from '../utils/styles'
import Day from "../components/day"
import Img from "gatsby-image"


// const BackgroundSection = ({ className }) => (
//   <StaticQuery
//     query={graphql`
//       query {
//         desktop: file(relativePath: { eq: "main-oliver-background.JPG" }) {
//           childImageSharp {
//             fluid(quality: 90, maxWidth: 1920) {
//               ...GatsbyImageSharpFluid_withWebp
//             }
//           }
//         }
//       }
//     `}
//     render={data => {
//       // Set ImageData.
//       const imageData = data.desktop.childImageSharp.fluid
//       return (
//         <BackgroundImage
//           Tag="section"
//           className={className}
//           fluid={imageData}
//           backgroundColor={`#040e18`}
//         >
//           <h2>Oliver Brooks Bovee</h2>
//         </BackgroundImage>
//       )
//     }}
//   />
// )

// const StyledBackgroundSection = styled(BackgroundSection)`
//   width: 100%;
//   height: 100vh;
//   background-position: bottom center;
//   background-repeat: repeat-y;
//   background-size: cover;
// `



const IndexPage = () => {
  const data = useStaticQuery(graphql`
  query {
    day3: file(relativePath: { eq: "Day-3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    day4: file(relativePath: { eq: "day-4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    day5: file(relativePath: { eq: "day-5.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    day5b: file(relativePath: { eq: "day-5-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    day5c: file(relativePath: { eq: "day-5-3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    day5d: file(relativePath: { eq: "day-5-4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    day5e: file(relativePath: { eq: "day-5-5.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    day5f: file(relativePath: { eq: "day-5-6.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    day6: file(relativePath: { eq: "day-6.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    day7: file(relativePath: { eq: "day-7.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    day7a: file(relativePath: { eq: "day-7-a.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    day7b: file(relativePath: { eq: "day-7-b.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    day7c: file(relativePath: { eq: "day-7-c.JPG" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    day8: file(relativePath: { eq: "day-8.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    day9: file(relativePath: { eq: "day-9.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
   day9a: file(relativePath: { eq: "day-9a.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    day10: file(relativePath: { eq: "day-10.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    day11: file(relativePath: { eq: "day-11.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    day12: file(relativePath: { eq: "day-12.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    
  
  }
`)
  return(
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
    <Img fluid={data.day3.childImageSharp.fluid} />
    <Img fluid={data.day4.childImageSharp.fluid} />
    <Day number={4}>
      First time at the pediatrics office. Dani was really concerned because he was so under weight. The doctor said we had to supplement formula to help him get his weight back up. He was sleeping better after one bottle of formula.
    </Day>
    <Row>
      <Col>
      </Col>
      <Col>
      </Col>
      <Col>
      </Col>
    </Row>
    <Row>
      <Col>
      </Col>
      <Col>
      </Col>
      <Col>
      </Col>
    </Row>
    <Row>
      <div style={{width: '100%'}}>
        <Img fluid={data.day5.childImageSharp.fluid} />
      </div>
      <div style={{width: '100%'}}>
        <Img fluid={data.day5b.childImageSharp.fluid} />
      </div>
      <div style={{width: '100%'}}>
        <Img fluid={data.day5c.childImageSharp.fluid} />
      </div>

    </Row>
    <Row>
      <div style={{width: '100%'}}>
          <Img fluid={data.day5d.childImageSharp.fluid} />
      </div>
      <div style={{width: '100%'}}>
          <Img fluid={data.day5e.childImageSharp.fluid} />
      </div>
      <div style={{width: '100%'}}>
          <Img fluid={data.day5f.childImageSharp.fluid} />
      </div>

    </Row>

    <Day number={5}>
      First smile. Gained half a pound over night. Had to get blood drawn to test for conjegated bilirubin. 😢 First bath!
    </Day>

    <Img fluid={data.day6.childImageSharp.fluid} />
    <Day number={6}>
      Oliver had an ultrasound to make sure everything was okay with his liver. Thankfully it was! We were super relived. We tried to do new born photos at home. Oliver had his second bath in our kitchen sink.
    </Day>
    <div>
      <div style={{width: '100%'}}>
        <Img fluid={data.day7.childImageSharp.fluid} />
      </div>
      <div style={{width: '100%'}}>
        <Img fluid={data.day7a.childImageSharp.fluid} />
      </div>
      <div style={{width: '100%'}}>
        <Img fluid={data.day7b.childImageSharp.fluid} />
      </div>
    </div>
      <Img fluid={data.day7c.childImageSharp.fluid} />

    <Day number={7}>
      First stroller ride. First time meeting all of the burly babes.
    </Day>

    <Img fluid={data.day8.childImageSharp.fluid} />
    <Day number={8}>
      Oliver met Nana and Papa Larry for the first time. Cooked burgers with daddy.
    </Day> 
    <Img fluid={data.day9.childImageSharp.fluid} />
    <Img fluid={data.day9a.childImageSharp.fluid} />

    <Day number={9}>
      Introduced you to emmaus fellowship.
    </Day>
    
    <Img fluid={data.day10.childImageSharp.fluid} />
    <Day number={10}>
      First diaper rash. 😢 Met Alyssa.
    </Day>

    <Img fluid={data.day11.childImageSharp.fluid} />
    <Day number={11}>
      Oliver met Sarah, Molly, and Britney for the first time.
    </Day>

    <Img fluid={data.day12.childImageSharp.fluid} />
    <Day number={12}>
      Met Uncle Travis, and Aunt Kasey.
    </Day>
  </Layout>
)
  }
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
