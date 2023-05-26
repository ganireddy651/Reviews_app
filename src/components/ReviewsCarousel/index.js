// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {index: 0}

  leftArrowClicked = () => {
    const {index} = this.state
    if (index > 0) {
      this.setState(preState => ({
        index: preState.index - 1,
      }))
    } else {
      this.setState({index: 0})
    }
  }

  rightArrowClicked = lengthOfArray => {
    const {index} = this.state
    if (index < lengthOfArray - 1) {
      this.setState(preState => ({
        index: preState.index + 1,
      }))
    } else {
      this.setState({index: lengthOfArray - 1})
    }
  }

  render() {
    const {index} = this.state
    const {reviewsList} = this.props
    const lengthOfArray = reviewsList.length
    const filteredReviewsList = reviewsList[index]

    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <div className="reviews-container">
          <button
            type="button"
            className="custom-btn"
            data-testid="leftArrow"
            onClick={this.leftArrowClicked}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <div className="review-container">
            <img
              src={filteredReviewsList.imgUrl}
              alt={filteredReviewsList.username}
              className="custom-image"
            />
            <p className="user-name">{filteredReviewsList.username}</p>
            <p className="company-name">{filteredReviewsList.companyName}</p>
            <p className="discription">{filteredReviewsList.description}</p>
          </div>
          <button
            type="button"
            className="custom-btn"
            data-testid="rightArrow"
            onClick={() => this.rightArrowClicked(lengthOfArray)}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
