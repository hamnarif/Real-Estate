export default function LeadForm() {
  return (
    <form className={"leadForm"}>
      <input placeholder="Name" />
      <input placeholder="Email" type="email" />
      <button type="submit">Submit</button>
    </form>
  );
}


