import * as React from 'react'
import StackBlitzSDK, { VM } from '@stackblitz/sdk'
import { useParams } from 'react-router-dom'

type ProjectPageProps = {}
type ProjectPageState = {}
type ProjectPageParams = { id: string }

const ProjectPage: React.FC<ProjectPageProps> = () => {
  const { id } = useParams<ProjectPageParams>()

  console.log(id)

  React.useEffect(() => {
    let vm: VM
    ;(async () => {
      StackBlitzSDK.embedProject('fullstack-editor-embed', {
        files: {},
        title: 'Untitled Project' + id,
        description: 'No description',
        template: 'javascript',
      })

      return () => {
        document.getElementById('fullstack-editor-embed')?.remove()
      }
    })()
  }, [])

  return <iframe id='fullstack-editor-embed' className='h-[calc(100vh-56px)] w-full' />
}

export default ProjectPage
