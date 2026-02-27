import Button from '../UI/Button'
import Logo from "./Logo";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer>
      <div className="bg-blue-200 py-15 mt-20">
        <div className="container flex items-center justify-between">
          <div>
            <h3 className="font-bold text-2xl leading-100% mb-6">Join Our Newsletter</h3>
            <p className="text-gray-500 text-[14px]">We love to surprise our subscribers with occasional gifts.</p>
          </div>

          <div className="flex items-center gap-4 ">
            <input type="email" placeholder="Your email address" className=" outline-[#878A92] py-2.5 px-3.5 " />
            <Button>Subscribe</Button>
          </div>
        </div>
      </div>
      <div className="container flex items-center justify-between">
        <div className="mt-22">
          <Logo>
            <div className={"flex items-center justify-center bg-white rounded-md w-11 h-11 border border-[#E6E7E8]"}>
              <svg width="16" height="26" viewBox="0 0 16 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.4768 4.34824L6.2039 0.554784C5.61183 0.192614 4.93872 0.00119339 4.25307 0C2.20933 0 0.33463 1.71194 0.33463 4.10471V18.307L12.4768 10.9666C14.9081 9.49435 14.9081 5.81966 12.4768 4.34824ZM3.84825 11.4477V3.86762L10.1162 7.65636L3.84825 11.4477Z" fill={`black`} />
                <path d="M15.8488 25.9841C15.8488 26.027 3.99069 25.9657 3.99069 25.9657L2.94324 25.8422C1.2466 25.6437 -0.0558684 24.123 0.00184602 22.3343C0.00184602 22.2914 0.00552992 22.2516 0.00798585 22.21C0.0545855 21.4362 0.325954 20.6958 0.785698 20.0882C0.972404 19.8458 1.20079 19.6422 1.45903 19.4879L10.478 14.0722C12.3413 12.9532 13.893 12.5617 14.6998 10.5338C14.9973 9.77537 15.1258 8.95587 15.0756 8.1376L15.0444 7.58624L15.965 12.9201C16.0829 13.8261 15.9012 14.7534 15.421 15.5166C15.1325 15.9782 14.7474 16.365 14.295 16.6476L3.82942 21.894C3.81896 21.9003 3.80885 21.9071 3.79913 21.9146C3.5126 22.129 3.68943 22.6066 4.04022 22.5864L12.7514 22.64C14.4431 22.5414 15.8524 24.2109 15.8488 25.9841Z" fill={`black`} />
              </svg>
            </div>
          </Logo>
          <div className="max-w-68 mt-3">
            <p className="text-gray-500 text-[14px] leading-175%">DevCut is a YouTube channel for practical project-based learning.</p>
            <div className="flex gap-6 mt-8">
              <Link to={'./'}><FaGithub size={24} color="#5C5F6A"/></Link>
              <Link to={'./'}><FaInstagram size={24} color="#5C5F6A" /></Link>
              <Link to={'./'}><FaYoutube size={24} color="#5C5F6A" /></Link>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-16 mt-20">
          <div>
            <p className="text-[#878A92]">SUPPORT</p>
            <div className="mt-10">
              <a href="./"><p className="hover:text-black text-gray-500 text-[14px]">FAQ</p></a>
              <a href="./"><p className="hover:text-black text-gray-500 text-[14px] py-4">Terms of use</p></a>
              <a href="./"><p className="hover:text-black text-gray-500 text-[14px]">Privacy Policy</p></a>
            </div>
          </div>
          <div>
            <p className="text-[#878A92]">COMPANY</p>
            <div className="mt-10">
              <a href="./"><p className="hover:text-black text-gray-500 text-[14px]">About us</p></a>
              <a href="./"><p className="hover:text-black text-gray-500 text-[14px] py-4">Contact</p></a>
              <a href="./"><p className="hover:text-black text-gray-500 text-[14px]">Careers</p></a>
            </div>
          </div>
          <div>
            <p className="text-[#878A92]">SHOP</p>
            <div className="mt-10">
              <a href="./"><p className="hover:text-black text-gray-500 text-[14px]">My Account</p></a>
              <a href="./"><p className="hover:text-black text-gray-500 text-[14px] py-4">Checkout</p></a>
              <a href="./"><p className="hover:text-black text-gray-500 text-[14px]">Cart</p></a>
            </div>
          </div>
        </div>

        <div className="mt-19">
          <p className="text-[#878A92]">ACCEPTED PAYMENTS</p>

          <div className="flex items-center gap-6 mt-10">
            <a href="./"><svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_9947_7)">
                <path d="M15.017 22.85C13.3637 24.2432 11.27 25.005 9.108 25C4.078 25 0 20.97 0 16C0 11.03 4.078 7.00002 9.108 7.00002C11.363 7.00002 13.426 7.81002 15.017 9.15002C16.67 7.75705 18.7633 6.99526 20.925 7.00002C25.955 7.00002 30.033 11.03 30.033 16C30.033 20.97 25.955 25 20.925 25C18.7633 25.0048 16.67 24.243 15.017 22.85Z" fill="#ED0006" />
                <path d="M15.017 22.85C16.0186 22.0115 16.8242 20.9636 17.377 19.7801C17.9299 18.5966 18.2166 17.3063 18.217 16C18.217 13.257 16.975 10.8 15.017 9.15002C16.67 7.75705 18.7633 6.99526 20.925 7.00002C25.955 7.00002 30.033 11.03 30.033 16C30.033 20.97 25.955 25 20.925 25C18.7633 25.0048 16.67 24.243 15.017 22.85Z" fill="#F9A000" />
                <path d="M15.017 22.85C16.975 21.2 18.217 18.743 18.217 16C18.217 13.257 16.975 10.8 15.017 9.15002C14.0154 9.98856 13.2098 11.0365 12.657 12.22C12.1041 13.4035 11.8174 14.6938 11.817 16C11.817 18.743 13.058 21.2 15.017 22.85Z" fill="#FF5E00" />
              </g>
              <defs>
                <clipPath id="clip0_9947_7">
                  <rect width="30.033" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg></a>

            <a href="./"><svg width="56" height="32" viewBox="0 0 56 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipcule="evenodd" d="M10.191 10L5 21.826H11.215L11.985 19.941H13.746L14.517 21.827H21.357V20.387L21.967 21.827H25.507L26.116 20.357V21.827H40.343L42.073 19.99L43.693 21.827L51 21.842L45.792 15.946L51 10H43.806L42.122 11.803L40.553 10H25.076L23.746 13.053L22.387 10H16.186V11.39L15.496 10H10.193H10.191ZM11.394 11.68H14.424L17.867 19.699V11.679H21.186L23.846 17.429L26.296 11.679H29.6V20.166H27.59L27.574 13.516L24.644 20.166H22.847L19.902 13.516V20.166H15.768L14.985 18.263H10.75L9.968 20.164H7.754L11.394 11.679V11.68ZM39.607 11.68H31.437V20.16H39.48L42.073 17.35L44.572 20.16H47.184L43.387 15.945L47.184 11.679H44.685L42.105 14.458L39.607 11.679V11.68ZM12.867 13.115L11.473 16.505H14.261L12.868 13.115H12.867ZM33.454 14.985V13.435H38.552L40.776 15.912L38.453 18.404H33.454V16.712H37.911V14.986H33.454V14.985Z" fill="#016FD0" />
            </svg></a>

            <a href="./"><svg width="42" height="32" viewBox="0 0 42 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_9947_13)">
                <path d="M27.482 9.00008C28.5269 8.99548 29.5629 9.19135 30.534 9.57708L30.071 12.5031L29.763 12.3601C28.9701 11.9927 28.1026 11.8147 27.229 11.8401C25.886 11.8401 25.283 12.4311 25.269 13.0081C25.269 13.6431 25.999 14.0611 27.189 14.6811C29.149 15.6471 30.057 16.8291 30.044 18.3711C30.016 21.1841 27.692 23.0001 24.122 23.0001C22.596 22.9851 21.126 22.6531 20.328 22.2791L20.804 19.2361L21.252 19.4531C22.358 19.9581 23.086 20.1731 24.444 20.1731C25.424 20.1731 26.474 19.7551 26.487 18.8481C26.487 18.2561 26.04 17.8241 24.724 17.1601C23.436 16.5111 21.714 15.4301 21.742 13.4841C21.756 10.8451 24.122 9.00008 27.482 9.00008ZM14.798 22.7981H18.2L20.328 9.24608H16.926L14.798 22.7981Z" fill="#00579F" />
                <path fillRule="evenodd" clipRule="evenodd" d="M39.255 9.24608H36.624C35.812 9.24608 35.196 9.49108 34.845 10.3701L29.792 22.7981H33.362L34.076 20.7651H38.444C38.542 21.2411 38.85 22.7981 38.85 22.7981H42L39.255 9.24608ZM35.055 17.9961L36.415 14.2061C36.408 14.2161 36.453 14.0901 36.519 13.9011C36.617 13.6211 36.762 13.2081 36.862 12.9081L37.099 14.0751C37.099 14.0751 37.744 17.3191 37.884 17.9971H35.056L35.055 17.9961Z" fill="#00579F" />
                <path d="M8.624 18.4871L11.956 9.24608H15.554L10.206 22.7841H6.608L3.556 10.9321C5.712 12.1001 7.644 14.4501 8.26 16.6121L8.624 18.4871Z" fill="#00579F" />
                <path d="M5.53 9.24608H0.0560002L0 9.51908C4.27 10.6441 7.098 13.3551 8.26 16.6131L7.07 10.3851C6.874 9.51908 6.272 9.27508 5.53 9.24508V9.24608Z" fill="#FAA61A" />
              </g>
              <defs>
                <clipPath id="clip0_9947_13">
                  <rect width="42" height="32.0001" fill="white" />
                </clipPath>
              </defs>
            </svg></a>


          </div>
        </div>


      </div>

      <div className="container flex justify-center">
        <p className="py-7 mt-26 text-gray-500 text-[14px]">© 2023 DevCut. All rights reserved.  </p>
      </div>
    </footer>
  )
}

