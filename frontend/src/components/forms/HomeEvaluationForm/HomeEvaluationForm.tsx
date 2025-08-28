export default function HomeEvaluationForm() {
  return (
    <form className={"homeEvalForm"}>
      <input placeholder="Address" />
      <input placeholder="Square Footage" />
      <button type="submit">Get Evaluation</button>
    </form>
  );
}


