import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { rhythm } from "../typography/typography"
import { graphql, Link } from "gatsby"

const StyledHone = styled.h1`
        display: inline-block;
        border-bottom: 1px solid;
`

const StyledHthree = styled.h3`
        margin-bottom: ${rhythm(1 / 4)};


        .span {
          color : #555;
        }
`

const StyledLink = styled(Link)`
  text-decoration : none;
  color : inherit;
`


export default function Home({ data }) {

  return (
    <Layout>
      {/* <h1>Amazing Pandas Eating Things</h1> */}
      <div>
        <StyledHone>
          Amazing Pandas eating Things
        </StyledHone>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <StyledLink to={node.fields.slug}>
            <StyledHthree>
            {node.frontmatter.title}{" "}
            <span>
            — {node.frontmatter.date}
            </span>
            </StyledHthree>
            <p>{node.excerpt}</p>
            {/* 노드 내용 */}
            </StyledLink>
          </div>
        ))}
      </div>
    </Layout>
  )
}


export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`