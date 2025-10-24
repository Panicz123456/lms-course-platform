import { Navbar } from "@/modules/home/ui/components/navbar";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {children}
      </div>
    </div>
  )
};

export default Layout;
