import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { Nav, Navbar, Button } from 'react-bootstrap'
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
            duration={1.5}
            to="/">OGS
            </AniLink>
            {/* mobile CTA */}
            <a href="mailto:info@oakwoodguitarschool.com?subject=I'd%to%20book%20a%20lesson!" className="d-flex d-lg-none ml-auto my-0">
              <Button variant="ogs">Book a Trial!</Button>
            </a>
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
                      duration={1.5}
                      to={node.frontmatter.slug}>{node.frontmatter.title}</AniLink>
                  </div>
                  ))}
                  <AniLink 
                  className="nav-link" 
                  cover bg="#000" 
                  duration={1.5}
                  to="/contact">Contact</AniLink>
                  {/* cta */}
                  <a href="mailto:info@oakwoodguitarschool.com?subject=I'd20%like%20to%20book%20a%20lesson!" className="d-none d-lg-flex ml-2 my-0">
                    <Button variant="ogs">Book a Trial!</Button>
                  </a>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}


