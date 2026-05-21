import React, { createContext, useState, useEffect } from "react"

export const MyListContext = createContext()

export const MyListContextProvider = ({ children }) => {
  const [list, setList] = useState([])

  const refreshList = () => {
    const data = JSON.parse(localStorage.getItem("myList")) || []
    setList(data)
  }

  useEffect(() => {
    refreshList()
  }, [])

  return (
    <MyListContext.Provider value={{ list, refreshList }}>
      {children}
    </MyListContext.Provider>
  )
}