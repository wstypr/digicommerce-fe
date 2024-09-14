import { Button } from '../components/ui/button';
import { Tooltip } from '../components/ui/tooltip';

const App = () => {
    return (
        <>
            <h1 className="mb-4">Hello from the app</h1>
            <Tooltip message="Hello from the tooltip">
                <Button variant="outline">Click Me</Button>
            </Tooltip>
        </>
    );
};

export default App;
