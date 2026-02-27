import Button from '../../UI/Button'

export default function Fashion() {
  return (
    <section className='pt-13 pb-18 bg-linear-to-r from-blue-200 to-white mt-40'>
        <div className="container flex flex-col gap-6 items-start">
            <h3 className='font-bold text-2xl text-gray-900'>Browse Our Fashion Paradise!</h3>
            <p className='mb-2 text-sm text-gray-500 max-w-110 leading-175'>
                Step into a world of style and explore our diverse collection of clothing categories.
            </p>
            <Button arrow={true}>Start Browsing</Button>
        </div>
    </section>
  )
}
