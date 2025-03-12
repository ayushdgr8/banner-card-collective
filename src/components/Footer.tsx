
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-600">
              Leading provider of enterprise management solutions and asset management services.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-600">
              Email: contact@assetflow.com<br />
              Phone: (555) 123-4567
            </p>
          </div>
        </div>
        <Separator className="my-8" />
        <p className="text-center text-gray-500 text-sm">
          © 2024 AssetFlow. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
