import { Outlet } from "react-router-dom";
import "./Inbox.css";

export default function InboxPage() {
  return (
    <div className="Inbox">
      <Outlet />
    </div>
  );
}
