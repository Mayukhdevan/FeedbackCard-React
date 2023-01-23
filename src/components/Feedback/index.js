import {Component} from 'react'
import './index.css'

const Emoji = props => {
  const {emoji, onRateHappy} = props

  const giveFeedback = () => onRateHappy()

  return (
    <li key={emoji.id} className="emoji-item" onClick={giveFeedback}>
      <img src={emoji.imageUrl} alt={emoji.name} />
      <p className="emoji-name">{emoji.name}</p>
    </li>
  )
}

class Feedback extends Component {
  state = {thankYouScreen: false}

  rateHappy = () => this.setState({thankYouScreen: true})

  render() {
    const {thankYouScreen} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources

    return (
      <div className="bg-container">
        <div className="feedback-card">
          {thankYouScreen ? (
            <>
              <img className="love-emoji" src={loveEmojiUrl} alt="love emoji" />
              <h1 className="thanks-title">Thank You</h1>
              <p className="thanks-description">
                We will use your feedback to improve our customer support
                performance
              </p>
            </>
          ) : (
            <>
              <h1 className="feedback-text">
                How satisfied are you with our customer support performance?
              </h1>
              <ul className="emoji-container">
                {emojis.map(each => (
                  <Emoji
                    emoji={each}
                    key={each.id}
                    onRateHappy={this.rateHappy}
                  />
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    )
  }
}

export default Feedback
