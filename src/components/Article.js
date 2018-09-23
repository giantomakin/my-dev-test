import React from 'react'

class Article extends React.Component {
  render() {
    return (
      <article>
        <img src={this.props.image} width="100%" alt="" />
        <header className={this.props.headerClass}>
          <h2>{this.props.title}</h2>
        </header>
        <i className={this.props.iconClass}></i>
        <section className="article-content-section">
          <p>{this.props.content}</p>
        </section>
        <footer>
          <a href="#" className={this.props.readLinkClass}>READ MORE</a>
          <a href="#" className="article-share-link">SHARE <i className="fa fa-share"></i></a>
        </footer>
      </article>
    )
  }
}

export default Article
