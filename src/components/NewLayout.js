import React, { useEffect } from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'


const StyledDiv = styled.div`
    display : flex;
    justify-content : center;
    width : 100%;
    font-family : 'Roboto', sans-serif;


    .contanier {
        width : 100%;
        border : 1px solid black;
    }
`

const StyledHeader = styled.header`
    display : flex;
    justify-content : center;
    width : 100vw;

    .title {
        display : flex;
        justify-content : center;
        font-size : 50px;
        font-weight : bolder;
        border : 1px solid blue;

        span {
        }

    }

    .titlesub {
        display : flex;
        justify-content : space-evenly;
        width : 70vw;
        font-size : 24px;
        border : 1px solid red;
        height : 50px;

        .link {
            position : relative;
            margin-top : 15px;
            border : 1px solid red;
            margin-bottom : 5px;

            &:hover {
                cursor : pointer;
                border-bottom : 20px solid #777eaaaa;
                &::before {
                    content : '';
                    position: absolute;
                    border-color: rgb(30, 100, 255);
                    border-style: solid;
                    border-width: 0 0.3em 0.25em 0;
                    height: 1em;
                    right : -1em;
                    transform: rotate(45deg);
                    width: 0.5em;
                }
                transition : all 0.4s;
            }
        }
    }


    .tags {
        width : 100%;
        display : flex;
        justify-content : flex-end;
        
        a {
            margin-right : 15px;
            font-family : 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            color : #777;
            font-weight : bold;

            &:hover {
                color : rgb(30, 100, 255);
                transition : color 0.4s;
            }
            transition : color 0.4s;
        }
    }


`
const StyledMain = styled.main`
    display : flex;
    justify-content : center;
    width : 100%;
    padding-top : 5px;
    border : 2px solid violet;
`

const StyledAsid = styled.aside`

@media(max-width : 800px) {
    display : flex;
    justify-content : center;
    width : 100vw;
    border : 3px solid #434343;
}

        border : 2px solid rebeccapurple;
        width : 100px;

    .info {
        padding-left : 30px;
        font-size : 12px;
    }
    

`
const NewLayout = ({children}) => {
    const { data } = useStaticQuery(
        graphql`
          query {
            site {
              siteMetadata {
                title
                description
                author
                imgae
              }
            }
          }
        `
      )

        return (
    <StyledDiv>
        <div className="contanier">
            <StyledHeader>
            <div>
                <p className="title">
                    <span>재웅이 집</span>
                </p>
                <div className="titlesub">
                <Link  className="link"  to="/">
                        <span>Blog</span>
                    </Link>                     
                    <Link  className="link" to="/about">
                        <span>About</span>
                    </Link>                     
                    <Link className="link" to="/">
                        <span>Contact</span>
                    </Link> 
                </div>
                <div className="tags">
                    <a href="#">Git</a>
                    <a href="#">Velog</a>
                </div>
            </div>
            </StyledHeader>
            <StyledAsid>
                <div>
                  <img src={data?.site?.siteMetadata?.imgae}/>
                  <div className="info">임재웅</div>
                  <div className="info">26살</div>
                  <div className="info">숭실 대학교</div>
                </div>
            </StyledAsid>
            <StyledMain>
                    {children}
            </StyledMain>
            </div>
        </StyledDiv>
    )
}

export default NewLayout


