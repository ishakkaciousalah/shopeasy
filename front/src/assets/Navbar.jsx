import React from 'react'

export const Navbar = () => {
  return (
<nav className="flex items-center justify-between border-b border-neutral-200 bg-white px-6 py-8 md:px-12">
  <ul className="ml-auto flex items-center gap-6">
    <li>
      <a href="#home" className="text-lg font-semibold text-neutral-800 transition hover:text-neutral-600">
        Home
      </a>
    </li>

    <li>
      <a href="#about" className="text-lg font-semibold text-neutral-800 transition hover:text-red-600">
        About
      </a>
    </li>

    <li>
      <a href="#services" className="text-lg font-semibold text-neutral-800 transition hover:text-neutral-600">
        Services
      </a>
    </li>

    <li>
      <a href="#contact" className="text-lg font-semibold text-neutral-800 transition hover:text-neutral-600">
        Contact
      </a>
    </li>
  </ul>
</nav>
  )
}
export default Navbar