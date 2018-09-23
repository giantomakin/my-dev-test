import React from 'react'
import Article from './Article.js'

class Tab extends React.Component {
  constructor() {
    super()
    this.state = {
      activeTab: 1
    }
    this.tabClick = this.tabClick.bind(this)
  }
  tabClick(e, tab) {
    e.preventDefault()
    this.setState({ activeTab: tab })
  }
  render() {
    return (
      <main>
        <div className="tab">
          <a href="#" className={this.state.activeTab === 1 ? 'tablinks active' : 'tablinks'} onClick={(e) => { this.tabClick(e, 1) }}>THINGS TO DO</a>
          <a href="#" className={this.state.activeTab === 2 ? 'tablinks active' : 'tablinks'} onClick={(e) => { this.tabClick(e, 2) }}>PLACES TO EAT</a>
        </div>
  
        <div className={this.state.activeTab === 1 ? 'tabcontent show' : 'tabcontent'}>
            <Article
              image = "../images/IMG_3532.jpg"
              headerClass = "article-header ah-green"
              title = "Go Hiking"
              iconClass = "fa fa-binoculars fa-green"
              content ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              readLinkClass = "article-read-link"
            />
            <Article
              image="../images/IMG_3756.jpg"
              headerClass="article-header ah-green"
              title="Antiquing"
              iconClass="fa fa-key fa-green"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
              readLinkClass="article-read-link"
            />
            <Article
              image="../images/IMG_3629.jpg"
              headerClass="article-header ah-green"
              title="Local Farms"
              iconClass="fa fa-leaf fa-green"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              readLinkClass="article-read-link"
            />
          </div>
     

        <div className="tabcontent" className={this.state.activeTab === 2 ? 'tabcontent show' : 'tabcontent'}>
            <Article
              image="../images/IMG_3618.jpg"
              headerClass="article-header ah-red"
              title="Best Mexican"
              iconClass="fa fa-fire fa-red"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              readLinkClass="article-read-link2"
            />
            <Article
              image="../images/IMG_3739.jpg"
              headerClass="article-header ah-red"
              title="We All Scream For Ice cream!"
              iconClass="fa fa-utensil-spoon fa-red"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
              readLinkClass="article-read-link2"
            />
            <Article
              image="../images/IMG_3390.jpg"
              headerClass="article-header ah-red"
              title="Great Ramen Places"
              iconClass="fa fa-heart fa-red"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
              readLinkClass="article-read-link2"
            />
          </div>
    
      </main>
    )
  }
}

export default Tab

