import { auth } from "@/lib/auth";
import { CreateCourseView } from "@/modules/courses/ui/view/create-course-view";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const Page = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return redirect("/");
  }
  return <CreateCourseView />;
};

export default Page;
