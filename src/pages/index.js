import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Container } from "react-bootstrap"

const IndexPage = ({data}) => (
  <Layout>
    <Container>
      <h1>Main page</h1>
    
      {data.fileInformation.edges.map(({node})=>(

        <ul>
          <li key={node.id}>{node.id}  ||  {node.base}</li>
        </ul>
  
      ))}


      {data.budowy.edges.map(({node})=>(
          <div>
            <h2>
              {node.frontmatter.location}
            </h2>
           <GatsbyImage
           image={getImage(node.frontmatter.gallery_images)}
           alt={node.frontmatter.location}>
           </GatsbyImage>
          </div>
      ))}
    </Container>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export const query = graphql`
  query {
    fileInformation: allFile {
      edges {
        node {
          id
          base
          ino
        }
      }
    }
    budowy: allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            location
            date
            title
            gallery_images {
              childImageSharp {
                gatsbyImageData(width: 600)
              }
            }
          }
        }
      }
    }

  }
`
export default IndexPage
