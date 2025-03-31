import Logo from "../icons/Logo";
import { navigationLinks } from "../../utils/content";

const Navigation = () => {
  return (
    <nav className="text-primary-50 m-auto flex justify-between max-w-[90rem] px-24 text-lg/8 font-light">
      <a href="/" className="flex items-center gap-x-3">
        <Logo 
          className="h-6"
          width={5}
        />
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