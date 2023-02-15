import './App.css';
import { Route, Routes } from "react-router-dom"
import Dashboard from './containers/dashboard/Dashboard';
import Tables from './containers/tables/Tables';
import Menus from './containers/menu/Menus';
import AddMenuItem from './containers/menu/AddMenuItem';

function App() {
  return (

     <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/tables" element={<Tables />} />
      <Route path="/menus" element={<Menus />} />
      <Route path="/add-menu" element={<AddMenuItem />} />
</Routes>
 
  );
}

export default App;