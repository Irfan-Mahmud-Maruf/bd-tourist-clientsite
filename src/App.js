import { Route, Routes } from 'react-router-dom';
// import SingleService from './pages/services/[id]';
import { RequireAuth } from './hooks/useRouter';
import AllOrder from './pages/allOrder/[id]';
import UserDashboard from './pages/dashboard/[id]';
import Error404 from './pages/Error404';
import Home from './pages/Home';
import Login from './pages/Login';
import UserOrder from './pages/order/[id]';
import Register from './pages/Register';
import AddReview from './pages/reviews/AddReview';
import AllServices from './pages/Service/AllServices';
import SingleService from './pages/Service/[id]';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path={`/`} element={<Home />} />
        <Route exact path={`/service/:id`} element={<RequireAuth><SingleService /></RequireAuth>} />
        <Route exact path={`/dashboard/services`} element={<RequireAuth><AllServices /></RequireAuth>} />
        <Route exact path={`/dashboard`} element={<RequireAuth><UserDashboard/></RequireAuth>} />
        <Route exact path={`/addreview`} element={<RequireAuth><AddReview/></RequireAuth>} />
        <Route exact path={`/dashboard/my-orders`} element={<RequireAuth><UserOrder/></RequireAuth>} />
        <Route exact path={`/dashboard/orders`} element={<RequireAuth><AllOrder/></RequireAuth>} />
        <Route exact path={`/login`} element={<Login />} />
        <Route exact path={`/register`} element={<Register/>} />
        <Route path={`/*`} element={<Error404/>} />
      </Routes>
    </div>
  );
}

export default App;
