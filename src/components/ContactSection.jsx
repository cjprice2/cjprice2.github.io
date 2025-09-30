import {
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Send,
    Github
  } from "lucide-react";
  import { cn } from "@/lib/utils";
  import { useToast } from "@/hooks/use-toast";
  import { useState, useRef } from "react";
  import emailjs from "@emailjs/browser";
  
  export const ContactSection = () => {
    const formRef = useRef(null);
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
  
      try {
        // 1) Send notification to site owner
        await emailjs.sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_NOTIFY_TEMPLATE_ID,
          formRef.current,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );
  
        // 2) Send auto-reply to visitor
        await emailjs.sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID,
          formRef.current,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );
  
        toast({
          title: "Message sent!",
          description: "Thanks for reaching out! I'll get back to you soon.",
        });
      } catch (error) {
        console.error(error);
        toast({
          variant: "destructive",
          title: "Uh-oh, something failed",
          description: "Please try again later.",
        });
      } finally {
        setIsSubmitting(false);
      }
    };
    return (
      <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Get In <span className="text-primary"> Touch</span>
          </h2>
  
          <p className="text-center text-foreground mb-12 max-w-3xl mx-auto">
            I'm always excited to connect with new people and explore interesting opportunities. 
            Whether you have a project idea, want to chat about tech, or share something interesting, feel free to reach out!
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="glass-card space-y-8">
              <h3 className="text-2xl font-semibold mb-6">
                {" "}
                Contact Information
              </h3>
  
              <div className="space-y-6 justify-center items-center">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />{" "}
                  </div>
                  <div className="text-left flex-1 min-w-0">
                    <h4 className="font-medium"> Email</h4>
                    <a
                      href="mailto:colinjamesprice04@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors text-xs xs:text-sm sm:text-base"
                    >
                      colinjamesprice04@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />{" "}
                  </div>
                  <div className="text-left">
                    <h4 className="font-medium"> Phone</h4>
                    <a
                      href="tel:+19206328637"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +1 (920) 632-8637
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />{" "}
                  </div>
                  <div className="text-left">
                    <h4 className="font-medium"> Location</h4>
                    <a className="text-muted-foreground hover:text-primary transition-colors">
                      Madison, WI, USA
                    </a>
                  </div>
                </div>
              </div>
  
              <div className="pt-8">
                <h4 className="font-medium mb-4"> Connect With Me</h4>
                <div className="flex space-x-4 justify-center">
                  <a href="https://www.linkedin.com/in/colinprice04" target="_blank">
                    <Linkedin />
                  </a>
                  <a href="https://github.com/cjprice2" target="_blank">
                    <Github />
                  </a>
                </div>
              </div>
            </div>
  
            <div className="glass-card">
              <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>
  
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    {" "}
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                    placeholder="Your full name"
                  />
                </div>
  
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    {" "}
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                    placeholder="your.email@example.com"
                  />
                </div>
  
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    {" "}
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
                    placeholder="Hello! I'm reaching out about..."
                  />
                </div>
  
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "nice-button w-full flex items-center justify-center gap-2"
                  )}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  };