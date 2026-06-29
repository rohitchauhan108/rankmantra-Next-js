'use client'
import {useRef} from 'react'
import emailjs from "@emailjs/browser"
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export default function ContactUsPage() {
    // email send part
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        alert("Message Send");
        e.preventDefault(false);
      })
      .catch((error) => {
        alert("message not send");
      });
  };
  return (
    <>
      <NavBar />
      <section className="w-full py-16 lg:px-10 overflow-hidden pt-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-[#7A6960] mb-8">Contact Us</h1>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
              <p className="text-gray-600 mb-4">
                We'd love to hear from you. Send us a message!
              </p>
              <div className="space-y-4">
                <p><strong>Address:</strong> Shyam Tower, Shimla Bypass Road, Dehradun 248171</p>
                <p><strong>Phone:</strong> <a href="tel:+918979249912" className="text-red-600">+91 8979249912</a></p>
                <p><strong>Email:</strong> <a href="mailto:info@rankmantra.com" className="text-red-600">info@rankmantra.com</a></p>
              </div>
            </div>
            <div>
              <form className="space-y-4" ref={form} onSubmit={sendEmail}>
                <input type="text" placeholder="Your Name" className="w-full border p-3 rounded" />
                <input type="email" placeholder="Your Email" className="w-full border p-3 rounded" />
                <textarea placeholder="Message" rows="5" className="w-full border p-3 rounded"></textarea>
                <button type="submit" className="bg-red-600 text-white px-6 py-3 rounded hover:bg-red-800">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
