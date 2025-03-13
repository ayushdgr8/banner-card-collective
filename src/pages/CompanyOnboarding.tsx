
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Building2, Users, Briefcase } from "lucide-react";

const CompanyOnboarding = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [companySize, setCompanySize] = useState("");
  const [industry, setIndustry] = useState("");
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentStep === 1 && !companySize) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please select a company size",
      });
      return;
    }

    if (currentStep === 2 && !industry) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please select an industry",
      });
      return;
    }

    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      // Complete onboarding
      toast({
        title: "Onboarding Complete",
        description: "Your company profile has been set up successfully!",
      });
      navigate("/");
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const sizeOptions = ["1-10", "11-50", "51-200", "201-500", "500+"];
  const industryOptions = [
    "Technology",
    "Finance",
    "Healthcare",
    "Manufacturing",
    "Retail",
    "Education",
    "Other",
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Company Onboarding
          </CardTitle>
          <CardDescription className="text-center">
            Step {currentStep} of 3
          </CardDescription>
        </CardHeader>
        <CardContent>
          {currentStep === 1 && (
            <div className="space-y-4">
              <div className="text-center mb-6">
                <Building2 className="mx-auto h-12 w-12 text-blue-600 mb-2" />
                <h3 className="text-lg font-medium">Company Size</h3>
                <p className="text-sm text-gray-500">
                  How many employees work at your company?
                </p>
              </div>
              <div className="grid gap-2">
                {sizeOptions.map((size) => (
                  <Button
                    key={size}
                    variant={companySize === size ? "default" : "outline"}
                    className="justify-start h-auto py-3"
                    onClick={() => setCompanySize(size)}
                  >
                    <Users className="mr-2 h-4 w-4" />
                    {size} employees
                  </Button>
                ))}
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-4">
              <div className="text-center mb-6">
                <Briefcase className="mx-auto h-12 w-12 text-blue-600 mb-2" />
                <h3 className="text-lg font-medium">Industry</h3>
                <p className="text-sm text-gray-500">
                  What industry does your company operate in?
                </p>
              </div>
              <div className="grid gap-2">
                {industryOptions.map((option) => (
                  <Button
                    key={option}
                    variant={industry === option ? "default" : "outline"}
                    className="justify-start h-auto py-3"
                    onClick={() => setIndustry(option)}
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-4 text-center">
              <div className="py-6">
                <div className="mx-auto h-20 w-20 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-green-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium">All Set!</h3>
                <p className="text-sm text-gray-500 mt-2">
                  Your company profile is now complete. Click Finish to start using AssetFlow.
                </p>
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            variant="outline"
            onClick={handleBack}
            disabled={currentStep === 1}
          >
            Back
          </Button>
          <Button onClick={handleNext}>
            {currentStep === 3 ? "Finish" : "Next"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CompanyOnboarding;
