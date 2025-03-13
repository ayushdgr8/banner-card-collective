
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Building2, Mail, Lock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!companyName || !email || !password) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please fill in all fields",
      });
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please enter a valid email address",
      });
      return;
    }

    // Here you would typically integrate with your backend
    // For now, show success message
    toast({
      title: "Success!",
      description: "Account created successfully",
    });
    
    // Redirect to onboarding page
    navigate("/onboarding");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            <div className="flex items-center border rounded-md">
              <span className="px-3 py-2 border-r">
                <Building2 className="h-5 w-5 text-gray-400" />
              </span>
              <input
                type="text"
                required
                className="block w-full px-3 py-2 border-0 focus:ring-0 focus:outline-none"
                placeholder="Company Name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>
            
            <div className="flex items-center border rounded-md">
              <span className="px-3 py-2 border-r">
                <Mail className="h-5 w-5 text-gray-400" />
              </span>
              <input
                type="email"
                required
                className="block w-full px-3 py-2 border-0 focus:ring-0 focus:outline-none"
                placeholder="Company Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex items-center border rounded-md">
              <span className="px-3 py-2 border-r">
                <Lock className="h-5 w-5 text-gray-400" />
              </span>
              <input
                type="password"
                required
                className="block w-full px-3 py-2 border-0 focus:ring-0 focus:outline-none"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <Button type="submit" className="w-full">
            Sign up
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
