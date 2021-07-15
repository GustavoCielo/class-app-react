import { AuthenticateProvider } from "./Authentication";
import { CoursesProvider } from "./Courses";
import { UsersProvider } from "./Users";
import { CourseProvider } from "./Course";

const Providers = ({ children }) => {
  return (
    <>
      <AuthenticateProvider>
        <CoursesProvider>
          <CourseProvider>
          <UsersProvider>
          {children}
          </UsersProvider>
          </CourseProvider>
        </CoursesProvider>
      </AuthenticateProvider>
    </>
  );
};

export default Providers;
