import { footerCols } from "../../utils/content"
import Logo from "../icons/Logo"




const Footer = () => {
  return (
    <footer className="">
      <div>
        <div>
          <a href="#">
            <Logo />
          </a>
          <p>NoteFlow</p>
        </div>

        <div>
          {footerCols.map((col) => (
            <div key={col.id}>
              <p>{col.category}</p>
              <ul>
                {col.links.map((link, i) => (
                  <li key={i}>
                      <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer