import React from "react"
import { graphql } from "gatsby"
import { Card, CardHeader, Text, CardBody, Grid, Heading, Paragraph, Box } from 'grommet';
import Link from '../components/link';

import Bio from "../components/bio"
import SEO from "../components/seo"

const BlogIndex = ({ data }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <>
      <SEO title="All posts" />
      <Bio />
      <Box
        pad={{
          horizontal: 'small'
        }}
      >
        <Grid 
          align='start'
          columns={{count: 'fill', size: 'medium'}}
          gap='small'
        >
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <Card
                key={node.fields.slug}
                background={{'light': '#F5F5F5', 'dark': '#212121'}}
                elevation='none'
              >
                <CardHeader
                  pad={{
                    horizontal: 'medium',
                    vertical: 'small'
                  }}
                >
                  <Link to={node.fields.slug}>
                    <Heading
                      level='4'
                      pad={{
                        horizontal: 'medium'
                      }}
                      margin='none'
                    >
                      {title}
                    </Heading>
                  </Link>
                  <Text>{node.frontmatter.date}</Text>
                </CardHeader>
                <CardBody
                  pad={{
                    horizontal: 'medium'
                  }}
                >
                  <Paragraph>
                    {node.frontmatter.description || node.excerpt}
                  </Paragraph>
                </CardBody>
              </Card>
            )
          })}
        </Grid>
      </Box>
    </>
  )
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
