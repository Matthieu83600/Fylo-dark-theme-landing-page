import Image from "next/image";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <Image
          src="/images/logo.svg"
          alt="Fylo Logo"
          width={176}
          height={51.05}
          style={{ width: "100%", height: "auto" }}
          loading="lazy"
        />
      </div>
      <nav>
        <ul>
          <li>Features</li>
          <li>Team</li>
          <li>Sign In</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
