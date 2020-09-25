import React, { useState } from "react"
import Link from './link';
import { Grommet, Heading, Header, Footer, Box, Text, Anchor } from 'grommet';
import { Instagram, Twitter, Github, Linkedin, Moon } from 'grommet-icons';
import { grommet } from "grommet/themes";
import { deepMerge } from "grommet/utils";
import { useStaticQuery, graphql } from 'gatsby';

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  let header;

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const [ themeMode, setThemeMode ] = useState('light');

  const onClickThemeMode = () => {
    console.log('IN SET THEME MODE', themeMode)
    if(themeMode === 'light') {
      setThemeMode('dark');
    } else {
      setThemeMode('light');
    }
  }

  const theme = deepMerge(grommet, {
    global: {
      font: {
        family: 'Source Code Pro',
      },
      colors: {
        background: {
          dark: '#121212',
          light: '#FFFFFF',
        },
        text: {
          dark: '#FFFFFF',
          light: '#000000'
        },
        active: '#26A69A',
      },
    },
    anchor: {
      color: '#26A69A',
      hover: {
        color: '#00796B',
      },
    },
  });

  let socialIcons = (
    <Box
      direction="row"
      gap="small"
    >
      <Anchor 
        href='https://www.instagram.com/kylekwiedacz/'
        icon={<Instagram />}
      />
      <Anchor 
        href='https://twitter.com/kylekwiedacz'
        icon={<Twitter />}
      />
      <Anchor 
        href='https://github.com/kkwiedacz/'
        icon={<Github />}
      />
      <Anchor 
        href='https://www.linkedin.com/in/kyle-kwiedacz/'
        icon={<Linkedin />}
      />
      <Anchor 
        icon={<Moon />}
        onClick={() => onClickThemeMode()}
      />
    </Box>
  );

  if (location.pathname === rootPath) {
    header = (
      <Heading
        level="1"
      >
        <Link
          to={`/`}
        >
          {data.site.siteMetadata.title}
        </Link>
      </Heading>
    )
  } else {
    header = (
      <Heading
        level="3"
      >
        <Link
          to={`/`}
        >
          {data.site.siteMetadata.title}
        </Link>
      </Heading>
    )
  }
  return (
    <Grommet
      theme={theme}
      themeMode={themeMode}
      full
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header
        justify='between'
        margin='small'
      >
        {header}
        {socialIcons}
      </Header>
      <Box flex='grow'>{children}</Box>
      <Footer justify='center' margin='small'>
        <Text>© {new Date().getFullYear()}. {data.site.siteMetadata.title}, Built with {` `} <Anchor href="https://www.gatsbyjs.org">Gatsby</Anchor></Text>
      </Footer>
    </Grommet>
  );
};

export default Layout;
