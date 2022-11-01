import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Ntombozuko Portfolio</h1>
      </div>
      <Link href="/" legacyBehavior>
        <a>Home</a>
      </Link>
      <Link href="/about" legacyBehavior>
        <a>About</a>
      </Link>
      <Link href="/skills" legacyBehavior>
        <a>Skills</a>
      </Link>
      <Link href="/contacts" legacyBehavior>
        <a>Contacts</a>
      </Link>
    </nav>
  );
};

export default Navbar;
