
import React from 'react'
import { useSession } from '../SessionContext'

const Dashboard = () => {
  const sesion = useSession()
  return (
    <div>Hola {sesion.session.user.name}</div>
  )
}

export default Dashboard