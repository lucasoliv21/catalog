import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"rel="stylesheet"/>
      <Head />
      <body className='bg-slate-100 py-5 px-4'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
