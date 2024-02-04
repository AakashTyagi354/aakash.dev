import Link from "next/link";
import styles from "../styles/navbar.module.css";
import { FaRegPenToSquare } from "react-icons/fa6";
export default function Navbar() {
  return (
    <div className="h-[60px] shadow-sm flex justify-between items-center">
      <div className={styles.left}>
      
        <span>Aakash.</span>
      </div>
      <div className={styles.center}>
        <nav className="flex gap-5">
          <Link href={"/about"}>about</Link>
          <Link href={"/skills"}>skills</Link>
          <Link href={"/projects"}>projects</Link>
          <Link href={"/blog"}>blog</Link>
          <Link href={"/contact"}>contact</Link>
        </nav>
      </div>
      <div className={styles.right}>
        <nav className="flex gap-8 items-center">
          <Link href="/write">
            <FaRegPenToSquare size={18} className="cursor-pointer" />
          </Link>

          <Link href={"/auth/login"}>Login</Link>
        </nav>
      </div>
    </div>
  );
}
