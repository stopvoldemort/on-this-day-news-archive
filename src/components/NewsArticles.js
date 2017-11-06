import React from 'react'


const NewsArticles = (props) => {
  const articleDivs = props.articles.map((article, idx) => {
    return (
      <div key={idx}>
        <h2><a href={article.url} target="_blank">{article.headline}</a></h2>
        <p>{article.snippet}</p>
      </div>
    )
  })
  return (
    <div>
      {articleDivs}
    </div>
  )
}

export default NewsArticles
