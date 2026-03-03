import { useEffect, useState } from "react"
import Nav from "../../components/Nav"

const Header = () => {
    const [show, setShow] = useState(false)

    const toggleShow = () => {
        setShow(prev => !prev)
    }

    useEffect(() => {
        document.body.style.overflow = show ? 'hidden' : ''

        return () => {
            document.body.style.overflow = ''
        }
    }, [show])

    return (
    <header>
      <div className='headerContainer'>
        <div className='headerLogo'>
          <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.3219 0L19.7871 9.10444L26.7831 2.77806L23.9347 11.77L33.2405 10.2302L25.9828 16.2547L34.6438 19.9905L25.2812 21.1349L30.5475 28.9601L22.0525 24.861L22.2522 34.2911L17.3219 26.25L12.3916 34.2911L12.5913 24.861L4.09628 28.9601L9.36262 21.1349L2.47955e-05 19.9905L8.66096 16.2547L1.40334 10.2302L10.7091 11.77L7.86069 2.77806L14.8567 9.10444L17.3219 0Z" fill="#598D66"/>
          </svg>

          <h1>Ink. House</h1>
        </div>

        {(show &&
            <div className='headerMenu'>
            <svg onClick={toggleShow} tabIndex='0' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M6.75 6.75C6.94891 6.55109 7.2187 6.43934 7.5 6.43934C7.7813 6.43934 8.05109 6.55109 8.25 6.75L23.25 21.75C23.4489 21.9489 23.5606 22.2187 23.5606 22.5C23.5606 22.7813 23.4489 23.0511 23.25 23.25C23.0511 23.4489 22.7813 23.5606 22.5 23.5606C22.2187 23.5606 21.9489 23.4489 21.75 23.25L6.75 8.25C6.55109 8.05109 6.43934 7.7813 6.43934 7.5C6.43934 7.21869 6.55109 6.94891 6.75 6.75Z" fill="#2C2D35"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M23.25 6.75C23.4489 6.94891 23.5607 7.2187 23.5607 7.5C23.5607 7.7813 23.4489 8.05109 23.25 8.25L8.25001 23.25C8.0511 23.4489 7.78132 23.5606 7.50001 23.5606C7.21871 23.5606 6.94893 23.4489 6.75002 23.25C6.55111 23.0511 6.43936 22.7813 6.43936 22.5C6.43936 22.2187 6.5511 21.9489 6.75002 21.75L21.75 6.75C21.9489 6.55109 22.2187 6.43934 22.5 6.43934C22.7813 6.43934 23.0511 6.55109 23.25 6.75Z" fill="#2C2D35"/>
            </svg>
            <Nav navClick={toggleShow} />
            </div>)}

        {(!show && <Nav click={toggleShow} />)}
      </div>
    </header>
    )
}

export default Header