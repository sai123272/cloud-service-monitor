import AppRoutes from "./routes";
import { RoleProvider } from "../context/RoleContext";

export default function App() {
  return (
    <RoleProvider>
      <AppRoutes />
    </RoleProvider>
  );
}