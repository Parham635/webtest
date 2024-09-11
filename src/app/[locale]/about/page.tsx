import { useTranslations } from 'next-intl'

export default function About() {
  const t = useTranslations('')
  return (

    <section className='bg-background-secondary py-20 max-lg:py-10'>
      <div className='mx-auto grid max-w-screen-lg grid-cols-3 gap-7 px-8 py-5 max-lg:max-w-fit max-lg:grid-cols-1 max-lg:gap-10'>
        <div className='text-center'>
          <h2 className='mb-3  text-xl font-semibold'>{t('Approachable')}</h2>
          <p className='text-text-secondary max-lg:max-w-[500px]'>
            {t(
              'Test 1'
            )}
          </p>
        </div>
        <div className='text-center'>
          <h2 className='mb-3 text-xl font-semibold'>{t('Versatile')}</h2>
          <p className='text-text-secondary max-lg:max-w-[500px]'>
            {t(
              'Test 2'
            )}
          </p>
        </div>
        <div className='text-center'>
          <h2 className='mb-3 text-xl font-semibold'>{t('Performant')}</h2>
          <p className='text-text-secondary max-lg:max-w-[500px]'>
            {t(
              'Test 3'
            )}
          </p>
        </div>
      </div>
    </section>













  )
}
