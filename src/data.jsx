import React from "react";
import {
  FaFacebook,
  FaPinterest,
  FaInstagram,
  FaHome,
  FaRegNewspaper,
  FaRegAddressBook,
  FaHeadphonesAlt,
  FaShoppingBag,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
export const links = [
  {
    id: 1,
    url: "/",
    text: "home",
    icon: <FaHome />,
  },
  {
    id: 2,
    url: "/blog",
    text: "blog",
    icon: <FaRegNewspaper />,
  },
  {
    id: 3,
    url: "/guide",
    text: "guide",
    icon: <FaShoppingBag />,
  },
  {
    id: 4,
    url: "/playlist",
    text: "playlist",
    icon: <FaHeadphonesAlt />,
  },
  {
    id: 5,
    url: "/contact-me",
    text: "contact me",
    icon: <FaRegAddressBook />,
  },
];

export const social = [
  {
    id: 1,
    url: "https://www.facebook.com",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: "https://www.instagram.com",
    icon: <FaInstagram />,
  },
  {
    id: 3,
    url: "https://www.pinterest.com",
    icon: <FaPinterest />,
  },
  {
    id: 4,
    url: "https://www.tiktok.com",
    icon: <FaTiktok />,
  },
  {
    id: 5,
    url: "https://www.youtube.com",
    icon: <FaYoutube />,
  },
];
