import React, {Component} from 'react'
import NewsArticles from './NewsArticles'
import SearchForm from './SearchForm'
import Logo from './Logo'

class NewsContainer extends Component {

  state = {
    search: "",
    year: 2017,
    page: 0,
    articles: [
      {}
    ]
  }

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
    this.fetchNews()
  }

  handleScroll = () => {
    const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight-1) {
      const newPage = this.state.page + 1
      this.setState({
        page: newPage
      }, () => this.fetchNews())
    } else return null;
  }

  changeData = (data) => {
    this.setState({
      search: data.search, year: data.year, page: 0, articles: [{}]
    }, () => this.fetchNews())
  }

  getDate = () => {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1;
    if(dd<10) {dd = '0'+dd}
    if(mm<10) {mm = '0'+mm}
    return (`${this.state.year}` + mm + dd)
  }


  createDateURL = () => {
    const beginDate = this.getDate()
    const endDate = (parseInt(beginDate, 10)+1).toString()
    return ('&begin_date=' + beginDate + '&end_date=' + endDate)
  }

  createApiKeyURL = () => {
    const NYT_API_KEY = "20ce2b93fe0746a19e1c2412c6d73c98"
    return ('api-key=' + NYT_API_KEY)
  }

  createSearchURL = () => {
    if (this.state.search) {
      const SEARCH_TERMS = this.state.search.replace(/\s+/g, '+').toLowerCase()
      return ('&query=' + SEARCH_TERMS)
    } else {return ""}
  }

  createPageURL = () => {
    const startingArticle = this.state.page * 10
    return ('&page=' + startingArticle)
  }

  fetchNews = () => {
    const BASE_URL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?"
    const URL = BASE_URL + this.createApiKeyURL() + this.createDateURL() + this.createSearchURL() + this.createPageURL()
    fetch(URL)
      .then(res => res.json())
      .then(json => {
        const newArticles = json.response.docs.map(article => {
          let obj = {};
          obj.headline = article.headline.main
          obj.snippet = article.snippet
          obj.url = article.web_url
          return obj
        })
        this.refreshArticles(newArticles)
        console.log("news fetched");
      })
  }

  refreshArticles = (newArticles) => {
    let oldArticles
    if (this.state.page !== 0) {
      oldArticles = this.state.articles
    } else {
      oldArticles = []
    }
    this.setState({
      articles: oldArticles.concat(newArticles)
    })
  }



  render() {
    return(
      <div>
        <Logo />
        <SearchForm changeData={this.changeData} />
        <br />
        <br />
        <h1>{this.state.year}</h1>
        <NewsArticles articles={this.state.articles} />
      </div>
    )
  }
}

export default NewsContainer
