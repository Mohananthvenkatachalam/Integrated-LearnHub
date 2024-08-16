import { Activity, ArrowUpRight, CreditCard, Users } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Link } from 'react-router-dom'

export default function AdminDashboard() {
  return (
    <div className='mt-6 flex min-h-screen w-full flex-col'>
      <main className='flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8'>
        <div className='grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4'>
          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>Total Users</CardTitle>
              <Activity className='h-4 w-4 text-muted-foreground' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>3465</div>
              <p className='text-xs text-muted-foreground'>+20.1% from last month</p>
            </CardContent>
          </Card>
          <Card x-chunk='dashboard-01-chunk-1'>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>Course Designed</CardTitle>
              <Users className='h-4 w-4 text-muted-foreground' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>+350</div>
              <p className='text-xs text-muted-foreground'>+9.1% from last month</p>
            </CardContent>
          </Card>
          <Card x-chunk='dashboard-01-chunk-2'>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>Top Ranked</CardTitle>
              <CreditCard className='h-4 w-4 text-muted-foreground' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>+12,234</div>
              <p className='text-xs text-muted-foreground'>+19% from last month</p>
            </CardContent>
          </Card>
          <Card x-chunk='dashboard-01-chunk-3'>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>Active Now</CardTitle>
              <Activity className='h-4 w-4 text-muted-foreground' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>+573</div>
              <p className='text-xs text-muted-foreground'>+201 since last hour</p>
            </CardContent>
          </Card>
        </div>
        <div className='grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3'>
          <Card className='xl:col-span-2' x-chunk='dashboard-01-chunk-4'>
            <CardHeader className='flex flex-row items-center'>
              <div className='grid gap-2'>
                <CardTitle>Courses</CardTitle>
                <CardDescription>Recent Courses that had been started.</CardDescription>
              </div>
              <Button asChild size='sm' className='ml-auto gap-1'>
                <Link to='#'>
                  View All
                  <ArrowUpRight className='h-4 w-4' />
                </Link>
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Courses</TableHead>
                    <TableHead className='hidden xl:table-column'>Title</TableHead>
                    <TableHead className='hidden xl:table-column'>Status</TableHead>
                    <TableHead className='hidden xl:table-column'>Date</TableHead>
                    <TableHead className='text-right'>Total Enrolled</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <div className='py-2 font-medium'>Full Stack Java Developer</div>
                    </TableCell>
                    <TableCell className='hidden xl:table-column'>Sale</TableCell>
                    <TableCell className='hidden xl:table-column'>
                      <Badge className='text-xs' variant='outline'>
                        Approved
                      </Badge>
                    </TableCell>
                    <TableCell className='hidden md:table-cell lg:hidden xl:table-column'>
                      2023-06-23
                    </TableCell>
                    <TableCell className='text-right'>345</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className='py-2 font-medium'>React Native</div>
                    </TableCell>
                    <TableCell className='hidden xl:table-column'>Refund</TableCell>
                    <TableCell className='hidden xl:table-column'>
                      <Badge className='text-xs' variant='outline'>
                        Declined
                      </Badge>
                    </TableCell>
                    <TableCell className='hidden md:table-cell lg:hidden xl:table-column'>
                      2023-06-24
                    </TableCell>
                    <TableCell className='text-right'>123</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className='py-2 font-medium'>MangoDB</div>
                    </TableCell>
                    <TableCell className='hidden xl:table-column'>Subscription</TableCell>
                    <TableCell className='hidden xl:table-column'>
                      <Badge className='text-xs' variant='outline'>
                        Approved
                      </Badge>
                    </TableCell>
                    <TableCell className='hidden md:table-cell lg:hidden xl:table-column'>
                      2023-06-25
                    </TableCell>
                    <TableCell className='text-right'>1076</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className='py-2 font-medium'>Java Springboot</div>
                    </TableCell>
                    <TableCell className='hidden xl:table-column'>Sale</TableCell>
                    <TableCell className='hidden xl:table-column'>
                      <Badge className='text-xs' variant='outline'>
                        Approved
                      </Badge>
                    </TableCell>
                    <TableCell className='hidden md:table-cell lg:hidden xl:table-column'>
                      2023-06-26
                    </TableCell>
                    <TableCell className='text-right'>789</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className='py-2 font-medium'>Web Development</div>
                    </TableCell>
                    <TableCell className='hidden xl:table-column'>Sale</TableCell>
                    <TableCell className='hidden xl:table-column'>
                      <Badge className='text-xs' variant='outline'>
                        Approved
                      </Badge>
                    </TableCell>
                    <TableCell className='hidden md:table-cell lg:hidden xl:table-column'>
                      2023-06-27
                    </TableCell>
                    <TableCell className='text-right'>2314</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <Card x-chunk='dashboard-01-chunk-5'>
            <CardHeader>
              <CardTitle>Top Performers</CardTitle>
            </CardHeader>
            <CardContent className='grid gap-8'>
              <div className='flex items-center gap-4'>
                <Avatar className='hidden h-9 w-9 sm:flex'>
                  <AvatarImage src='/avatars/01.png' alt='Avatar' />
                  <AvatarFallback>LM</AvatarFallback>
                </Avatar>
                <div className='grid gap-1'>
                  <p className='text-sm font-medium leading-none'>Layaranjith M</p>
                  <p className='text-sm text-muted-foreground'>layaranjith@email.com</p>
                </div>
                <div className='ml-auto font-medium'>97%</div>
              </div>
              <div className='flex items-center gap-4'>
                <Avatar className='hidden h-9 w-9 sm:flex'>
                  <AvatarImage src='/avatars/02.png' alt='Avatar' />
                  <AvatarFallback>PT</AvatarFallback>
                </Avatar>
                <div className='grid gap-1'>
                  <p className='text-sm font-medium leading-none'>Priyanshu T</p>
                  <p className='text-sm text-muted-foreground'>priyanshu12@gmail.com</p>
                </div>
                <div className='ml-auto font-medium'>95%</div>
              </div>
              <div className='flex items-center gap-4'>
                <Avatar className='hidden h-9 w-9 sm:flex'>
                  <AvatarImage src='/avatars/03.png' alt='Avatar' />
                  <AvatarFallback>NM</AvatarFallback>
                </Avatar>
                <div className='grid gap-1'>
                  <p className='text-sm font-medium leading-none'>Nethish Kumar M</p>
                  <p className='text-sm text-muted-foreground'>nethishkumar@gmail.com</p>
                </div>
                <div className='ml-auto font-medium'>95%</div>
              </div>
              <div className='flex items-center gap-4'>
                <Avatar className='hidden h-9 w-9 sm:flex'>
                  <AvatarImage src='/avatars/04.png' alt='Avatar' />
                  <AvatarFallback>KS</AvatarFallback>
                </Avatar>
                <div className='grid gap-1'>
                  <p className='text-sm font-medium leading-none'>Kavin S</p>
                  <p className='text-sm text-muted-foreground'>kavins17@gmail.com</p>
                </div>
                <div className='ml-auto font-medium'>94%</div>
              </div>
              <div className='flex items-center gap-4'>
                <Avatar className='hidden h-9 w-9 sm:flex'>
                  <AvatarImage src='/avatars/05.png' alt='Avatar' />
                  <AvatarFallback>PT</AvatarFallback>
                </Avatar>
                <div className='grid gap-1'>
                  <p className='text-sm font-medium leading-none'>Priya T</p>
                  <p className='text-sm text-muted-foreground'>priya156@gmail.com</p>
                </div>
                <div className='ml-auto font-medium'>93%</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
