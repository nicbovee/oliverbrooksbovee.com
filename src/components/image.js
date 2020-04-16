import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = ({image}) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "main-oliver-background.JPG" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      crossedLegs: file(relativePath: { eq: "crossed-legs-closeup.JPG" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      firstNight: file(relativePath: { eq: "first-night.JPG" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      crossed: file(relativePath: { eq: "crossed.JPG" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  switch(image) {
    case "crossed-close":
      return <Img fluid={data.crossedLegs.childImageSharp.fluid} />
    case "crossed":
      return <Img fluid={data.crossed.childImageSharp.fluid} />
    case "firstNight":
      return <Img fluid={data.firstNight.childImageSharp.fluid} />
    default:
      return <Img fluid={data.placeholderImage.childImageSharp.fluid} />


  }

}


export default Image
