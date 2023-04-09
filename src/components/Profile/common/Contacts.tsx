import React from "react";

type ContactsPropsType = {
    contactTitle: string
    contactValue: string
}

export const Contacts: React.FC<ContactsPropsType> = ({contactTitle, contactValue}) => {
    return (
        <>
          <span><a href={contactValue} title={contactTitle.toUpperCase()} target='_blank'>{contactTitle}</a></span>
        </>

    )
}