import React from "react"
import styled, { } from "styled-components"
import { rhythm } from "../typography/typography"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

// const GlobalStyle = createGlobalStyle`
//   body {
//     color: ${props => (props.theme === "purple" ? "purple" : "white")};
//   }
// `
const WrapperDiv = styled.div`
        margin: 0 auto;
        max-width: 700px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
`

const StyledHThree = styled.h3`
        margin-bottom: ${rhythm(2)};
        display: inline-block;
        font-style: normal;
`

const StyledLik = styled(Link)`
          float: right;
`




export default function Layout({ children }) {
const data = useStaticQuery(
  graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `
)
  return (
    <React.Fragment>
      {/* <GlobalStyle theme="purple" /> */}
    <WrapperDiv>
        <Link to='/'>
            <StyledHThree>
            {data.site.siteMetadata.title}
            </StyledHThree>
        </Link>
        <StyledLik to="/about">
            About
        </StyledLik>
        {children}
    </WrapperDiv>
      {/* {children} */}
    </React.Fragment>
  )
}