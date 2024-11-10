import { createContext, useState } from "react";

export const taskContext = createContext()

import React from 'react'

export const TaskProvider = ({children}) => {
    const [allTask, setAllTask] = useState([])


return(
    <taskContext.Provider value={{allTask,setAllTask}} >
        {children}
    </taskContext.Provider>
)

}
