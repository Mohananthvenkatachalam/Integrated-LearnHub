import { VelocityScroll } from '@/components/magicui/scroll-based-velocity'

function ScrollBasedVelocityDemo() {
  return (
    <VelocityScroll
      text={<>Learn. Build. Share.</>}
      default_velocity={5}
      className='font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]'
    />
  )
}

const Teams = () => {
  return (
    <section className='bg-white' id='teams'>
      <div className='py-12 sm:py-16 lg:py-20'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h2 className='font-pj text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl'>
              Our Investors & Board of Directors
            </h2>
          </div>

          <div className='mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-x-8 gap-y-12 px-20 text-center sm:grid-cols-2 sm:px-0 md:mt-20 md:grid-cols-4 lg:gap-x-16 xl:gap-x-20'>
            <div>
              <img
                className='mx-auto h-32 w-32 rounded-full object-cover grayscale filter lg:h-44 lg:w-44'
                src='https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-1.png'
                alt=''
              />
              <p className='font-pj mt-5 text-lg font-bold text-gray-900 sm:mt-8 sm:text-xl'>
                Jerome Bell
              </p>
              <p className='font-pj mt-2 text-base font-normal text-gray-600'>
                Co founder, Chairman, Executive Director
              </p>
            </div>

            <div>
              <img
                className='mx-auto h-32 w-32 rounded-full object-cover grayscale filter lg:h-44 lg:w-44'
                src='https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-2.png'
                alt=''
              />
              <p className='font-pj mt-5 text-lg font-bold text-gray-900 sm:mt-8 sm:text-xl'>
                Jerome Bell
              </p>
              <p className='font-pj mt-2 text-base font-normal text-gray-600'>
                Co founder, Chairman, Executive Director
              </p>
            </div>

            <div>
              <img
                className='mx-auto h-32 w-32 rounded-full object-cover grayscale filter lg:h-44 lg:w-44'
                src='https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-3.png'
                alt=''
              />
              <p className='font-pj mt-5 text-lg font-bold text-gray-900 sm:mt-8 sm:text-xl'>
                Jerome Bell
              </p>
              <p className='font-pj mt-2 text-base font-normal text-gray-600'>
                Co founder, Chairman, Executive Director
              </p>
            </div>

            <div>
              <img
                className='mx-auto h-32 w-32 rounded-full object-cover grayscale filter lg:h-44 lg:w-44'
                src='https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-4.png'
                alt=''
              />
              <p className='font-pj mt-5 text-lg font-bold text-gray-900 sm:mt-8 sm:text-xl'>
                Jerome Bell
              </p>
              <p className='font-pj mt-2 text-base font-normal text-gray-600'>
                Co founder, Chairman, Executive Director
              </p>
            </div>
          </div>

          <div className='mt-12 sm:mt-16'>
            <svg
              className='mx-auto h-4 w-auto text-gray-300'
              viewBox='0 0 172 16'
              fill='none'
              stroke='currentColor'
              xmlns='http://www.w3.org/2000/svg'
            >
              <line
                y1='-0.5'
                x2='18.0278'
                y2='-0.5'
                transform='matrix(-0.5547 0.83205 0.83205 0.5547 11 1)'
              />
              <line
                y1='-0.5'
                x2='18.0278'
                y2='-0.5'
                transform='matrix(-0.5547 0.83205 0.83205 0.5547 46 1)'
              />
              <line
                y1='-0.5'
                x2='18.0278'
                y2='-0.5'
                transform='matrix(-0.5547 0.83205 0.83205 0.5547 81 1)'
              />
              <line
                y1='-0.5'
                x2='18.0278'
                y2='-0.5'
                transform='matrix(-0.5547 0.83205 0.83205 0.5547 116 1)'
              />
              <line
                y1='-0.5'
                x2='18.0278'
                y2='-0.5'
                transform='matrix(-0.5547 0.83205 0.83205 0.5547 151 1)'
              />
              <line
                y1='-0.5'
                x2='18.0278'
                y2='-0.5'
                transform='matrix(-0.5547 0.83205 0.83205 0.5547 18 1)'
              />
              <line
                y1='-0.5'
                x2='18.0278'
                y2='-0.5'
                transform='matrix(-0.5547 0.83205 0.83205 0.5547 53 1)'
              />
              <line
                y1='-0.5'
                x2='18.0278'
                y2='-0.5'
                transform='matrix(-0.5547 0.83205 0.83205 0.5547 88 1)'
              />
              <line
                y1='-0.5'
                x2='18.0278'
                y2='-0.5'
                transform='matrix(-0.5547 0.83205 0.83205 0.5547 123 1)'
              />
              <line
                y1='-0.5'
                x2='18.0278'
                y2='-0.5'
                transform='matrix(-0.5547 0.83205 0.83205 0.5547 158 1)'
              />
              <line
                y1='-0.5'
                x2='18.0278'
                y2='-0.5'
                transform='matrix(-0.5547 0.83205 0.83205 0.5547 25 1)'
              />
              <line
                y1='-0.5'
                x2='18.0278'
                y2='-0.5'
                transform='matrix(-0.5547 0.83205 0.83205 0.5547 60 1)'
              />
              <line
                y1='-0.5'
                x2='18.0278'
                y2='-0.5'
                transform='matrix(-0.5547 0.83205 0.83205 0.5547 95 1)'
              />
              <line
                y1='-0.5'
                x2='18.0278'
                y2='-0.5'
                transform='matrix(-0.5547 0.83205 0.83205 0.5547 130 1)'
              />
              <line
                y1='-0.5'
                x2='18.0278'
                y2='-0.5'
                transform='matrix(-0.5547 0.83205 0.83205 0.5547 165 1)'
              />
              <line
                y1='-0.5'
                x2='18.0278'
                y2='-0.5'
                transform='matrix(-0.5547 0.83205 0.83205 0.5547 32 1)'
              />
              <line
                y1='-0.5'
                x2='18.0278'
                y2='-0.5'
                transform='matrix(-0.5547 0.83205 0.83205 0.5547 67 1)'
              />
              <line
                y1='-0.5'
                x2='18.0278'
                y2='-0.5'
                transform='matrix(-0.5547 0.83205 0.83205 0.5547 102 1)'
              />
              <line
                y1='-0.5'
                x2='18.0278'
                y2='-0.5'
                transform='matrix(-0.5547 0.83205 0.83205 0.5547 137 1)'
              />
              <line
                y1='-0.5'
                x2='18.0278'
                y2='-0.5'
                transform='matrix(-0.5547 0.83205 0.83205 0.5547 172 1)'
              />
              <line
                y1='-0.5'
                x2='18.0278'
                y2='-0.5'
                transform='matrix(-0.5547 0.83205 0.83205 0.5547 39 1)'
              />
              <line
                y1='-0.5'
                x2='18.0278'
                y2='-0.5'
                transform='matrix(-0.5547 0.83205 0.83205 0.5547 74 1)'
              />
              <line
                y1='-0.5'
                x2='18.0278'
                y2='-0.5'
                transform='matrix(-0.5547 0.83205 0.83205 0.5547 109 1)'
              />
              <line
                y1='-0.5'
                x2='18.0278'
                y2='-0.5'
                transform='matrix(-0.5547 0.83205 0.83205 0.5547 144 1)'
              />
            </svg>
          </div>
        </div>
      </div>

      <ScrollBasedVelocityDemo />
    </section>
  )
}

export default Teams
