import'./App.css'
import MultiLevelDropdown from './components/MultiLevelDropdown'

const menuData = [
  {label: 'Menu1'},
  {
    label: 'Menu2',
    submenu: [{label: 'Sub Menu1'}, {label: 'Sub Menu2'}]
  },
  {
    label: 'Menu3',
    submenu: [
      {label: 'Sub Menu1'},
      {label: 'Sub Menu2'},
      {label: 'Sub Menu3'},
      {
        label: 'Sub Menu4',
        submenu: [{label: 'Sub sub Menu1'}, {label: 'Sub sub Menu2'}]
      }
    ]
  },
  {
    label: 'Menu4',
    submenu: [{label: 'Sub Menu1'}, {label: 'Sub Menu2'}]
  }
]

const App = () => {
  const toggleSubmenu = (e) => {
    console.log(e.target)
    const submenu = e.target.querySelector('ul')

    if(!submenu) return

    if(submenu.style.display === 'none'){
      submenu.style.display = 'block'
    }else{
      submenu.style.display = 'none'
    }
  }
  const renderSubMenu = (subMenu) => {
    return(
      <ul className='submenu'>
        {
          subMenu.map((subItem, index) => (
            <li key={index} onClick={toggleSubmenu}>
              {subItem.label}
              {subItem.submenu && renderSubMenu(subItem.submenu)}
            </li>
          ))
        }
      </ul>
    )
  }

  return (
    <div>
      <ul>
        {
          menuData.map((item, index) => (
            <li key={index} onClick={toggleSubmenu}>
              {item.label}
              {item.submenu && renderSubMenu(item.submenu)}
            </li>
          ))
        }
      </ul>
      <br />
      <MultiLevelDropdown menuData={menuData}/>
    </div>
  )
}

export default App