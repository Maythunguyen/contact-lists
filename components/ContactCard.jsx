"use client";

import React from "react";
import {
  IconMail,
  IconPhone,
  IconMapPin,
  IconBrandDribbble,
  IconBriefcase
} from "@tabler/icons-react";


const ContactCard = ({ contact }) => {
  return (
    <div className="w-full max-w-sm rounded-xl overflow-hidden bg-white shadow-subtle dark:bg-neutral-800 transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg">
      {/* HEADER SECTION */}
      <div className="flex items-center space-x-4 px-4 py-5 rounded-t-xl border-b border-gray-100">
        <img
          src="https://images.unsplash.com/photo-1728577740843-5f29c7586afe?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Avatar"
          className="h-12 w-12 rounded-full border-2 object-cover"
        />
        <div className="flex flex-col">
          <p className="text-black font-semibold">{contact.name}</p>
          <p className="text-sm text-black/80">{contact.username}</p>
        </div>
      </div>

      {/* BODY SECTION */}
      <div className="px-5 py-4 space-y-3 text-sm text-gray-600 dark:text-gray-300">
        <div className="flex items-center gap-3">
          <IconMail className="h-5 w-5 text-gray-500" />
          <span className="font-medium text-gray-800 dark:text-white">
            {contact.email}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <IconPhone className="h-5 w-5 text-gray-500" />
          <span>{contact.phone}</span>
        </div>
        <div className="flex items-center gap-3">
          <IconBrandDribbble className="h-5 w-5 text-gray-500" />
          <span>{contact.website}</span>
        </div>
        <div className="flex items-center gap-3">
          <IconMapPin className="h-5 w-5 text-gray-500" />
          <span>{contact.address.city}</span>
        </div>
        <div className="flex items-center gap-3">
          <IconBriefcase className="h-5 w-5 text-gray-500" />
          <span>{contact.company.name}</span>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;

