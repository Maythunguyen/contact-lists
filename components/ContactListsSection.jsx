"use client";
import React, { useState, useEffect } from "react";
import ContactCard from "./ContactCard";
import { getUserContacts } from "@/app/api/userContactApi";
import SearchBar from "./SearchBar";


const ContactListsSection = () => {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);   

    useEffect(() => {

        const fetchContacts = async () => {
            try {
                const result = await getUserContacts();
                setContacts(result);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching contacts:", error);
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        fetchContacts();

    }, [])

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className="flex flex-1">
            
            <div className="h-full w-full flex flex-col gap-4 rounded-tl-2xl border border-neutral-200 bg-white p-4 md:p-8 dark:border-neutral-700 dark:bg-neutral-900 mx-auto">
                <div className="py-10 md:py-10 w-full">
                    <h1 className="text-lg md:text-4xl font-bold dark:text-white">
                        Contacts 
                    </h1>
                    <p className="max-w-2xl text-sm md:text-md mt-8 dark:text-neutral-200">
                        List of people you have contacted. You can add, edit, or delete contacts as needed.
                    </p>
                </div>

                <div className="mb-10 w-full sm:max-w-[50%]">
                    <SearchBar />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {contacts.map((contact, idx) => (
                        <ContactCard key={idx} contact={contact} />
                    ))}
                </div>
            </div>
      </div>
    );
};

export default ContactListsSection;