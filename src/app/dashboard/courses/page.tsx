import { auth } from "@/lib/auth";
import { CoursesView } from "@/modules/courses/ui/view/courses-view"
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const Page = async () => { 
  const session = await auth.api.getSession({
    headers: await headers()
  })

  if (!session) {
    return redirect("/");
  }
  return <CoursesView />
}

export default Page