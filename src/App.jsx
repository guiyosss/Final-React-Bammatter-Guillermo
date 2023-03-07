import ItemListContainer from "./Components/ItemListContainer"
import NavBarBootstrap from "./Components/NavBar"

const App= () => {
  return (
    <>
      <nav>
        <NavBarBootstrap/>
      </nav>
      <body>
        <ItemListContainer/>
      </body>
    </>
  )
}

export default App

