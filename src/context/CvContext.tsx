import { createContext, useContext, ReactElement, useState, CSSProperties } from 'react'

type ContextProps = {
    education: boolean
    languages: boolean
    experience: boolean
    other: boolean
    arrowDown: CSSProperties
    arrowUp: CSSProperties
    show: CSSProperties
    hidden: CSSProperties
    toggleSection: any
    reset: any
    
}

const InitialValues: ContextProps = {
    education: false,
    languages: false,
    experience: false,
    other: false,
    arrowDown: {},
    arrowUp: {},
    show: {},
    hidden: {},
    toggleSection: () => {},
    reset: () => {},
}

const CvContext = createContext(InitialValues)

type ChildrenType = {children?: ReactElement | ReactElement[]}

const CvProvider = ({children}: ChildrenType) => {
    const [education, setEducation] = useState<boolean>(false)
    const [languages, setLanguages] = useState<boolean>(false)
    const [experience, setExperience] = useState<boolean>(false)
    const [other, setOther] = useState<boolean>(false)

    const arrowDown: CSSProperties = {
        transform: "rotate(0)",
    }
    const arrowUp: CSSProperties = {
        transform: "rotate(180deg)",
    }
    const show: CSSProperties = {
        transform: "translateX(0)",
        transition: "1s",
    }
    const hidden: CSSProperties = {
        transform: "translateX(-2000%)",
        position: "absolute",
    }
      
    const toggleSection = (e: Event): any => {
        const target = e.target as HTMLElement
        const element = target.className as string
        const parentA = target.parentElement as HTMLElement
        const parentB = parentA.parentElement as HTMLElement
        if (element == "education" || parentA.className == "education" || parentB.className == "education") {setEducation(prevState => !prevState)}
        if (element == "languages" || parentA.className == "languages" || parentB.className == "languages") {setLanguages(prevState => !prevState)}
        if (element == "experience" || parentA.className == "experience" || parentB.className == "experience") {setExperience(prevState => !prevState)}
        if (element == "other" || parentA.className == "other" || parentB.className == "other") {setOther(prevState => !prevState)}
    }

    const reset = (): void => {
        setEducation(false);
        setLanguages(false)
        setExperience(false)
        setOther(false)
    }

    return (
        <CvContext.Provider value={{education, languages, experience, other, arrowDown, arrowUp, show, hidden, toggleSection, reset}}>
            {children}
        </CvContext.Provider>
    )
}

export default CvProvider

export const useCvContext = () => useContext(CvContext)