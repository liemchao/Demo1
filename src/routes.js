import React from "react";

const Dashboard = React.lazy(() => import("./pages/Dashboard/index"));
const MyProfile = React.lazy(() => import("./pages/MyProfile/MyProfile"));

// Admin
const AdminAccountList = React.lazy(() => import("./pages/Admin/Account/AccountList"));
const AdminAccountDetail = React.lazy(() => import("./pages/Admin/Account/AccountDetail"));
const CreateAccount = React.lazy(() => import("./pages/Admin/Account/CreateAccount"));
// const AdminCompanyDetail = React.lazy(() => import("./pages/Admin/Company/CompanyDetail"));
// const AdminJobList = React.lazy(() => import("./pages/Admin/Job/JobList"));
// const AdminSkillList = React.lazy(() => import("./pages/Admin/Skill/SkillList"))
// const AdminPositionList = React.lazy(() => import("./pages/Admin/Position/PositionList"))
// const AdminEventList = React.lazy(() => import("./pages/Admin/Event/EventList"))
// const AdminAttendList = React.lazy(() => import("./pages/Admin/Event/AttendList"))
// const AdminInterviewList = React.lazy(() => import("./pages/Admin/Interview/InterviewList"))
// const AdminInterviewDetail = React.lazy(() => import("./pages/Employer/Interview/InterviewDetail"))
// const AdminRoleList = React.lazy(() => import("./pages/Admin/Role/RoleList"))
// const AdminWelfareList = React.lazy(() => import("./pages/Admin/Welfare/WelfareList"))
// const AdminBillingList = React.lazy(() => import("./pages/Admin/Billing/BillingList"))
// const AdminRecruitmentList = React.lazy(() => import("./pages/Admin/Recruitment/RecruitmentList"))
// const AdminApplyList = React.lazy(() => import("./pages/Admin/Recruitment/ApplyList"))

// Manager
const CustomerAccountList = React.lazy(() => import("./pages/Manager/Account/AccountList"));
const EmployeeAccountDetail = React.lazy(() => import("./pages/Manager/Employee/AccountDetail"));
const CustomerAccountDetail = React.lazy(() => import("./pages/Manager/Account/AccountDetail"));
const ProductUpdate = React.lazy(() => import("./pages/Manager/Product/Updateproduct"));
const ProductList = React.lazy(() => import("./pages/Manager/Product/ProductList"))
const ProductDetail = React.lazy(() => import("./pages/Manager/Product/ProductDetail"))
const EmployeeList = React.lazy(() => import("./pages/Manager/Employee/AccountList"))
const AppointmentList = React.lazy(() => import("./pages/Manager/Appointment/AppointmentList"))
const AppointmentDetail = React.lazy(() => import("./pages/Manager/Appointment/AppointmentDetail"))
const TaskDetail = React.lazy(() => import("./pages/Manager/Task/TaskDetail"))
const TaskCreate = React.lazy(() => import("./pages/Manager/Task/TaskCreate"))
// const ManagerWelfareList = React.lazy(() => import("./pages/Manager/Welfare/WelfareList"))
const ManagerTaskList = React.lazy(() => import("./pages/Manager/Task/TaskList"))
// const ManagerRecruitmentList = React.lazy(() => import("./pages/Manager/Recruitment/RecruitmentList"))

