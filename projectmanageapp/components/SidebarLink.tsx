"use client";
import Link from "next/link";
//Open Source Icon Library;
import { Settings, User, Grid, Calendar } from "react-feather";
//Hooks only work on client components and it uses the window to find the current URL path
import { usePathname } from "next/navigation";
import clsx from "clsx";

const icons = { Settings, User, Grid, Calendar };

const SidebarLink = ({ link }) => {
  const pathname = usePathname();
  let isActive = false;

    //Don't need to put this in state because each time there is a change in the URL, there will be a re-render reguardless

  if (pathname === link.link) {
    isActive = true;
  }

    //Can't pass down a function or components from server to client, we need to map it out like this, along with date object
  const Icon = icons[link.icon];
  return (
    <Link href={link.link} className="w-full flex justify-center items-center">
      <Icon
        size={40}
        className={clsx(
          "stroke-gray-400 hover:stroke-violet-600 transition duration-200 ease-in-out",
          isActive && "stroke-violet-600"
        )}
      />
    </Link>
  );
};

export default SidebarLink;