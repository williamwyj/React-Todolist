export default function Inputfield(props) {
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    props.addToDo(formJson.newTodo);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input name='newTodo' defaultValue='Enter your To do' />
        </label>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
