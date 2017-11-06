import React, {Component} from 'react'

class SearchForm extends Component {
  state = {
    search: "",
    year: ""
  }

  handleSearchChange = (ev) => {
    const newInput = ev.target.value
    this.setState({search: newInput})
  }

  handleYearChange = (ev) => {
    const newInput = ev.target.value
    this.setState({year: newInput})
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    const data = this.state
    if (this.checkIfValidYear(data.year)) {
      this.props.changeData(data)
    } else {
      alert("That is not a valid year!")
    }
    this.setState({
      search: "",
      year: ""
    })
  }

  checkIfValidYear = (year) => {
    if (year && (parseInt(year, 10) > 1850) && (parseInt(year, 10) < 2018)) {
      return true
    } else {return false}
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Year (1851 to today): </label>
          <input type="text" value={this.state.year} onChange={this.handleYearChange} />
          <br /><br />
          <label>Keywords (optional): </label>
          <input type="text" value={this.state.search} onChange={this.handleSearchChange} />
          <br /><br />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default SearchForm
