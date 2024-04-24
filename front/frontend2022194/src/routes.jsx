import { DashboardPage } from "./Pages/dashboard";
import { AuthPage } from "./Pages/auth";

const routes = [
    {path: '/auth', element: <AuthPage/>},
    {path: '/*', element: <DashboardPage/>}
]

export default routes