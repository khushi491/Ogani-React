import React from "react";
import Breadcrumb from "../../components/UI/Breadcrumb/Breadcrumb";
import ContactDetails from "./ContactDetails/ContactDetails";
import ContactForm from "./ContactForm/ContactForm";
import Map from "./Map/Map";

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <Breadcrumb title="Contact" />
      <ContactDetails />
      <Map />
      <ContactForm />
    </div>
  );
};

export default Contact;
