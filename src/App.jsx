import ItemListContainer from "./Components/ItemListContainer"
import NavBarBootstrap from "./Components/NavBar"

const App= () => {
  return (
    <>
      <nav>
        <NavBarBootstrap/>
      </nav>
      <body>
        <ItemListContainer nombre={"Hola soy un props"} edad={30} otraInfo={"strings"}/>
      </body>
    </>
  )
}

export default App

