'use client'


import { ThemeProvider } from "next-themes"
import React, { Children } from "react"

interface Props {
  children: React.ReactNode
}

const Provider = ({ children }: Props) => {
  return <ThemeProvider>{children}</ThemeProvider>
}

export default Provider