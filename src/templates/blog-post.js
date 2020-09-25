import React from "react"
import { graphql } from "gatsby"
import { Heading, Paragraph, Header, Box, Footer, Markdown } from 'grommet';
import Link from '../components/link';

import Bio from "../components/bio"
import SEO from "../components/seo"

const BlogPostTemplate = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const { previous, next } = pageContext

  return (
    <>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Box
        margin='medium'
      >
        <Header>
          <Heading
            level='1'
          >
            {post.frontmatter.title}
          </Heading>
          <Paragraph>
            {post.frontmatter.date}
          </Paragraph>
        </Header>
        {/* <Box dangerouslySetInnerHTML={{ __html: post.html }} /> */}
        <Box align='center'>
          <Markdown
            components={{
              p: {
                component: Paragraph,
                props: { fill: true }
              }
            }}
          >
            {post.html}
          </Markdown>
        </Box>
        <Footer justify='center' margin='small'>
          <Bio />
        </Footer>
      </Box>

      <Box>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
              ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Box>
    </>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
