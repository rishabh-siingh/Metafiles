import type { Metadata } from "next";
import { Mail, MessageCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input, Label } from "@/components/ui/input";

export const metadata: Metadata = { title: "Contact", description: "Get in touch with the Metafiles team." };

export default function ContactPage() {
  return (
    <div className="container-px mx-auto max-w-container py-16">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <h1 className="font-display text-h1 text-foreground">Get in touch</h1>
          <p className="mt-4 text-body-lg text-muted-foreground">
            Questions about an order, a listing, or a partnership — we usually reply within one business day.
          </p>

          <div className="mt-10 flex flex-col gap-6">
            <div className="flex items-start gap-3.5">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-sm bg-primary-soft text-primary-hover">
                <Mail className="size-5" />
              </span>
              <div>
                <p className="text-body font-medium text-foreground">Email</p>
                <p className="text-small text-muted-foreground">hello@metafiles.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3.5">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-sm bg-primary-soft text-primary-hover">
                <MessageCircle className="size-5" />
              </span>
              <div>
                <p className="text-body font-medium text-foreground">Live chat</p>
                <p className="text-small text-muted-foreground">Available in the Help Center, weekdays</p>
              </div>
            </div>
            <div className="flex items-start gap-3.5">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-sm bg-primary-soft text-primary-hover">
                <Clock className="size-5" />
              </span>
              <div>
                <p className="text-body font-medium text-foreground">Response time</p>
                <p className="text-small text-muted-foreground">Within 1 business day</p>
              </div>
            </div>
          </div>
        </div>

        <form className="flex flex-col gap-5 rounded-xl border border-outline bg-surface-raised p-8">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Jordan Ellis" />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@studio.com" />
          </div>
          <div>
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" placeholder="Order question" />
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <textarea
              id="message"
              rows={5}
              placeholder="How can we help?"
              className="w-full rounded-sm border border-outline bg-surface-sunken px-3.5 py-3 text-body text-foreground placeholder:text-muted-foreground focus-visible:border-primary"
            />
          </div>
          <Button type="submit" size="lg" className="w-full">
            Send message
          </Button>
        </form>
      </div>
    </div>
  );
}
