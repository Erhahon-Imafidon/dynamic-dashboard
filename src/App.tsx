import { Routes, Route } from 'react-router-dom';
import { Home, Users, Products, User, Product } from './pages/index.tsx';
import Layout from './components/layout/Layout.tsx';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="users" element={<Users />} />
                <Route path="users/:id" element={<User />} />
                <Route path="products" element={<Products />} />
                <Route path="products/:id" element={<Product />} />
            </Route>
        </Routes>
    );
};

export default App;
