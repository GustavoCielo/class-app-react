import { AuthenticateProvider } from "./Authentication";
import { CoursesProvider } from "./Courses";
import { UsersProvider } from "./Users";

const Providers = ({ children }) => {
  return (
    <>
      <AuthenticateProvider>
        <CoursesProvider>
          {/* <UsersProvider> */}
          {children}
          {/* </UsersProvider> */}
        </CoursesProvider>
      </AuthenticateProvider>
    </>
  );
};

export default Providers;
