import React from 'react'
import { Link } from 'gatsby'

import Layout from '../layouts/layout'
import Image from '../gatsby-components/image'
import SEO from '../gatsby-components/seo'
import { Button, IconButton, Section } from '../components/Element'
import { Search } from 'styled-icons/feather'
import { ShareButtonList } from '../components/SocialShareButton'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Section flex justifyContent="space-evenly" m={2}>
      <Link to="/page-2/">Go to page 2</Link>
      <Button variant="primary">My Custom Button!</Button>
      <IconButton icon={<Search />} />
    </Section>

    <ShareButtonList
      addThisPubId="ra-5cbb4329610b969c"
      googleAnalyticsId=""
      contentTitle="Fake title"
      contentImage="http://placekitten.com/g/300/700"
      contentDescription="Your run of the mill click bait."
    />
  </Layout>
)

export default IndexPage
