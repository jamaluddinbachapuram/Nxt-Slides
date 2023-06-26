import {v4 as uuidv4} from 'uuid'

import SlideContext from '../../Context'

import './index.css'

const NewButton = () => (
  <SlideContext.Consumer>
    {value => {
      const {addNewItem, activeIndex, changeActiveTab} = value

      const onClickAddButton = () => {
        const id = uuidv4()
        const item = {
          id,
          heading: 'Heading',
          description: 'Description',
        }

        addNewItem(item)
        changeActiveTab(activeIndex + 1)
      }
      const onDoubleClickBtn = () => {
        console.log('Hi')
      }

      return (
        <div>
          <button
            className="add-new-button"
            type="button"
            onClick={onClickAddButton}
            onDoubleClick={onDoubleClickBtn}
          >
            <img
              className="plus-icon"
              src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png "
              alt="new plus icon"
            />
            New
          </button>
        </div>
      )
    }}
  </SlideContext.Consumer>
)

export default NewButton
