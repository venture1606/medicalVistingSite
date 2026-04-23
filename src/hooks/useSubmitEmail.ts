import { useState } from "react";
import { WHATSAPP_BASE_URL } from "@/lib/constants";

export function useSubmitEmail() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    const message = `Hello! I would like to subscribe to your newsletter. My email is: ${email}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `${WHATSAPP_BASE_URL}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
    setEmail("");
  };

  return {
    email,
    setEmail,
    handleSubmit,
  };
}
