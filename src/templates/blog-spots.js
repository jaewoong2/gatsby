import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/Seo";
import Img from 'gatsby-image'
import styled from "styled-components";
import NewLayout from "../components/NewLayout";


const StyledDiv = styled.div`
    width : 100%;
  
  .wrapper {
    display : flex;
    justify-content : center;
    width : 100%;
  }

  .title {
    border : 1px solid blue;
    display : flex;
    position : absolute;
    justify-content : center;
    width : 100vw;
    height : 100vh;
    top : 0;
    z-index : -1;

    h1 {
      padding-top : 300px;
      font-size : 50px;
      color : #383838;
    }
}
  
.flex{
  display : flex;
  justify-content : center;
  width : 100%;
  margin-top : 10px;
  border-top : 30px dashed #777;
  .content {
    display : block;
    width : 1000px;
    padding-top : 30px;
    margin : 0 auto;
  }

}
`
const StlyedIMG = styled(Img)`
  opacity : 0.5;
  margin : 0 auto;
  max-width : 1000px;
  z-index : -2;
`


export default function BlogPost({ data }) {

  const post = data?.markdownRemark;
  let featuredImgFluid = post.frontmatter?.featuredImage?.childImageSharp.fluid;

  return (
    <NewLayout>
    <SEO title={post.frontmatter.title} description={post.excerpt} />
    <StyledDiv>
        {featuredImgFluid ? <StlyedIMG fluid={featuredImgFluid}/> : <StlyedIMG/>}
      <div className="wrapper">
        <div className="title">
          <h1>{post?.frontmatter?.title}</h1>
        </div>
      </div>
      <div className="flex">
        <div className="content" dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      </StyledDiv>
    </NewLayout>
  )
}



export const query = graphql`
query($slug: String!) {
  markdownRemark(fields: { slug: { eq: $slug } }) {
    html
    frontmatter {
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      excerpt
    }
  }
`