import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center">
      <Button asChild variant="outline" className="absolute top-4 left-4">
        <Link href="/">
          <ArrowLeftIcon />
          Back
        </Link>
      </Button>
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 self-center font-medium">
          <Image src="/logo.png" alt="Logo" width={32} height={32} />
          PaniczLMS.
        </Link>
        {children}
        <div className=" text-balance text-center text-xs text-muted-foreground">
          By clicking continue, you agree to our{" "}
          <span className="hover:text-primary hover:underline">
            Terms of service
          </span>{" "}
          and{" "}
          <span className="hover:text-primary hover:underline">
            Privacy Policy
          </span>
          .
        </div>
      </div>
    </div>
  );
};

export default Layout;
