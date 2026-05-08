"use client";


import { PageHero } from "@/components/site/PageHero";
import { Mail, MapPin, Phone, Globe } from "lucide-react";
import { useState } from "react";


const RECIPIENT = "aswinikumar@cutmap.ac.in";

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    org: "",
    message: "",
  });

  const handleChange = (
    </>
  );
}

export default ContactPage;
