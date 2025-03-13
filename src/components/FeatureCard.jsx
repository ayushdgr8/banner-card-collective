
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { motion } from "framer-motion";

const FeatureCard = ({ title, description, icon }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="bg-white/70 backdrop-blur-sm border border-gray-200 shadow-lg">
        <CardHeader>
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            {icon}
          </div>
          <CardTitle className="text-xl font-semibold mb-2">{title}</CardTitle>
          <CardDescription className="text-gray-600">{description}</CardDescription>
        </CardHeader>
      </Card>
    </motion.div>
  );
};

export default FeatureCard;
