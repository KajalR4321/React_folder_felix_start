import MainHeader from "./componets/MainHeader/Mainheader";
import Home from "./pages/Home";
import MainFooter from "./componets/Mainfooter/Mainfooter"


function App() {
  return (
    <div className="App">
      <MainHeader />
   
      <main>
        <Home />
        
      </main>
        <MainFooter/>
    </div>
  );
}
export default App;