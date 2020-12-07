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
          <meta property='og:site_name' content='Prospect Cards' />
          <meta property='og:type' content='website' />
          <meta
            property='og:description'
            content='Prospect Cards - Sports Card Marketplace'
          />
          <meta
            name='viewport'
            content='minimum-scale=1, initial-scale=1, width=device-width'
          />
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap'
          />
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
