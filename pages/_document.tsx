import { ServerStyleSheets } from '@material-ui/styles'
import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'
import React from 'react'
import theme from 'lib/theme'

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    // Render app and page and get the context of the page with collected side effects.
    const sheets = new ServerStyleSheets()
    const originalRenderPage = ctx.renderPage

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheets.collect(<App { ...props } />),
      })

    const initialProps = await Document.getInitialProps(ctx)

    return {
      ...initialProps,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: [
        ...React.Children.toArray(initialProps.styles),
        sheets.getStyleElement(),
      ],
    }
  }

  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <meta name='theme-color' content={ theme.palette.primary.main } />
          <meta
            name='description'
            content='Sports card marketplace designed by and catered to hobby enthusiasts. We love the community and are persistently working to make a marketplace that better serves it.'
          />
          <meta property='og:site_name' content='Prospect Cards' />
          <meta property='og:type' content='website' />
          <meta
            property='og:description'
            content='Prospect Cards - Sports Card Marketplace'
          />
          <meta name='apple-mobile-web-app-capable' content='yes' />

          <link
            rel='shortcut icon'
            type='image/x-icon'
            sizes='16x16 24x24 32x32 48x48 64x64 120x120 144x144'
            href={ `${process.env.NEXT_PUBLIC_CLIENT_URI}/favicon.ico` }
          />
          <link
            rel='apple-touch-icon-precomposed'
            sizes='152x152'
            href={ `${process.env.NEXT_PUBLIC_CLIENT_URI}/favicon-152.png` }
          />
          <link rel='stylesheet' href='https://use.typekit.net/mhc5mbf.css' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
