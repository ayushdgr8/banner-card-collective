
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Streamline Your Asset Management
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Powerful solutions for modern enterprises. Manage your assets with confidence and precision.
          </p>
          <Link to="/signup">
            <Button className="bg-blue-600 hover:bg-blue-700 transition-all transform hover:scale-105">
              Get Started
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
