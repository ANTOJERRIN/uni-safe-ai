import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, DollarSign, AlertCircle, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import universityLogos from "@/assets/university-logos.jpg";

const UniversityPortals = () => {
  const navigate = useNavigate();
  
  const universities = [
    {
      name: "AI University",
      url: "https://aipowered8.wordpress.com/",
      status: "Active",
      reportCount: 12,
      resolvedCount: 8,
    },
    {
      name: "Vibe University", 
      url: "https://vibe-uni-spotlight.lovable.app",
      status: "Active",
      reportCount: 8,
      resolvedCount: 6,
    },
    {
      name: "Infinity University",
      url: "https://infinite-university-i94dhtf.gamma.site/",
      status: "Active", 
      reportCount: 15,
      resolvedCount: 12,
    },
  ];

  const chatbotUrl = "http://chatbot-social-safe-chat.lovable.app";

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            University Protection Network
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Connected institutions working together to combat cyberbullying
          </p>
          <img 
            src={universityLogos} 
            alt="University Network"
            className="w-full max-w-2xl mx-auto rounded-xl shadow-card"
          />
        </div>

        {/* Chatbot Integration */}
        <Card className="mb-8 bg-gradient-card shadow-accent border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-accent" />
              AI Social Safety Chatbot
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Get instant support and guidance from our AI-powered safety assistant
            </p>
            <Button
              onClick={() => window.open(chatbotUrl, "_blank")}
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Launch Safety Chatbot
            </Button>
          </CardContent>
        </Card>

        {/* University Portals Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {universities.map((uni, index) => (
            <Card key={index} className="bg-gradient-card shadow-card border-border hover:shadow-primary transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{uni.name}</CardTitle>
                  <Badge variant="secondary">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    {uni.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-muted rounded-lg">
                    <p className="text-2xl font-bold text-primary">{uni.reportCount}</p>
                    <p className="text-xs text-muted-foreground">Total Reports</p>
                  </div>
                  <div className="text-center p-3 bg-muted rounded-lg">
                    <p className="text-2xl font-bold text-success">{uni.resolvedCount}</p>
                    <p className="text-xs text-muted-foreground">Resolved</p>
                  </div>
                </div>
                
                <Button
                  onClick={() => window.open(uni.url, "_blank")}
                  className="w-full"
                  variant="outline"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Visit Portal
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Fine Payment System */}
        <Card className="bg-gradient-card shadow-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-warning" />
              Fine Payment System
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Standard Fine Rate</h3>
                <div className="bg-muted p-6 rounded-lg text-center">
                  <p className="text-3xl font-bold text-warning">₹1,000</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Per cyberbullying violation
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Payment Process</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-xs text-primary-foreground">1</div>
                    <p className="text-sm">AI detects cyberbullying incident</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-xs text-primary-foreground">2</div>
                    <p className="text-sm">University management reviews case</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-xs text-primary-foreground">3</div>
                    <p className="text-sm">Fine notice issued via Razorpay</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-xs text-primary-foreground">4</div>
                    <p className="text-sm">Payment processed securely</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <Button
                onClick={() => navigate("/payment")}
                className="bg-warning text-warning-foreground hover:bg-warning/90"
              >
                <DollarSign className="w-4 h-4 mr-2" />
                View Payment Portal
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UniversityPortals;