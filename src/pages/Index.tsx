import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Users, GraduationCap, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-cybersecurity.jpg";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already registered
    const user = localStorage.getItem("cyberguard_user");
    if (user) {
      navigate("/dashboard");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative">
        <img 
          src={heroImage} 
          alt="CyberGuard AI Hero" 
          className="w-full h-screen object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background/90">
          <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              CyberGuard AI
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground mb-8 max-w-4xl">
              Advanced AI-Powered Cyberbullying Detection & Prevention System
            </p>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
              Protecting students across universities with intelligent threat detection, 
              instant reporting, and automated enforcement systems.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-16">
              <Button
                onClick={() => navigate("/register")}
                size="lg"
                className="bg-gradient-accent hover:opacity-90 shadow-primary text-xl py-8 px-12"
              >
                Get Protected Now
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
              <Button
                onClick={() => navigate("/university-portals")}
                variant="outline"
                size="lg"
                className="text-xl py-8 px-12 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                View University Network
              </Button>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl">
              <div className="text-center p-6 bg-card/80 backdrop-blur-sm rounded-xl shadow-card border border-border">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">AI Protection</h3>
                <p className="text-muted-foreground">
                  Advanced machine learning algorithms detect cyberbullying in real-time
                </p>
              </div>
              <div className="text-center p-6 bg-card/80 backdrop-blur-sm rounded-xl shadow-card border border-border">
                <Users className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Community Safety</h3>
                <p className="text-muted-foreground">
                  Building safer digital environments for all students
                </p>
              </div>
              <div className="text-center p-6 bg-card/80 backdrop-blur-sm rounded-xl shadow-card border border-border">
                <GraduationCap className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">University Network</h3>
                <p className="text-muted-foreground">
                  Connected across Vibe, AI, and Infinity Universities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Credits Section */}
      <div className="py-16 bg-gradient-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Created by <span className="text-primary">Infinity Group</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Collaborators: <span className="text-accent font-medium">Jerrin</span>, {" "}
            <span className="text-accent font-medium">Parthi</span>, {" "}
            <span className="text-accent font-medium">Ankush</span>, {" "}
            <span className="text-accent font-medium">Viswa</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
