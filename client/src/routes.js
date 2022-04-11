import Admin from "./pages/Admin";
import {
    ADMIN_ROUTE,
    CREATE_APPEAL_ROUTE,
    EMPLOYEE_ROUTE,
    LOGIN_ROUTE,
    MAIN_ROUTE,
    REGISTRATION_ROUTE,
    CRUD_ORGANIZATION_ROUTE,
    CRUD_DEPARTMENT_ROUTE,
    REGISTRATION_EMPLOYEE_ROUTE,
    CRUD_EMPLOYEE_ROUTE,
    EMPLOYEE_Profile_ROUTE,
    EMPLOYEE_PROFILE_ROUTE,
    PROFILE_ROUTE,
    HISTORY_APPEAL_USER_ROUTE,
    ACTIVE_APPEAL_USER_ROUTE,
    APPEAL_ITEM_ROUTE, NOT_ACTIVE_APPEAL_USER_ROUTE
} from "./utils/Consts";
import Auth from "./pages/Auth";
import MainPage from "./pages/MainPage";
import creatAppeal from "./pages/userPages/creatAppeal";
import EmployeePage from "./pages/employeePages/EmployeePage";
import CRUDOrganization from "./pages/adminPages/CRUDOrganization";
import CRUDDepartment from "./pages/adminPages/CRUDDepartment";
import RegistrationNewEmployee from "./pages/adminPages/RegistrationNewEmployee";
import CRUDEmployee from "./pages/adminPages/CRUDEmployee";
import EmployeeProfile from "./components/CRUD/employeeCRUD/EmployeeProfile";
import Profile from "./pages/userPages/Profile";
import viewHistory from "./pages/userPages/viewHistory";
import viewActApp from "./pages/userPages/viewActApp";
import AppealItem from "./components/AppealItem";
import viewNotActApp from "./pages/userPages/viewNotActApp";

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
    },
    {
        path: CRUD_EMPLOYEE_ROUTE,
        Component: CRUDEmployee
    },
    {
        path: EMPLOYEE_PROFILE_ROUTE + '/:id',
        Component: EmployeeProfile
    }
]

export const employeeRoutes = [
    {
        path: EMPLOYEE_ROUTE,
        Component: EmployeePage
    }
]

export const userRoutes = [
    {
        path: CREATE_APPEAL_ROUTE,
        Component: creatAppeal
    },
    {
        path: PROFILE_ROUTE,
        Component: Profile
    },
    {
        path: HISTORY_APPEAL_USER_ROUTE,
        Component: viewHistory
    },
    {
        path: ACTIVE_APPEAL_USER_ROUTE,
        Component: viewActApp
    },
    {
        path: NOT_ACTIVE_APPEAL_USER_ROUTE,
        Component: viewNotActApp
    },
    {
        path: APPEAL_ITEM_ROUTE + '/:id',
        Component: AppealItem
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