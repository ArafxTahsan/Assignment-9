import { X } from "lucide-react";
import { useAuth } from "../contexts/AuthContext.jsx";

export default function Toast() {
  const { toast, setToast } = useAuth();

  if (!toast) return null;

  return (
    <div className={`toast ${toast.type || "info"}`} role="status">
      <span>{toast.message}</span>
      <button aria-label="Close notification" onClick={() => setToast(null)}>
        <X size={16} />
      </button>
    </div>
  );
}