// Employer
// const EventList = React.lazy(() => import("./pages/Employer/Event/EventList"));
// const EventDetail = React.lazy(() => import("./pages/Employer/Event/EventDetail"));
// const CompanyList = React.lazy(() => import("./pages/Employer/Company/CompanyList"));
// const CompanyDetail = React.lazy(() => import("./pages/Employer/Company/CompanyDetail"));
// const InterviewList = React.lazy(() => import("./pages/Employer/Interview/InterviewList"));
// const InterviewDetail = React.lazy(() => import("./pages/Employer/Interview/InterviewDetail"));
// const RecruitmentList = React.lazy(() => import("./pages/Employer/Recruitment/RecruitmentList"));
// const ApplyList = React.lazy(() => import("./pages/Employer/Recruitment/ApplyList"));
// const LogList = React.lazy(() => import("./pages/Employer/LogPage"));
// const ApplyListPage = React.lazy(() => import("./pages/Employer/Recruitment/AppListPage"));

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/Dashboard", exact: true, name: "Dashboard", component: Dashboard },
  { path: "/Dashboard/MyProfile", name: "MyProfile", component: MyProfile },

  // { path: "/Dashboard/Recruiter/EventList", name: "EventList", component: EventList },
  // { path: "/Dashboard/Recruiter/EventDetail", name: "EventDetail", component: EventDetail },
  // { path: "/Dashboard/Recruiter/CompanyList", name: "CompanyList", component: CompanyList },
  // { path: "/Dashboard/Recruiter/CompanyDetail", name: "CompanyDetail", component: CompanyDetail },
  // { path: "/Dashboard/Recruiter/InterviewList", name: "InterviewList", component: InterviewList },
  // { path: "/Dashboard/Recruiter/InterviewDetail", name: "InterviewDetail", component: InterviewDetail },
  // { path: "/Dashboard/Recruiter/RecruitmentList", name: "RecruitmentList", component: RecruitmentList },
  // { path: "/Dashboard/Recruiter/ApplyList", name: "ApplyList", component: ApplyList },
  // { path: "/Dashboard/Recruiter/LogList", name: "LogList", component: LogList },
  // { path: "/Dashboard/Recruiter/ApplyListPage", name: "ApplyListPage", component: ApplyListPage },
  
  { path: "/Dashboard/Admin/AccountList", name: "AdminAccountList", component: AdminAccountList },
  { path: "/Dashboard/Admin/AccountDetail", name: "AdminAccountDetail", component: AdminAccountDetail },
  { path: "/Dashboard/Admin/CreateAccount", name: "CreateAccount", component: CreateAccount },
  // { path: "/Dashboard/Admin/CompanyDetail", name: "AdminCompanyDetail", component: AdminCompanyDetail },
  // { path: "/Dashboard/Admin/JobList", name: "AdminJobList", component: AdminJobList },
  // { path: "/Dashboard/Admin/SkillList", name: "AdminSkillList", component: AdminSkillList },
  // { path: "/Dashboard/Admin/PositionList", name: "AdminPositionList", component: AdminPositionList },
  // { path: "/Dashboard/Admin/EventList", name: "AdminEventList", component: AdminEventList },
  // { path: "/Dashboard/Admin/EventDetail", name: "AdminAttendList", component: AdminAttendList },
  // { path: "/Dashboard/Admin/InterviewDetail", name: "AdminInterviewDetail", component: AdminInterviewDetail },
  // { path: "/Dashboard/Admin/InterviewList", name: "AdminInterviewList", component: AdminInterviewList },
  // { path: "/Dashboard/Admin/RoleList", name: "AdminRoleList", component: AdminRoleList },
  // { path: "/Dashboard/Admin/WelfareList", name: "AdminWelfareList", component: AdminWelfareList },
  // { path: "/Dashboard/Admin/BillingList", name: "AdminBillingList", component: AdminBillingList },
  // { path: "/Dashboard/Admin/RecruitmentList", name: "AdminRecruitmentList", component: RecruitmentList },
  // { path: "/Dashboard/Admin/ApplyList", name: "AdminApplyList", component: AdminApplyList },
  
  { path: "/Dashboard/Manager/AccountList", name: "EmployeeAccountList", component: CustomerAccountList },
  { path: "/Dashboard/Manager/Employee/AccountDetail", name: "EmployeeAccountDetail", component: EmployeeAccountDetail},
  { path: "/Dashboard/Manager/Account/AccountDetail", name: "CustomerAccountList", component: CustomerAccountDetail },
  { path: "/Dashboard/Manager/ProductUpdate", name: "ProductUpdate", component: ProductUpdate },
  { path: "/Dashboard/Manager/ProductList", name: "ProductList", component:ProductList },
  { path: "/Dashboard/Manager/ProductDetail", name: "ProductDetail", component:ProductDetail },
  { path: "/Dashboard/Manager/EmployeeList", name: "EmployeeList", component: EmployeeList },
  { path: "/Dashboard/Manager/AppointmentList", name: "AppointmentList", component: AppointmentList },
  { path: "/Dashboard/Manager/AppointmentDetail", name: "AppointmentDetail", component: AppointmentDetail },
  { path: "/Dashboard/Manager/TaskDetail", name: "TaskDetail", component: TaskDetail },
  { path: "/Dashboard/Manager/TaskList", name: "ManagerTaskList", component: ManagerTaskList },
  { path: "/Dashboard/Manager/TaskCreate", name: "TaskCreateList", component: TaskCreate },
];

export default routes;
