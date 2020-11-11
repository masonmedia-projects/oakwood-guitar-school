import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { Nav, Navbar } from 'react-bootstrap'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

// export const pageQuery = graphql`
//   query($slug: String!) {
//     markdownRemark(frontmatter: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         date(formatString: "MMMM DD, YYYY")
//         slug
//         title
//       }
//     }
//   }
// `

export default function Menu() {
    const data = useStaticQuery(graphql`
    query MyQuery {
        allMarkdownRemark(
          limit: 10
          filter: { frontmatter: { date: { ne: null } } }
          sort: { fields: [frontmatter___id], order: ASC }
        ) {
          edges {
            node {
              id
              frontmatter {
                date
                slug
                title
              }
            }
          }
        }
      }
      
      
  `)
      return (
        <Navbar collapseOnSelect expand="lg" bg="black" variant="dark" fixed="top" className="py-3 shadow">
            <AniLink 
            className="navbar-brand nav-link" 
            cover bg="#000" 
            to="/">OGS
            </AniLink>
            <Navbar.Toggle aria-controls="responsive-navbar-nav">
              <span className="icon-bar top-bar"></span>
	            <span className="icon-bar middle-bar"></span>
	            <span className="icon-bar bottom-bar"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">

                {data.allMarkdownRemark.edges.map(({ node }) => (
                <div key={node.id}>
                    <AniLink 
                    className="nav-link" 
                    cover bg="#000" 
                    to={node.frontmatter.slug}>{node.frontmatter.title}</AniLink>
                </div>
                ))}
                <Nav.Link href="mailto:info@oakwoodguitarschool.com">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}


