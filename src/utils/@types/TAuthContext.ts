// import { TUser } from "@user";

// Define the type for AuthContext
declare module '@user'{
type TAuthContext = {
    user?: TUser | null; // Assuming TUser is your user type
    setUser?: (user: TUser | null) => void;
};
}