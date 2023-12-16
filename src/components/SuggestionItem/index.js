// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionItem, key, search} = props
  const {suggestion, id} = suggestionItem

  const onClickingArrow = () => {
    search(id)
  }

  return (
    <li className="suggestions-card">
      <p>{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow-icon"
        onClick={onClickingArrow}
      />
    </li>
  )
}

export default SuggestionItem
