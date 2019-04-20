import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import './layout.css'
import { ThemeProvider, ThemeConsumer } from 'styled-components'
import { Gray as theme } from '../themes/Gray'
import { Footer, Link, Main } from '../components/Element'
import { Masthead, MastheadDrawer, DefaultLayout } from '../components/Masthead'

//<ThemeConsumer></ThemeConsumer> passes the theme to the prop

const links = [
  {
    variant: 'contrast',
    to: 'health-medicine',
    text: 'Health'
  },
  {
    variant: 'contrast',
    to: 'mind-brain',
    text: 'Mind'
  },
  {
    variant: 'contrast',
    to: 'technology',
    text: 'Technology'
  },
  {
    variant: 'contrast',
    to: 'space-physics',
    text: 'Space'
  },
  {
    variant: 'contrast',
    to: 'environment',
    text: 'Environment'
  }
]

export default class Layout extends React.Component {
  state = {
    drawerOpen: true,
    prevScrollPosition: null
  }

  componentDidMount() {
    window.addEventListener('scroll', this.checkScrollPosition.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.checkScrollPosition.bind(this))
  }

  checkScrollPosition() {
    let offset = 100
    let { drawerOpen } = this.state
    let scrolledDown = window.scrollY > this.prevScrollPosition

    scrolledDown && window.scrollY > offset
      ? drawerOpen &&
        this.setState({ drawerOpen: false, showScrollupImage: true })
      : !drawerOpen &&
        this.setState({ drawerOpen: true, showScrollupImage: false })

    // Hack to keep the header image from changing under 768px.
    // It would be better to query the theme for the tablet size,
    // but there isn't a good way to reach the theme here w/out
    // reorganizing the code.
    if (window.matchMedia('(max-width: 768px)').matches) {
      this.setState({ showScrollupImage: false })
    }

    this.prevScrollPosition = window.scrollY
  }

  render() {
    const { children } = this.props

    return (
      <ThemeProvider theme={theme}>
        <StaticQuery
          query={graphql`
            query SiteTitleQuery {
              site {
                siteMetadata {
                  title
                }
              }
            }
          `}
          render={data => (
            <div>
              <Masthead height="85px">
                <ThemeConsumer>
                  {theme => (
                    <DefaultLayout image={theme.images.mastheadImage} />
                  )}
                </ThemeConsumer>
              </Masthead>
              <Main mt={85}>
                <MastheadDrawer
                  height="56px"
                  width="900px"
                  top="85px"
                  open={this.state.drawerOpen}
                >
                  {links.map((link, i) => (
                    <Link
                      key={i}
                      variant={link.variant}
                      href={link.to}
                      fontSize={[0, 1, 2]}
                    >
                      {link.text}
                    </Link>
                  ))}
                </MastheadDrawer>
                {children}
              </Main>
              <Footer>
                © {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://www.gatsbyjs.org">Gatsby</a>
              </Footer>
            </div>
          )}
        />
      </ThemeProvider>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

