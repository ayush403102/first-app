"use client";

import { useState } from "react";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Login() {
  const [login, setLogin] = useState("red");
}

const Nav = () => {
  return (
    <nav className="bg-indigo-600 lg:flex lg:justify-between">
      <ul className="items-center place-content-center lg:px-28 flex lg:space-x-4">
        <li>
          <Image
            src="/logo-social.png"
            width={100}
            height={100}
            alt="Logo"
            className=" mt-1 w-12 h-12 rounded-3xl"
          />
        </li>
        <li>
          <p className="py-4 font-bold font-serif text-white">Logo</p>
        </li>
      </ul>
      <ul className="items-center place-content-center lg:px-14 lg:py-4 flex space-x-4 lg:space-x-16 text-white lg:justify-end">
        <li className="cursor-pointer hover:underline">
          <Link href="/About"> About </Link>
        </li>
        <li className="cursor-pointer hover:underline">
          <Link href="/Blog"> Blog </Link>
        </li>
        <li className="cursor-pointer hover:underline">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 ">
                Posts
                <ChevronDownIcon
                  className="-mr-1 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>
              <Menu.Items className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                <Menu.Item>
                    <Link href="/Posts" className="bg-gray-100 text-gray-900 block px-3 py-2">
                      Posts
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link href="/Posts/Posts1" className="bg-gray-100 text-gray-900 block px-3 py-2">
                      Post1
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link href="/Posts/Posts2" className="bg-gray-100 text-gray-900 block px-3 py-2">
                      Post2
                    </Link>
                  </Menu.Item>
                </div>
              </Menu.Items>
          </Menu>
        </li>
        <li className="cursor-pointer hover:underline">
          <Link href="Users"> Users </Link>
        </li>
        <li className="cursor-pointer hover:underline">
          <Link href="/Code/Repos"> MyRepos </Link>
        </li>

      </ul>
    </nav>
  );
};

export default Nav;

{
  /* <nav className = "bg-indigo-600 flex justify-between">
      <ul className = "px-32 flex space-x-4">
      <li><Image src="/logo-social.png" width = {100} height= {100} alt="Logo" className = " mt-1 w-12 h-12 rounded-3xl"/></li>
      <li><p className = "py-4 font-bold font-serif text-white">Logo</p></li>
      </ul>
      <ul className = "px-14 py-4 flex space-x-16 text-white justify-end">
        <li className = "cursor-pointer hover:underline"><Link href="/About">  About      </Link></li>
        <li className = "cursor-pointer hover:underline"><Link href="/Blog">   Blog       </Link></li>
        <li className = "cursor-pointer hover:underline"><Link href="/Posts">  Posts      </Link></li>
        <li className = "cursor-pointer hover:underline"><Link href="Users">   Users      </Link></li>
        <li className = "cursor-pointer hover:underline"><Link href="Contact"> Contact Us </Link></li>
      </ul>
    </nav> */
}

// Advantages of RSC(React Server component):

// - Load faster - Don't have to wait for the JavaScript to load
// - Smaller client bundle size

// -— SEO friendly

// - Access to resources the client can't access

// -— Hide sensitive data from the client

// - More secure against XSS attacks

// — Improved developer experience

// Just like with anything else, there are also disadvantages:
// - Not as interactive

// - No component state. We can not use the "useState" hook.
// — No component lifecycle methods. We can not use the useEffect hook

//to use these hooks we have to make it a client side component
//to do so use 'use client' at top of page now you can use all these things
