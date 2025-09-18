import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { Shield, Users, GraduationCap } from "lucide-react";
import heroImage from "@/assets/hero-cybersecurity.jpg";

const Registration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    university: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const universities = [
    { value: "vibe", label: "Vibe University" },
    { value: "ai", label: "AI University" },
    { value: "infinity", label: "Infinity University" },
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.university) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate registration process
    setTimeout(() => {
      localStorage.setItem("cyberguard_user", JSON.stringify(formData));
      toast({
        title: "Registration Successful",
        description: "Welcome to CyberGuard AI Protection System!",
      });
      setIsSubmitting(false);
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-8 items-center">
        
        {/* Hero Section */}
        <div className="relative">
          <img 
            src={heroImage} 
            alt="CyberGuard AI Security"
            className="w-full h-[600px] object-cover rounded-2xl shadow-card"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent rounded-2xl flex flex-col justify-end p-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
                CyberGuard AI
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Advanced AI-Powered Cyberbullying Detection & Prevention System
              </p>
              <div className="flex justify-center gap-8">
                <div className="text-center">
                  <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">AI Protection</p>
                </div>
                <div className="text-center">
                  <Users className="w-8 h-8 text-accent mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Community Safety</p>
                </div>
                <div className="text-center">
                  <GraduationCap className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">University Network</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Registration Form */}
        <Card className="bg-gradient-card shadow-card border-border">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Student Registration</CardTitle>
            <CardDescription>
              Join the fight against cyberbullying with AI-powered protection
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="mt-2"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email">Gmail ID</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@gmail.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="mt-2"
                  required
                />
              </div>

              <div>
                <Label htmlFor="university">University</Label>
                <Select
                  value={formData.university}
                  onValueChange={(value) => handleInputChange("university", value)}
                  required
                >
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select your university" />
                  </SelectTrigger>
                  <SelectContent>
                    {universities.map((uni) => (
                      <SelectItem key={uni.value} value={uni.value}>
                        {uni.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-accent hover:opacity-90 shadow-primary text-lg py-6"
              >
                {isSubmitting ? "Creating Account..." : "Register & Join Protection Network"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Created by <span className="text-primary font-medium">Infinity Group</span>
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Collaborators: Jerrin, Parthi, Ankush, Viswa
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Registration;