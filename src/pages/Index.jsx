
import { Database, BarChart3 } from "lucide-react";
import Navbar from "@/components/Navbar.jsx";
import Banner from "@/components/Banner.jsx";
import FeatureCard from "@/components/FeatureCard.jsx";
import Footer from "@/components/Footer.jsx";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Banner />
      
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureCard
              title="Employee Management System"
              description="Comprehensive solution for managing employee resources, workflows, and operations efficiently."
              icon={<Database className="w-6 h-6 text-blue-600" />}
            />
            <FeatureCard
              title="Asset Management"
              description="Track, manage, and optimize your assets with our powerful management system."
              icon={<BarChart3 className="w-6 h-6 text-blue-600" />}
            />
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
