import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/navbar.module.scss";

const navigation = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Posts", path: "/posts" },
  { id: 3, title: "Contacts", path: "/contacts" },
];

function Navbar() {
  const { pathname } = useRouter();

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Image src="/gitHub.png" width={100} height="50" alt="gitHub" />
      </div>
      <div className={styles.links}>
        {navigation.map(({ id, title, path }) => (
          <Link
            key={id}
            href={path}
            className={pathname === path ? styles.active : null}
          >
            {title}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
