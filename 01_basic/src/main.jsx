import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

//can't work bcz of created by own
// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://www.google.com/',
//         target: '_blank'
//     },
//     children: 'click me to visit google'
// }

// this is according to main library
const Visitgoggle = (
  <a href="https://www.google.com" target='_blank'>Visit google</a>
)

const ReactElement = React.createElement (
  'a',
  {href: "https://www.google.com", target: '_blank'},
  'visit google website'
)

createRoot(document.getElementById('root')).render (
  <>
    ReactElement
    {/* <App/> */}
  </>

)
