import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { toast } from 'sonner@2.0.3';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    productInterest: '',
    quantity: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Frontend-only: Show success message
    toast.success('Thank you for your inquiry!', {
      description: 'We will get back to you within 24 hours.'
    });
    // Reset form
    setFormData({
      name: '',
      country: '',
      productInterest: '',
      quantity: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-[#FAFAF8]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full mb-4">
              Get in Touch
            </div>
            <h2 className="text-gray-900 mb-4">Request a Quote</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Fill out the form below and our team will respond to your inquiry within 24 hours
            </p>
            <div className="w-20 h-1 bg-green-700 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-5 gap-8 md:gap-12">
            {/* Contact Information */}
            <div className="md:col-span-2 space-y-6">
              <div>
                <h3 className="text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100">
                    <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <Mail className="text-green-700" size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Email</div>
                      <a href="mailto:info@freshexport.com" className="text-gray-900 hover:text-green-700">
                        info@freshexport.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100">
                    <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <Phone className="text-green-700" size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Phone</div>
                      <a href="tel:+919876543210" className="text-gray-900 hover:text-green-700">
                        +91 98765 43210
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100">
                    <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <MessageSquare className="text-green-700" size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">WhatsApp</div>
                      <a href="https://wa.me/919876543210" className="text-gray-900 hover:text-green-700">
                        +91 98765 43210
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100">
                    <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <MapPin className="text-green-700" size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Address</div>
                      <div className="text-gray-900">
                        Mumbai, Maharashtra, India
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-gradient-to-br from-green-700 to-green-800 rounded-2xl p-6 text-white">
                <h4 className="mb-4">Business Hours</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/80">Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/80">Saturday</span>
                    <span>9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/80">Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/20 text-sm text-white/90">
                  24/7 emergency support available via WhatsApp
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-3">
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="country">Country *</Label>
                    <Input
                      id="country"
                      name="country"
                      type="text"
                      placeholder="United Arab Emirates"
                      value={formData.country}
                      onChange={handleChange}
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="productInterest">Product Interest *</Label>
                    <select
                      id="productInterest"
                      name="productInterest"
                      value={formData.productInterest}
                      onChange={handleChange}
                      required
                      className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                    >
                      <option value="">Select a product</option>
                      <option value="ginger">Fresh Ginger</option>
                      <option value="onion">Fresh Onions</option>
                      <option value="both">Both Products</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="quantity">Quantity Required *</Label>
                    <Input
                      id="quantity"
                      name="quantity"
                      type="text"
                      placeholder="e.g., 50 tons"
                      value={formData.quantity}
                      onChange={handleChange}
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us more about your requirements..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="mt-2"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-green-700 hover:bg-green-800 text-white py-6 rounded-xl text-lg group"
                  >
                    <Send className="mr-2 group-hover:translate-x-1 transition-transform" size={20} />
                    Send Inquiry
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                    We respect your privacy and will never share your information
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
