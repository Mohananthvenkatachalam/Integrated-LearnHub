const LogoCloud = () => {
  return (
    <section className='bg-white py-12 sm:py-16 lg:py-20'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='xl:flex xl:items-center xl:justify-between'>
          <h2 className='font-pj text-center text-xl font-bold text-gray-400 xl:text-left'>
            1000+ Big brands trust us
          </h2>

          <div className='mt-10 grid grid-cols-1 items-center gap-y-6 sm:grid-cols-2 sm:gap-y-8 lg:grid-cols-4 lg:gap-x-8 xl:mt-0'>
            <img
              className='mx-auto h-9 w-auto object-contain'
              src='https://cdn.rareblocks.xyz/collection/clarity/images/brands/1/logo-vertex.svg'
              alt=''
            />
            <img
              className='mx-auto h-9 w-auto object-contain'
              src='https://cdn.rareblocks.xyz/collection/clarity/images/brands/1/logo-squarestone.svg'
              alt=''
            />
            <img
              className='mx-auto h-9 w-auto object-contain'
              src='https://cdn.rareblocks.xyz/collection/clarity/images/brands/1/logo-martino.svg'
              alt=''
            />
            <img
              className='mx-auto h-9 w-auto object-contain'
              src='https://cdn.rareblocks.xyz/collection/clarity/images/brands/1/logo-waverio.svg'
              alt=''
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default LogoCloud
