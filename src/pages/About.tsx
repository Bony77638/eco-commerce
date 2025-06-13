
import { Link } from "react-router-dom";
import { ArrowLeft, Award, Truck, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Quality Products",
      description: "We carefully curate our products to ensure the highest quality and value for our customers."
    },
    {
      icon: Truck,
      title: "Fast Shipping",
      description: "Free shipping on orders over $50 with express delivery options available."
    },
    {
      icon: Shield,
      title: "Secure Shopping",
      description: "Your personal and payment information is protected with industry-leading security."
    },
    {
      icon: Users,
      title: "Customer Support",
      description: "Our dedicated support team is here to help you with any questions or concerns."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center mb-6">
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">About ShopHub</h1>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Your Trusted Online Shopping Destination
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Since 2020, ShopHub has been committed to providing customers with an exceptional 
            online shopping experience. We believe that great products and outstanding service 
            should be accessible to everyone.
          </p>
          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop"
            alt="Our team"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why Choose ShopHub?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <feature.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  ShopHub was founded with a simple mission: to make quality products 
                  accessible to everyone through a seamless online shopping experience. 
                  What started as a small team's vision has grown into a trusted platform 
                  serving thousands of satisfied customers.
                </p>
                <p>
                  We believe that shopping should be enjoyable, not stressful. That's why 
                  we've carefully designed every aspect of our platform to be user-friendly, 
                  secure, and efficient. From our curated product selection to our responsive 
                  customer service, everything we do is focused on your satisfaction.
                </p>
                <p>
                  Today, we continue to innovate and expand our offerings while staying 
                  true to our core values of quality, affordability, and exceptional service.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop"
                alt="Our warehouse"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Quality</h4>
              <p className="text-gray-600">
                We never compromise on quality. Every product is carefully selected 
                and tested to meet our high standards.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Trust</h4>
              <p className="text-gray-600">
                Building lasting relationships with our customers through transparency, 
                reliability, and exceptional service.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h4>
              <p className="text-gray-600">
                Continuously improving our platform and services to provide the best 
                possible shopping experience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
