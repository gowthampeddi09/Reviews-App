// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    currentReviewIndex: 0,
  }

  onNextReview = () => {
    const {reviewsList} = this.props
    /* this.setState(prevState => ({
      currentReviewIndex:
        (prevState.currentReviewIndex + 1) % reviewsList.length,
    })) */

    this.setState(prevState => {
      const nextIndex = prevState.currentReviewIndex + 1
      if (nextIndex < reviewsList.length) {
        return {currentReviewIndex: nextIndex}
      }
      // return null
      return {currentReviewIndex: prevState.currentReviewIndex}
    })
  }

  onPrevReview = () => {
    /* this.setState(prevState => ({
      currentReviewIndex:
        (prevState.currentReviewIndex - 1 + reviewsList.length) %
        reviewsList.length,
    })) */

    this.setState(prevState => {
      const prevIndex = prevState.currentReviewIndex - 1
      if (prevIndex >= 0) {
        return {currentReviewIndex: prevIndex}
      }
      // return null
      return {currentReviewIndex: prevState.currentReviewIndex}
    })
  }

  render() {
    const {reviewsList} = this.props
    const {currentReviewIndex} = this.state
    const currentReview = reviewsList[currentReviewIndex]

    return (
      <div className="reviews-app">
        <div className="reviews-container">
          <h1 className="main-heading">Reviews</h1>
          <img
            src={currentReview.imgUrl}
            className="user-img"
            alt={currentReview.username}
          />
          <div className="name-container">
            <button
              data-testid="leftArrow"
              type="button"
              onClick={this.onPrevReview}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                className="arrow"
                alt="left arrow"
              />
            </button>
            <p className="name">{currentReview.username}</p>
            <button
              data-testid="rightArrow"
              type="button"
              onClick={this.onNextReview}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                className="arrow"
                alt="right arrow"
              />
            </button>
          </div>
          <p className="company-name">{currentReview.companyName}</p>
          <p className="review">{currentReview.description}</p>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
