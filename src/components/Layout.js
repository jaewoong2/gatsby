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
        max-width: 80%;
        height : 100vh;
        padding: 0;
        margin-top : 10%;

        .nav {
          display : flex;
          justify-content : center;
        }

        
        .link{
        &:hover {
          border-bottom : 15px sold #777;
        }
      }

`

const StyledHThree = styled.h3`
        font-size : 60px;
        font-style: normal;

`

const StyledLik = styled(Link)`
margin-bottom : 10px;
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
      <div className="nav">
        <div>
        <Link className="link" to='/'>
            <StyledHThree>
            {data.site.siteMetadata.title}
            </StyledHThree>
        </Link>
        <StyledLik to="/about">
            About
        </StyledLik>
        </div>
      </div>
        {children}
    </WrapperDiv>
      {/* {children} */}
    </React.Fragment>
  )
}