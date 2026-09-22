import Workspace from "@/components/workspace";
import { ensureSeed, getCurrentUser } from "@/lib/server";

export const dynamic = "force-dynamic";
export default async function HomePage() {
  await ensureSeed();
  const user = await getCurrentUser();
  return <Workspace initialData={user ? { user, authenticated: true, courses: [], teams: [], labs: [], progress: [], bookings: [], files: [], history: [], defaultDate: "" } : null} />;
}
