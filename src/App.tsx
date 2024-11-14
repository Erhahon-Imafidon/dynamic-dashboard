import { Routes, Route } from 'react-router-dom';
import { Home, Users, Products } from './pages/index.tsx';
import Layout from './components/layout/Layout.tsx';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="users" element={<Users />} />
                <Route path="products" element={<Products />} />
            </Route>
        </Routes>
    );
};

export default App;
