import { AuthenticateProvider } from "./Authentication"


const Providers = ({children}) => {
    return (
       <>
       <AuthenticateProvider>
           {children}
       </AuthenticateProvider>
       </>
)
}

export default Providers;
