import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="not-found">
      <span className="eyebrow">404</span>
      <h1>This garden path is empty.</h1>
      <p>The page you are looking for does not exist or has moved.</p>
      <Link className="primary-button" to="/">Return Home</Link>
    </section>
  );
}
