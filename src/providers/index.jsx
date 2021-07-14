import { AuthenticateProvider } from "./Authentication";
import { CoursesProvider } from "./Courses";

const Providers = ({ children }) => {
  return (
    <>
      <AuthenticateProvider>
        <CoursesProvider>{children}</CoursesProvider>
      </AuthenticateProvider>
    </>
  );
};

export default Providers;
