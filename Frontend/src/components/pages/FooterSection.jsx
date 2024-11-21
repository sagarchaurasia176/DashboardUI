import React from 'react'
import { Link } from 'react-router-dom'
const FooterSection = () => {
  return (
    <div>
         <footer className="bg-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            © 2024 Dashboard_UI. All rights reserved.
          </div>
          <nav className="flex gap-4">
            <Link className="text-sm text-gray-400 hover:text-white transition-colors" href="#">
              Privacy Policy
            </Link>
            <Link className="text-sm text-gray-400 hover:text-white transition-colors" href="#">
              Terms of Service
            </Link>
            <Link className="text-sm text-gray-400 hover:text-white transition-colors" href="#">
              Contact Us
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default FooterSection