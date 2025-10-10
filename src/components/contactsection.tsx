"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

interface ContactSectionProps {
  t: any;
}

const ContactSection = ({ t }: ContactSectionProps) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name === "" || email === "" || message === "") {
      alert(t.contact.form.validationError);
      return;
    }

    const templateParams = {
      from_name: name,
      email: email,
      message: message,
    };

    emailjs
      .send(
        "service_edt8dgf",
        "template_xdwwtgb",
        templateParams,
        "bNJ1Y_BA7O5IXhkKO"
      )
      .then(
        (response) => {
          console.log("Email enviado", response.status, response.text);
          setFormSubmitted(true);
          setName("");
          setEmail("");
          setMessage("");
          setTimeout(() => setFormSubmitted(false), 3000);
        },
        (err) => {
          console.log("Erro", err);
        }
      );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 3, ease: "easeOut" }}
      viewport={{ amount: 0.2 }}
      className="min-h-screen lg:h-screen justify-center flex flex-col items-center z-20 px-4 sm:px-6 md:px-8 py-12 lg:py-0"
    >
      <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl mb-6 sm:mb-8 text-white">
        {t.contact.title}{" "}
        <span className="font-bold text-yellow-500">{t.contact.span}</span>
      </h2>

      <div className="rounded-3xl flex flex-col items-center border border-gray-950 sm:p-6 md:p-8 lg:p-12 w-full max-w-[350px] sm:max-w-md md:max-w-lg lg:max-w-2xl">
        <form onSubmit={sendEmail} className="w-full space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <label className="block text-sm sm:text-base text-gray-300 mb-2">
              {t.contact.form.name}
            </label>
            <input
              type="text"
              name="name"
              value={name}
              placeholder={t.contact.form.namePlaceholder}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
              required
              className="p-3 w-full font-normal focus:outline-none focus:ring-0 rounded-xl bg-slate-100/10 text-white text-sm sm:text-base"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <label className="block text-sm sm:text-base text-gray-300 mb-2">
              {t.contact.form.email}
            </label>
            <input
              type="email"
              name="email"
              value={email}
              placeholder={t.contact.form.emailPlaceholder}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              required
              className="p-3 w-full focus:outline-none focus:ring-0 font-normal rounded-xl bg-slate-100/10 text-white text-sm sm:text-base"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <label className="block text-sm sm:text-base text-gray-300 mb-2">
              {t.contact.form.message}
            </label>
            <textarea
              className="scrollbar-hide p-3 focus:outline-none focus:ring-0 h-32 sm:h-40 w-full rounded-2xl font-normal bg-slate-100/10 text-white text-sm sm:text-base"
              placeholder={t.contact.form.messagePlaceholder}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                setMessage(e.target.value)
              }
              value={message}
            ></textarea>
          </motion.div>

          <motion.button
            type="submit"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-yellow-500 text-black p-3 sm:p-4 rounded-xl mt-6 font-bold text-sm sm:text-base hover:bg-yellow-500 transition-all duration-300"
          >
            {t.contact.form.submit}
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactSection;