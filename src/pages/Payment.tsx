import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CreditCard, Shield, AlertTriangle, CheckCircle, DollarSign } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Payment = () => {
  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    holderName: "",
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const fineDetails = {
    violationId: "CB-2024-001",
    university: "AI University",
    reportedBy: "John Doe",
    violationType: "Cyberbullying",
    fineAmount: 1000,
    dueDate: "2024-10-25",
  };

  const handleInputChange = (field: string, value: string) => {
    setPaymentData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePayment = async () => {
    if (!paymentData.cardNumber || !paymentData.expiryDate || !paymentData.cvv || !paymentData.holderName) {
      toast({
        title: "Missing Payment Information",
        description: "Please fill in all payment details.",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);
    
    // Simulate Razorpay payment processing
    setTimeout(() => {
      toast({
        title: "Payment Successful",
        description: "Fine payment has been processed successfully.",
      });
      setIsProcessing(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Fine Payment Portal
          </h1>
          <p className="text-muted-foreground">
            Secure payment processing powered by Razorpay
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-8">
          
          {/* Fine Details */}
          <Card className="bg-gradient-card shadow-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-warning" />
                Violation Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Violation ID:</span>
                  <Badge variant="secondary">{fineDetails.violationId}</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">University:</span>
                  <span className="font-medium">{fineDetails.university}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Reported By:</span>
                  <span className="font-medium">{fineDetails.reportedBy}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Violation Type:</span>
                  <Badge variant="destructive">{fineDetails.violationType}</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Due Date:</span>
                  <span className="font-medium">{fineDetails.dueDate}</span>
                </div>
              </div>
              
              <Separator />
              
              <div className="bg-muted p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold">Total Fine Amount:</span>
                  <span className="text-2xl font-bold text-warning">₹{fineDetails.fineAmount}</span>
                </div>
              </div>

              <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-primary">AI Verification Complete</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      This violation has been verified by our advanced AI detection system
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Form */}
          <Card className="bg-gradient-card shadow-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-accent" />
                Payment Information
              </CardTitle>
              <div className="flex items-center gap-2 mt-2">
                <Badge variant="outline" className="text-xs">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  SSL Secured
                </Badge>
                <Badge variant="outline" className="text-xs">
                  Razorpay Powered
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="holderName">Cardholder Name</Label>
                <Input
                  id="holderName"
                  type="text"
                  placeholder="John Doe"
                  value={paymentData.holderName}
                  onChange={(e) => handleInputChange("holderName", e.target.value)}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="cardNumber">Card Number</Label>
                <Input
                  id="cardNumber"
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  value={paymentData.cardNumber}
                  onChange={(e) => handleInputChange("cardNumber", e.target.value)}
                  className="mt-2"
                  maxLength={19}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="expiryDate">Expiry Date</Label>
                  <Input
                    id="expiryDate"
                    type="text"
                    placeholder="MM/YY"
                    value={paymentData.expiryDate}
                    onChange={(e) => handleInputChange("expiryDate", e.target.value)}
                    className="mt-2"
                    maxLength={5}
                  />
                </div>
                <div>
                  <Label htmlFor="cvv">CVV</Label>
                  <Input
                    id="cvv"
                    type="text"
                    placeholder="123"
                    value={paymentData.cvv}
                    onChange={(e) => handleInputChange("cvv", e.target.value)}
                    className="mt-2"
                    maxLength={3}
                  />
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="flex justify-between text-lg">
                  <span>Amount to Pay:</span>
                  <span className="font-bold text-warning">₹{fineDetails.fineAmount}</span>
                </div>
                
                <Button
                  onClick={handlePayment}
                  disabled={isProcessing}
                  className="w-full bg-warning text-warning-foreground hover:bg-warning/90 text-lg py-6"
                >
                  {isProcessing ? (
                    "Processing Payment..."
                  ) : (
                    <>
                      <DollarSign className="w-5 h-5 mr-2" />
                      Pay ₹{fineDetails.fineAmount} via Razorpay
                    </>
                  )}
                </Button>
              </div>

              <div className="text-center">
                <p className="text-xs text-muted-foreground">
                  By proceeding, you agree to the terms and conditions of the fine payment system.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Payment;