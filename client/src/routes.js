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
    EMPLOYEE_PROFILE_ROUTE,
    PROFILE_ROUTE,
    HISTORY_APPEAL_USER_ROUTE,
    ACTIVE_APPEAL_USER_ROUTE,
    APPEAL_ITEM_ROUTE,
    NOT_ACTIVE_APPEAL_USER_ROUTE,
    NATURAL_TAB_ROUTE,
    LEGAL_TAB_ROUTE,
    ANON_TAB_ROUTE,
    SEND_EMAIL_ROUTE, ANON_APPEAL_ROUTE
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
import NaturalEntityAppealTab from "./components/tabs/NaturalEntityAppealTab";
import LegalEntityAppealTab from "./components/tabs/LegalEntityAppealTab";
import AnonAppealTab from "./components/tabs/AnonAppealTab";
import Mailer from "./components/Mailer";
import CreateAnonAppeal from "./pages/userPages/CreateAnonAppeal";

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
    },
    {
        path: APPEAL_ITEM_ROUTE + '/:id',
        Component: AppealItem
    },
    {
        path: NATURAL_TAB_ROUTE,
        Component: NaturalEntityAppealTab
    },
    {
        path: LEGAL_TAB_ROUTE,
        Component: LegalEntityAppealTab
    },
    {
        path: ANON_TAB_ROUTE,
        Component: AnonAppealTab
    },
    {
        path: SEND_EMAIL_ROUTE,
        Component: Mailer
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
    {
        path: ANON_APPEAL_ROUTE,
        Component: CreateAnonAppeal
    }
]