import * as React from "react"
import { Link } from "gatsby"
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram"
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter"


const Layout = ({ location, title, tagLine, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <div className="grid justify-items-center gap-2">
        <div className="">
          <h1 className="text-7xl">
            <Link to="/">{title}</Link>
          </h1>
        </div>
        <div className="">
          <h3 className="text-xl">{tagLine}</h3>
        </div>
        <div className="grid grid-cols-2 gap-2 text-2xl">
          <div>
            <a href="https://www.instagram.com/kylekwiedacz/"><FaInstagram /></a>
          </div>
          <div>
            <a href="https://twitter.com/kylekwiedacz"><FaTwitter /></a>
          </div>
        </div>
      </div>
    )
  } else {
    header = (
      <div className="grid justify-items-center gap-2">
        <div>
          <Link className="text-3xl" to="/">
            {title}
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-2 text-2xl">
          <div>
            <a href="https://www.instagram.com/kylekwiedacz/"><FaInstagram /></a>
          </div>
          <div>
            <a href="https://twitter.com/kylekwiedacz"><FaTwitter /></a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-900 text-gray-300 p-6" data-is-root-path={isRootPath}>
      <div className="md:container md:mx-auto">
        <header className="grid mb-6">{header}</header>
        <main>{children}</main>
        <footer className="mt-6">
          <div className="grid justify-items-center">
            <div>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.com">Gatsby</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Layout
