import React from 'react'
import { NavigateOptions, useNavigate } from 'react-router-dom'

type Props = NavigateOptions & {
  to: string
}

const RedirectPage: React.FC<Props> = ({ to, ...options }) => {
  const navigate = useNavigate()

  React.useEffect(() => {
    navigate(to, options)
  })

  return null
}

export default RedirectPage
