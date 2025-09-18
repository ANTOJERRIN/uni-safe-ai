import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Upload, Shield, AlertTriangle, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("cyberguard_user") || "{}");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleSubmitReport = async () => {
    if (!selectedFile || !description.trim()) {
      toast({
        title: "Missing Information",
        description: "Please provide both evidence image and description.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate AI processing
    setTimeout(() => {
      toast({
        title: "Report Submitted Successfully",
        description: "AI analysis in progress. University management will be notified.",
      });
      setIsSubmitting(false);
      navigate("/university-portals");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                CyberGuard AI Dashboard
              </h1>
              <p className="text-muted-foreground mt-2">
                Welcome back, {user.name} from {user.university}
              </p>
            </div>
            <Badge variant="secondary" className="px-4 py-2">
              <Shield className="w-4 h-4 mr-2" />
              Protected
            </Badge>
          </div>
        </div>

        {/* Report Form */}
        <Card className="bg-gradient-card shadow-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-primary" />
              Report Cyberbullying Incident
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label htmlFor="evidence" className="text-foreground">
                Upload Evidence (Image/Screenshot)
              </Label>
              <div className="mt-2">
                <Input
                  id="evidence"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
                />
                {selectedFile && (
                  <div className="mt-2 p-2 bg-muted rounded-md">
                    <p className="text-sm text-muted-foreground">
                      Selected: {selectedFile.name}
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div>
              <Label htmlFor="description" className="text-foreground">
                Incident Description
              </Label>
              <Textarea
                id="description"
                placeholder="Please describe the cyberbullying incident in detail..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="mt-2 min-h-[120px]"
              />
            </div>

            <div className="flex gap-4">
              <Button
                onClick={handleSubmitReport}
                disabled={isSubmitting}
                className="bg-gradient-accent hover:opacity-90 shadow-primary"
              >
                {isSubmitting ? (
                  <>Processing...</>
                ) : (
                  <>
                    <Upload className="w-4 h-4 mr-2" />
                    Submit Report
                  </>
                )}
              </Button>
              
              <Button
                variant="outline"
                onClick={() => navigate("/university-portals")}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View University Portals
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Reports */}
        <Card className="mt-8 bg-gradient-card shadow-card border-border">
          <CardHeader>
            <CardTitle>Recent Reports</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                <div>
                  <p className="font-medium">Report #2024001</p>
                  <p className="text-sm text-muted-foreground">Submitted 2 hours ago</p>
                </div>
                <Badge variant="secondary">Under Review</Badge>
              </div>
              <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                <div>
                  <p className="font-medium">Report #2024002</p>
                  <p className="text-sm text-muted-foreground">Submitted yesterday</p>
                </div>
                <Badge className="bg-success text-success-foreground">Resolved</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;