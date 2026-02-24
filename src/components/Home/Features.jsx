import { LiaShippingFastSolid } from "react-icons/lia";
import FeatureCard from "../FeatureCard";
import { FaAward } from "react-icons/fa";
import { IoShieldCheckmarkSharp } from "react-icons/io5";

export default function Features() {
  return (
    <section className="mt-26">
      <div className="container flex items-center justify-between gap-2 flex-wrap">
        <FeatureCard 
         props={{
          title: 'Free Shipping',
          desc: 'Upgrade your style today and get FREE shipping on all orders! Don\'t miss out.'
        }}>
          <LiaShippingFastSolid className='text-2xl text-gray-900' />
        </FeatureCard>

        <FeatureCard 
         props={{
          title: 'Satisfaction Guarantee',
          desc: 'Shop confidently with our Satisfaction Guarantee: Love it or get a refund.'
        }}>
          <FaAward className='text-2xl text-gray-900' />
        </FeatureCard>
        <FeatureCard
          props={{
            title: 'Secure Payment',
            desc: 'Your security is our priority. Your payments are secure with us.'
          }}
        >
          <IoShieldCheckmarkSharp className='text-2xl text-gray-900' />
        </FeatureCard>
      </div>
    </section>
  )
}
