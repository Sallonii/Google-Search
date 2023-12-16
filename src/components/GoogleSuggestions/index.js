// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
    placeholderText: 'Search Google',
  }

  onChangingInput = event => {
    this.setState({searchInput: event.target.value})
  }

  search = id => {
    const {suggestionsList} = this.props

    this.setState({placeholderText: suggestionsList[id - 1].suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput, placeholderText} = this.state
    const filteredItemList = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-img"
        />
        <div className="card-cont">
          <div className="search-cont">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
            />
            <input
              type="search"
              className="search-box"
              placeholder={placeholderText}
              onChange={this.onChangingInput}
            />
          </div>
          <ul className="list-items-cont">
            {filteredItemList.map(eachItem => (
              <SuggestionItem
                suggestionItem={eachItem}
                key={eachItem.id}
                search={this.search}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
