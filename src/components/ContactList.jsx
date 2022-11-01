import Buscador from "./Buscador";
import Contact from "./Contact";

export default function ContactList() {
  return (
    <div>
      <nav className="px-4 py-8 border-b-2">
        <h2 className="text-xl font-bold">Messages</h2>
      </nav>
      <Buscador/>
      <ul className="px-6 py-3 grid gap-4">
        <Contact name="Jose Perez"/>
        <Contact name="Mariana Martinez" />
        <Contact name="Andres Gonzales" />
      </ul>
    </div>
  )
}
