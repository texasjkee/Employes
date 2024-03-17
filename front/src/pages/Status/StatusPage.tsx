import { useNavigate, useParams } from 'react-router-dom'
import { Paths } from '../../paths'

import { Button } from '@mui/material'
import { Header, Layout } from '../../components'
import { Modal } from '../../common/'

const STATUSES: Record<string, string> = {
  created: 'Employee was successfully created',
  updated: 'Employee was successfully updated',
  deleted: 'Employee was successfully delated'
}

export const StatusPage = () => {
  const navigate = useNavigate()
  const { status } = useParams()

  return (
    <>
      <Header />
      <Layout>
        <Modal message={status ? STATUSES[status] : 'Fuck!!!'} />
        <Button onClick={() => navigate(`${Paths.home}`)}>Go home</Button>
      </Layout>
    </>
  )
}
