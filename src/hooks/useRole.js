export default function useRole() {
  return localStorage.getItem("userRole") || "viewer";
}