import { profile } from "../../data/profile";

export function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-[1180px] px-5 py-7 text-center text-xs text-muted">
        <p>&copy; 2024 {profile.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
