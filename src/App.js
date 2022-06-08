import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import HotelsList from "./pages/hotellist/HotelsList";
import HotelDetails from "./pages/hotel/HotelDetails";
import Layout from "./components/layout/Layout";
import DestinationsByRegionDropdown from "./components/DestinationsByRegionDropdown/DestinationsByRegionDropdown";
import AppMap from "./components/AppMap/AppMap";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout/>}>
                  <Route index element={<Home/>}/>
                  <Route path="hotels" element={<HotelsList/>}/>
                  <Route path="hotels/:id" element={<HotelDetails/>}/>
                  <Route path="/regions" element={<DestinationsByRegionDropdown/>}/>
                  <Route path="/map" element={<AppMap/>}/>
              </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
