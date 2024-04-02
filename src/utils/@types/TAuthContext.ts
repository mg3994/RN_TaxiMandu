// Define the type for AuthContext
type TAuthContext = {
    user?: TUser | null; // Assuming TUser is your user type
    setUser?: (user: TUser | null) => void;
};