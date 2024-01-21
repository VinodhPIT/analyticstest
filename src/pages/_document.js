import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
 
<script async src="https://www.googletagmanager.com/gtag/js?id=G-DY31MLR2GR"></script>
<script
         dangerouslySetInnerHTML={{
           __html:  ` window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
         
           gtag('config', 'G-DY31MLR2GR');
         `,}}

></script>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
