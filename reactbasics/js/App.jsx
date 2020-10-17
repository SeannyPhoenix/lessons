function App() {
  const [personToEdit, setPersonToEdit] = React.useState(null);
  const [people, setPeople] = React.useState(
    [
      {
        name: "Seanny",
        address: "San Francisco",
        key: "15df900e-1d69-4215-94dd-d15ff62581af"
      },
      {
        name: "Jim",
        address: "Phoenix",
        key: "0b439517-9db0-45af-bf0b-3b2daefdbc2c"
      },
      {
        name: "Kellen",
        address: "Austin",
        key: "184f9075-6eb8-41d4-bed5-861a8f7d4db3"
      }
    ]
  );

  function closeEditor() {
    setPersonToEdit(null);
    // getApiStuffAgain
  }

  const peopleList = (
    <ul>
      {people.map((person) => {
        return (
          <li key={person.key}>
            {person.name} lives in {person.address}
            <div onClick={()=>setPersonToEdit(person)}>| Edit |</div>
          </li>
        )
      })}
    </ul>
  )

  return (
    <div>
      {peopleList}
      <EditItem current={personToEdit} closeEditor={closeEditor} />
    </div>
  )
}