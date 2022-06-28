import React from 'react'

const MyButton = ({text, type, onClick}) => {

  const btnType = ['positive', 'negative'].includes(type)? type:'default'

  MyButton.defaultProps = {
    type: 'default',
  }

  return (
    <div>
      <button className={['MyButton', `MyButton_${btnType}`].join(" ")} onClick={onClick}>
        {text}
      </button>
    </div>
  )
}

export default MyButton
