import { AuthenticateProvider } from "./Authentication";
import { CoursesProvider } from "./Courses";
import { UsersProvider } from "./Users";
import { CourseProvider } from "./Course";
import { ClassProvider } from "./Class";
const Providers = ({ children }) => {
  return (
    <>
      <AuthenticateProvider>
        <CoursesProvider>
          <ClassProvider>
            <CourseProvider>
              <UsersProvider>{children}</UsersProvider>
            </CourseProvider>
          </ClassProvider>
        </CoursesProvider>
      </AuthenticateProvider>
    </>
  );
};

export default Providers;
