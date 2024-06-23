import React, {useState} from 'react';
import { RouterProvider } from 'react-router-dom';
import { privateRoute, publicRoute } from './router.jsx';

const AppRouter = () => {
    // const { user } = useAuthContext();
    const [user, setUser] = useState(true)
    const router = user ? privateRoute : publicRoute;

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
};

export default AppRouter;
