import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dashboard } from '../features/dashboard/components';
import { DashboardProducts } from '../features/dashboard-products';
import { FormCreateProduct } from '../features/dashboard-products/form.create-product';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/dashboard/products" element={<DashboardProducts />} />
                <Route path="/dashboard/products/create" element={<FormCreateProduct />} />
            </Routes>
        </BrowserRouter>
    );
};
