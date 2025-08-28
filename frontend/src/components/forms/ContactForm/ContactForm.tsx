export default function ContactForm() {
  return (
    <form className={"contactForm"}>
      <input placeholder="Name" />
      <input placeholder="Email" type="email" />
      <textarea placeholder="Message" />
      <button type="submit">Send</button>
    </form>
  );
}


