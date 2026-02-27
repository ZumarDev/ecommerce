import Products from "../Products";

export default function Best({ data }) {
  return (
    <div className="mt-18">
      <div className='container flex flex-col items-center'>
        <div className="gap-2">
          <p className="text[12px] text-[#878A92] ">Shop Now</p>
          <h3 className="font-bold text-2xl text-gray-900">Best Selling</h3>
        </div>
        <div className="flex items-center gap-5 mt-20">
          {
            data?.map((item, index) => {
              return <Products key={index} item={item} />
            })
          }
        </div>
      </div>
    </div>
  )
}
