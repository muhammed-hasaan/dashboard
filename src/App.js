import './App.css';
import { Webnavbar } from './components/Navbar';
import { Websidebar } from './components/sidebar';
import { Webcard } from './components/card';
import { Webcard2 } from './components/card2';
import { Webtable } from './components/table';
function App() {
  return (
    <>
      <Webnavbar />
      <div className='flex flex-wrap justify-between' >
        <div className='w-1/4 z-[-100]  bg-[#F0EFF4]'>
          <Websidebar />
        </div>
        <div className='divv w-3/4 flex flex-wrap columns-16 gap-x-5 overflow-scroll z-[-100] bg-[#F0EFF4]' >
          <Webcard />
          <Webcard />
          <Webcard />
          <Webcard2 />
          <Webcard2 />
          <Webcard2 />
          <div className='pt-8' style={{ width: "97%" }}>
            <Webtable />
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
