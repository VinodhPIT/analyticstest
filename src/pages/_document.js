import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script';
export default function Document() {
  return (
    <Html lang="en">
      <Head />
     
                <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-KWHQ36H2');
              `,
            }}
          />



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
     
      <noscript>
  <iframe
    src="https://www.googletagmanager.com/ns.html?id=GTM-KWHQ36H2"
    height="0"
    width="0"
    style={{ display: 'none', visibility: 'hidden' }}
  ></iframe>
</noscript>

        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
