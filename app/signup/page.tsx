"use client";
// Importing validation stuff
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

// Importing UI stuff
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import BrandHead from "@/components/Theme/BrandHead";
import Footer from "@/components/login/Footer";
import { AlreadyRegistered } from "@/components/signup/AlreadyRegistered";

const formSchema = z
  .object({
    email: z
      .string()
      .email({ message: "Please enter a valid email address" })
      .trim(),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" })
      .trim(),
    confirmPassword: z
      .string()
      .min(6, { message: "Confirm Password must be at least 6 characters" })
      .trim(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const page = () => {
  // Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (values.password !== values.confirmPassword) {
      // Handle password mismatch error
      return;
    }
    // Do something with the form values.
    // This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div>
      <BrandHead />
      <h2 className="text-3xl text-center font-bold tracking-tighter my-10 uppercase">
        Sign up
      </h2>
      <div className="flex justify-center w-full">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 sm:min-w-72"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    We'll never share your email.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Confirm your password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="h-8" type="submit">
              Submit
            </Button>
          </form>
        </Form>
      </div>
      <AlreadyRegistered />
      <Footer />
    </div>
  );
};

export default page;
