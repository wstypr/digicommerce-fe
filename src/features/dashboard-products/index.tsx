import { Button } from '../../components/ui/button';
import { LayoutDashboard } from '../dashboard/components/layout';
import { Link } from 'react-router-dom';

export const DashboardProducts = () => {
    return (
        <LayoutDashboard>
            <main>
                <section className="flex items-end justify-between">
                    <div>
                        <h3>Products</h3>
                        <p>All your products</p>
                    </div>
                    <Link to="/dashboard/products/create">
                        <Button>Add Product</Button>
                    </Link>
                </section>
            </main>
        </LayoutDashboard>
    );
};
