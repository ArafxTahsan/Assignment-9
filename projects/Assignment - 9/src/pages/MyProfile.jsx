import { useState } from "react";
import { useAuth } from "../contexts/AuthContext.jsx";

export default function MyProfile() {
  const { user, updateUserProfile, setToast } = useAuth();
  const [form, setForm] = useState({
    displayName: user?.displayName || "",
    photoURL: user?.photoURL || ""
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await updateUserProfile(form);
      setToast({ type: "success", message: "Profile updated successfully." });
    } catch (error) {
      setToast({ type: "error", message: error.message });
    }
  };

  return (
    <section className="profile-page">
      <div className="profile-card">
        <img src={user?.photoURL || "https://i.ibb.co/5xYvV6N/default-avatar.png"} alt={user?.displayName || "Profile"} />
        <div>
          <span className="eyebrow">My Profile</span>
          <h1>{user?.displayName || "Plant Friend"}</h1>
          <p>{user?.email}</p>
        </div>
      </div>
      <form className="profile-form" onSubmit={handleSubmit}>
        <h2>Update Profile</h2>
        <label>Name</label>
        <input
          value={form.displayName}
          onChange={(event) => setForm({ ...form, displayName: event.target.value })}
          required
        />
        <label>Photo URL</label>
        <input
          type="url"
          value={form.photoURL}
          onChange={(event) => setForm({ ...form, photoURL: event.target.value })}
          required
        />
        <button className="primary-button full" type="submit">Update Profile</button>
      </form>
    </section>
  );
}
