import * as React from "react"
import { Link } from "gatsby"

import Layout from "src/components/layout"
import Seo from "src/components/seo"

const Food = () => (
  <Layout>
    <Seo title="Stages of Life" />
    <h1>Stages of Life</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p>
  </Layout>
)

export default Food
