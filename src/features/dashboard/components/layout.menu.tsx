import { Link } from 'react-router-dom';

interface MenuProps {
    label: string;
    href: string;
    icon?: React.ReactNode;
}

export const Menu = (props: MenuProps) => {
    return (
        <Link to={props.href} className="flex items-center gap-2 rounded-lg bg-transparent px-3 py-2 font-medium hover:bg-primary-500 hover:text-white">
            {props.icon}
            {props.label}
        </Link>
    );
};
