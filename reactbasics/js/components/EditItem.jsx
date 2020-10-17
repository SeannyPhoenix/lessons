function EditItem(props) {
  const [entries, setEntries] = React.useState(null);

  React.useEffect(() => {
    setEntries(props.current)
    console.log('Updated props.current');
  }, [props.current]);

  React.useEffect(() => {
    console.log('First Run')
  }, []);

  React.useEffect(() => console.log('Every Rerender'));

  async function editItem(event) {
    event.preventDefault();
    if (entries.name && entries.address) {
      props.closeEditor();
      // const result = await axios.post('http://www.example.com', entries);
    } else {
      console.log('Must enter data');
    }
  }

  function updateEntries(event) {
    setEntries({
      ...entries,
      [event.target.name]: event.target.value,
    })
  }

  if (!entries) {
    return null;
  }

  return (
    <form onSubmit={editItem}>
      <input type="text" name="name" value={entries.name} onChange={updateEntries} />
      <input type="text" name="address" value={entries.address} onChange={updateEntries} />
      <input type="hidden" name="secret" value="fucking secret" />
      <input type="submit" />
    </form>
  )
}