import Logo from "../icons/Logo";
import { navigationLinks } from "../../utils/content";

const Navigation = () => {
  return (
    <nav>
      <a href="/">
        <Logo />
        <p>
          NoteFlow
        </p>
      </a>

      <ul>
        {navigationLinks.map((link) => (
          <li key={link.id}>
            <a href={link.href}>
              {link.link}
            </a>
          </li>
        ))}
      </ul>

      <div>
        <button>Login</button>
        <button>Get Started</button>
      </div>
    </nav>
  )
}

export default Navigation