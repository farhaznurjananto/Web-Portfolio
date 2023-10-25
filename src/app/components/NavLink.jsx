import Link from "next/link";

export const NavLink = ({ href, title }) => {
  return (
    <Link href={href} className="block py-2 pl-3 pr-4 text-slate-400 sm:text-xl rounded md:p-0 hover:text-white">
      {title}
    </Link>
  );
};

export default NavLink;
