
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["The Mentalist", "HIMYM", "Community", "Banshee", "FBI", "Atlanta"]

  const handleSelectItem = (item: string) => {
    console.log(item);
  }
  return (
    <div>
      <ListGroup items={items} heading="Films" onSelectItem={handleSelectItem}>

      </ListGroup>
    </div>
  )
}

export default App;
