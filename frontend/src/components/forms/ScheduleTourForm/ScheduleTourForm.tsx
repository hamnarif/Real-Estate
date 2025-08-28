export default function ScheduleTourForm() {
  return (
    <form className={"scheduleTourForm"}>
      <input placeholder="Name" />
      <input placeholder="Phone" />
      <input placeholder="Preferred Date" type="date" />
      <button type="submit">Schedule Tour</button>
    </form>
  );
}


