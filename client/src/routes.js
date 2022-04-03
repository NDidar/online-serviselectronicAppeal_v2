import Admin from "./pages/Admin";
import {
    ADMIN_ROUTE,
    CREATE_APPEAL_ROUTE,
    EMPLOYEE_ROUTE,
    LOGIN_ROUTE,
    MAIN_ROUTE,
    REGISTRATION_ROUTE,
    CRUD_ORGANIZATION_ROUTE, CRUD_DEPARTMENT_ROUTE, REGISTRATION_EMPLOYEE_ROUTE
} from "./utils/Consts";
import Auth from "./pages/Auth";
import MainPage from "./pages/MainPage";
import creatAppeal from "./pages/userPages/creatAppeal";
import EmployeePage from "./pages/employeePages/EmployeePage";
import CRUDOrganization from "./pages/adminPages/CRUDOrganization";
import CRUDDepartment from "./pages/adminPages/CRUDDepartment";
import RegistrationNewEmployee from "./pages/adminPages/RegistrationNewEmployee";

export const adminRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: CRUD_ORGANIZATION_ROUTE,
        Component: CRUDOrganization
    },
    {
        path: CRUD_DEPARTMENT_ROUTE,
        Component: CRUDDepartment
    },
    {
        path: REGISTRATION_EMPLOYEE_ROUTE,
        Component: RegistrationNewEmployee
    }
]

export const employeeRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: EMPLOYEE_ROUTE,
        Component: EmployeePage
    }
]

export const userRoutes = [
    {
        path: CREATE_APPEAL_ROUTE,
        Component: creatAppeal
    }
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: MAIN_ROUTE,
        Component: MainPage
    },
]