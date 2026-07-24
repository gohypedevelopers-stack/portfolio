import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ShineBorder } from "@/components/magicui/shine-border";
import { toast, Toaster } from "sonner";
import { ShinyButton } from "@/components/magicui/shiny-button";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("All fields are required.");
      return;
    }

    setIsSubmitting(true);
    setIsSent(false);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_BACKEND_URL}/api/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (data.success) {
        toast.success("Message sent successfully!", {
          description: "You will be hearing from me soon."
        });
        setFormData({ name: "", email: "", message: "" });
        setIsSent(true);
        setTimeout(() => setIsSent(false), 2000);
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="contact-form-section"
      className="flex flex-col items-center justify-center bg-black py-10"
    >
      {/* Mount Toaster */}
      <Toaster richColors position="top-right" />

      <div className="relative overflow-hidden w-[92%] bg-black rounded-lg p-8 space-y-8 my-8">
        <ShineBorder
          borderWidth={1.5}
          duration={10}
          shineColor={["#be57ff", "#8500f5", "#f8dfff"]}
          className="rounded-lg"
        />

          <div className="space-y-4 relative z-10">
            <h1 className="text-4xl font-semibold tracking-tight text-gray-100">Hey there 👋</h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Got a project in mind? I’m all ears! Whether you're dreaming big or starting small <br />
              let’s connect and build something awesome together.
            </p>
          </div>


        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          <div className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label htmlFor="name" className="text-base font-medium text-gray-300">
                  Your Name
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="h-12 text-base bg-black border-gray-700 text-white focus-visible:ring-[#8500f5] focus-visible:ring-1"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-base font-medium text-gray-300">
                  Your Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your-email@email.com"
                  className="h-12 text-base bg-black border-gray-700 text-white focus-visible:ring-[#8500f5] focus-visible:ring-1"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-base font-medium text-gray-300">
                Your Message
              </label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                className="min-h-[160px] text-base bg-black border-gray-700 text-white focus-visible:ring-[#8500f5] focus-visible:ring-1"
                required
              />
            </div>
          </div>

          <ShinyButton
            type="submit"
            disabled={isSubmitting || isSent}
            className="w-full!"
          >
            {isSent
              ? "Message Sent"
              : isSubmitting
                ? "Sending..."
                : "Send Message"}
          </ShinyButton>
        </form>
      </div>
    </div>
  );
}
