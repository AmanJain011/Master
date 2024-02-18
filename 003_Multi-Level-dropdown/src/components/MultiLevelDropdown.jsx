import { useState } from "react"

const MultiLevelDropdown = ({menuData}) => {
  const [isVisible, setIsVisible] = useState(false)
  const expand = (e) => {
    e.stopPropagation()
    setIsVisible(!isVisible)
  }
  return (
    <ul>
        {
            menuData.map((item, index) => (
                <li key={index} onClick={expand}>
                    {item.label}
                    {isVisible && item.submenu && <MultiLevelDropdown menuData={item.submenu}/>}
                </li>
            ))
        }
    </ul>
  )
}

export default MultiLevelDropdown