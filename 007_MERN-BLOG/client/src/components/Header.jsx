import {Button, Navbar, TextInput} from 'flowbite-react'
import { Link, useLocation } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaMoon } from'react-icons/fa'

const Header = () => {
    const path = useLocation().pathname

  return (
    <Navbar className='border-b-2'>
        <Navbar.Brand to='/' as={Link} className='whitespace-nowrap self-center text-sm sm:text-xl font-semibold dark:text-white'>
            <span className='px-2 py-1 bg-gradient-to-r 
            from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Aman's</span>
            Blog
        </Navbar.Brand>
        <TextInput
         id='search'
         type='text'
         placeholder='Search...'
         rightIcon={AiOutlineSearch}
         className='hidden lg:inline'
        />
        <Button className='w-12 h-10 lg:hidden' color='gray' pill>
            <AiOutlineSearch className='self-center'/>
        </Button>
        <div className='flex gap-2 md:order-2'>
            <Button className='w-12 h-10 hidden sm:inline' color='gray' pill>
                <FaMoon className='self-center'/>
            </Button>
            <Button to='/sign-in' gradientDuoTone='purpleToBlue' as={Link}>
                Sign In
            </Button>
            <Navbar.Toggle/>
        </div>
        <Navbar.Collapse>
            <Navbar.Link to='/' as={Link} active={path === '/'}>Home</Navbar.Link>
            <Navbar.Link to='/about' as={Link} active={path === '/about'}>About</Navbar.Link>
            <Navbar.Link to='/projects' as={Link} active={path === '/projects'}>Projects</Navbar.Link>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default Header