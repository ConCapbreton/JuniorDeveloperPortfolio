import { createContext, useContext, ReactElement, useState, CSSProperties } from 'react'
import { useParams, Params } from "react-router-dom"

type MenuContextProps = {
    hamburgerShow: boolean
    setHamburgerShow: React.Dispatch<React.SetStateAction<boolean>>
    menuOff: any
    toggleHamburgerMenu: any
    menuShow: CSSProperties
    menuHide: CSSProperties
    hamburgerColumnCorretion: CSSProperties
    menu: boolean
    CV: string | undefined
}

const MenuInitialValues: MenuContextProps = {
    hamburgerShow: false,
    setHamburgerShow: () => {},
    menuOff: () => {},
    toggleHamburgerMenu: () => {},
    menuShow: {},
    menuHide: {},
    hamburgerColumnCorretion: {},
    menu: false,
    CV: '',
}

const MenuContext = createContext(MenuInitialValues)

type ChildrenType = {children?: ReactElement | ReactElement[]}

const MenuProvider = ({children}: ChildrenType) => {
    
    const [hamburgerShow, setHamburgerShow] =useState<boolean>(false)
    const menuOff = (): any => {
        setHamburgerShow(false)
    }
    const toggleHamburgerMenu = (): any => {
        setHamburgerShow((prevState) => !prevState)
    }

    const menuShow: CSSProperties = {
        backgroundColor: "black",
        width: "130px",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",}
    const menuHide: CSSProperties = {display: "none",}
    const hamburgerColumnCorretion: CSSProperties = {marginTop: "175px",}
    
    
    const [menu, setMenu] = useState<boolean>(window.innerWidth < 1024 ? true : false)
    const query: MediaQueryList = matchMedia('(max-width: 1024px)')
    query.addEventListener('change', () => {window.innerWidth < 1024 ? setMenu(true) : setMenu(false);})

    const { CV } = useParams<Params>()

    return (
        <MenuContext.Provider value={{hamburgerShow, setHamburgerShow, menuOff, toggleHamburgerMenu, menuShow, menuHide, hamburgerColumnCorretion, menu, CV}}>
            {children}
        </MenuContext.Provider>
    )
}

export default MenuProvider

export const useMenuContext = () => useContext(MenuContext)