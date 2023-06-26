import {Component} from 'react'

import SlideContext from '../../Context'

import './index.css'

class Slide extends Component {
  state = {
    headingActive: true,
    descriptionActive: true,
  }

  onClickHeading = () => {
    this.setState({
      headingActive: false,
    })
  }

  onClickDescription = () => {
    this.setState({
      descriptionActive: false,
    })
  }

  render() {
    const {headingActive, descriptionActive} = this.state
    return (
      <SlideContext.Consumer>
        {value => {
          const {
            initialList,
            activeIndex,
            changeHeading,
            changeDescription,
          } = value

          const onBlurHeading = event => {
            if (event.target.value === '') {
              changeHeading('Heading')
            }
            this.setState({
              headingActive: true,
            })
          }

          const onBlurDescription = event => {
            if (event.target.value === '') {
              changeDescription('Description')
            }
            this.setState({
              descriptionActive: true,
            })
          }

          const onChangeHeading = event => {
            changeHeading(event.target.value)
          }

          const onChangeDescription = event => {
            changeDescription(event.target.value)
          }

          const tabDetails = initialList[activeIndex]
          const {description, heading} = tabDetails

          return (
            <div className="slide-view-container">
              <div className="slide-container">
                {headingActive ? (
                  <h1 className="slide-heading" onClick={this.onClickHeading}>
                    {heading}
                  </h1>
                ) : (
                  <input
                    className="slide-heading-input"
                    type="text"
                    value={heading}
                    onChange={onChangeHeading}
                    onBlur={onBlurHeading}
                  />
                )}

                {descriptionActive ? (
                  <p
                    className="slide-description"
                    onClick={this.onClickDescription}
                  >
                    {description}
                  </p>
                ) : (
                  <input
                    className="slide-description-input"
                    type="text"
                    value={description}
                    onChange={onChangeDescription}
                    onBlur={onBlurDescription}
                  />
                )}
              </div>
            </div>
          )
        }}
      </SlideContext.Consumer>
    )
  }
}

export default Slide
