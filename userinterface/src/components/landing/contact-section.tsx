"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Github, Linkedin, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"
import Link from "next/link"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

export function ContactSection() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We will get back to you soon.",
    })
    form.reset()
  }

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Get in Touch</h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Have questions or want to collaborate? We&apos;d love to hear from you.
          </p>
        </div>
        <div className="mx-auto w-full max-w-4xl mt-8">
            <div className="grid gap-10 lg:grid-cols-2">
                <div className="space-y-4 text-left">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Your Name" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                            <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="your.email@example.com" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                            <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Message</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="Your message..." className="min-h-[120px]" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                            <Button type="submit" variant="default">Send Message</Button>
                        </form>
                    </Form>
                </div>
                 <div className="flex flex-col items-start space-y-4 text-left">
                    <div className="space-y-2">
                        <h3 className="text-xl font-bold">Contact Information</h3>
                        <p className="text-muted-foreground">Feel free to reach out via email or social media.</p>
                    </div>
                    <div className="space-y-2">
                        <p><strong>Email:</strong> <a href="mailto:sushmita.mudinur@gmail.com" className="text-primary underline">sushmita.mudinur@gmail.com</a></p>
                    </div>
                    <div className="flex space-x-4">
                        <Link href="#" className="text-muted-foreground hover:text-primary"><Github className="h-6 w-6" /></Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary"><Linkedin className="h-6 w-6" /></Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary"><Twitter className="h-6 w-6" /></Link>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}
