import { Routes, Route } from 'react-router-dom';
import PageNotFound from '../static/PageNotFound';
import Login from '../user/Login';
import Welcome from '../static/Welcome';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRouter;
