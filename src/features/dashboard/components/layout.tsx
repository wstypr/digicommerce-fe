import { Home, LogOut, Package, Receipt, Users } from 'lucide-react';
import { Menu } from './layout.menu';
import { Button } from '../../../components/ui/button';
interface LayoutProps {
    children: React.ReactNode;
    isCentered?: boolean;
}

export const LayoutDashboard = (props: LayoutProps) => {
    return (
        <div className="flex min-h-screen">
            <aside className="flex w-[240px] flex-col justify-between border-r bg-primary-100 p-6">
                <div>
                    <div className="mb-4 px-3 py-2 text-sm font-bold">Digicommerce.</div>
                    <Menu label="Dashboard" href="/dashboard" icon={<Home size={18} />} />
                    <Menu label="Products" href="/dashboard/products" icon={<Package size={18} />} />
                    <Menu label="Orders" href="/dashboard/orders" icon={<Receipt size={18} />} />
                    <Menu label="Customers" href="/dashboard/customers" icon={<Users size={18} />} />
                </div>
                <Button size="small" variant="secondary" startContent={<LogOut size={16} />}>
                    Logout
                </Button>
            </aside>
            <main className={` ${props.isCentered ? 'mx-auto w-[50%]' : 'w-[calc(100%-240px)]'} p-6`}>{props.children}</main>
        </div>
    );
};
