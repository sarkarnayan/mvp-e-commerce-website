import Navbar from './components/Page';//navbar imported
import Footer from './components/footer';//footer imported
import banner from './assets/banner.png';

//App function
function App() {
  //return method to return elements on web from below
  return (
    <>
      <Navbar />
      <main style={{ padding: '2rem', minHeight: '70vh' }}>
        <h1>Welcome to SHROBON.com</h1>
        <img src={banner} alt="Banner" style={{ width: '100%', borderRadius: '10px' }} />
      </main>
      <Footer />
    </>
  );
}

export default App;
// the function application