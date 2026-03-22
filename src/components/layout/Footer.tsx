 import { SiFacebook, SiInstagram, SiX, SiPinterest } from '@icons-pack/react-simple-icons';

export default function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content">
      <div>
        <p className="font-bold">
          Emerald City Photo Booth
        </p>
        <p>Copyright © {new Date().getFullYear()} - All rights reserved</p>
      </div>
      <div>
        <p className="font-bold">Follow Us:</p>
        <div className="grid grid-flow-col gap-4">
          

          <a href="https://facebook.com/emeraldcityphotobooth" className="link link-hover ">
            <span className="hidden md:block lg:block mb-1">Facebook</span>
            <span className="inline-flex items-center"><SiFacebook className="flex items-center w-6 h-6"  /></span>
          </a>
          <a href="https://instagram.com/emeraldcityphotobooth" className="link link-hover">
            <span className="hidden md:block lg:block mb-1">Instagram</span>
            <span className="inline-flex items-center"><SiInstagram className="flex items-center w-6 h-6"  /></span>

          </a>
          <a href="https://pinterest.com/emeraldcitywed" className="link link-hover">
            <span className="hidden md:block lg:block mb-1">Pinterest</span>
            <span className="inline-flex items-center"><SiPinterest className="flex items-center w-6 h-6"  /></span>
          </a>
        </div>
      </div>
    </footer>
  )
}