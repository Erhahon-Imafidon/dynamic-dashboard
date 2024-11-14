import { Routes, Route } from 'react-router-dom';
import { Home, Users, Products } from './pages/index.tsx';
import Layout from './components/Layout.tsx';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="users" element={<Users />} />
                <Route path="products" element={<Products />} />
            </Route>
        </Routes>
    );
};

export default App;
