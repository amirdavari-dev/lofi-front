"use client";

import Image from "next/image";
import { useState } from "react";
import { menus } from "../../libs/menus";
import Link from "next/link";

const HamburgerMenu = () => {
  const [menu, setMenu] = useState<boolean>(false);
  return (
    <>
      <button className="hamburger-menu-btn" onClick={() => setMenu(!menu)}>
        <Image
          src="/images/menu.svg"
          alt="Mobile Menu"
          width={20}
          height={20}
        />
      </button>
      {menu && (
        <div className="hamburger-menu">
          <div className="content-menu">
            <button className="close-btn" onClick={() => setMenu(false)}>
              <Image
                src="/images/close.svg"
                alt="Mobile Menu"
                width={20}
                height={20}
              />
            </button>
            <ul className="menu-list">
              {menus.map((menu, index) => {
                return (
                  <li key={index}>
                    <Link href={menu.link}>{menu.label}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
export default HamburgerMenu;
