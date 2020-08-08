import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import NewLayout from "../components/NewLayout"

export default function About() {
  return (
    <NewLayout>
      <h4>정말 대단한 프론트엔드 개발자가 되고 싶어요</h4>
      <p>
        We're the only site running on your computer dedicated to showing the
        best photos and videos of pandas eating lots of food.
      </p>
    </NewLayout>
  )
}

export const query = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`