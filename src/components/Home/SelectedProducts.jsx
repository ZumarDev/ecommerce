import Products from '../Products'

export default function SelectedProducts({data}) {
  return (
    <section className='mt-38'>
        <div className="container flex items-center justify-between gap-5">
            {
                data?.map((item, index)=>{
                    return <Products key={index} item={item}/>
                })
            }
        </div>
    </section>
  )
}
