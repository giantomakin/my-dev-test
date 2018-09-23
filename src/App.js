
import React from 'react'
import Tab from './components/Tab.js'
import LazyLoad from 'react-lazyload'

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <header className="top-header">
          <h1>NYC TRAVEL CO</h1>
        </header>
        <LazyLoad height={200} offset={100}>
          <Tab/>
        </LazyLoad>
      </div>
    )
  }
}

export default App
