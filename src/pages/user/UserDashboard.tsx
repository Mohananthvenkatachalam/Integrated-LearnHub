import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import UserHome from '@/components/user/UserHome'
import UserProfile from './UserProfile'
import Performance from './Performance'
import UserCoursePage from './UserCoursePage'
import HackathonPage from './HackathonPage'
import Mcq from './Mcq'
import ResumeAnalysis from './ResumeAnalysis'
import Settings from './Settings'

export default function Dashboard() {
  return (
    <div className='container relative max-w-screen-2xl py-8'>
      <main>
        <Tabs defaultValue='home'>
          <TabsList className='mb-6'>
            <TabsTrigger value='home'>Home</TabsTrigger>
            <TabsTrigger value='course'>Courses</TabsTrigger>
            <TabsTrigger value='performance'>Performance</TabsTrigger>
            <TabsTrigger value='hackathons'>Hackathons</TabsTrigger>
            <TabsTrigger value='mcq'>MCQ</TabsTrigger>
            <TabsTrigger value='profile'>Profile</TabsTrigger>
            <TabsTrigger value='resume'>Resume Analysis</TabsTrigger>
            <TabsTrigger value='settings'>Settings</TabsTrigger>
          </TabsList>

          <TabsContent value='home'>
            <UserHome />
          </TabsContent>
          <TabsContent value='profile'>
            <UserProfile />
          </TabsContent>
          <TabsContent value='course'>
            <UserCoursePage />
          </TabsContent>
          <TabsContent value='mcq'>
            <Mcq />
          </TabsContent>
          <TabsContent value='performance'>
            <Performance />
          </TabsContent>
          <TabsContent value='hackathons'>
            <HackathonPage />
          </TabsContent>
          <TabsContent value='resume'>
            <ResumeAnalysis />
            </TabsContent>
          <TabsContent value='settings'>
            <Settings />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
