"use client";
//importing validation stuff
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

//importing ui stuff
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
import OrDivider from "@/components/login/OrDivider";
import Image from "next/image";
import Footer from "@/components/login/Footer";
import { useRouter } from "next/navigation";

// importing auth stuff
import { GoogleAuthProvider, getRedirectResult } from "firebase/auth";
import { getAuth, signInWithRedirect } from "firebase/auth";
import { app } from "@/Firebase/Firebase";
import { useEffect } from "react";
const provider = new GoogleAuthProvider();

const formSchema = z.object({
  email: z
    .string()
    .email({ message: "Please enter a valid email address" })
    .trim(),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" })
    .trim(),
});

const page = () => {
  const router = useRouter();
  const auth = getAuth(app);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    router.push("/complete-profile");
  }

  const LoginWithGoogle = () => {
    signInWithRedirect(auth, provider);
  };

  return (
    <div>
      <BrandHead />
      <h2 className="text-4xl text-center font-bold tracking-tighter my-16 space-x-2">
        Welcome Back <span>👋</span>
      </h2>
      <h2 className="text-3xl text-center font-bold tracking-tighter my-4">
        Login
      </h2>
      <div className="flex justify-center w-full">
        {" "}
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
                    <Input placeholder="Enter your email" {...field} />
                  </FormControl>
                  <FormDescription>
                    We&apos;ll never share your email.
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
            <Button className=" h-8" type="submit">
              Submit
            </Button>
          </form>
        </Form>
      </div>
      <OrDivider />
      {/*google sign in  */}
      <div className="flex justify-center items-center space-x-2">
        <div
          onClick={LoginWithGoogle}
          className="border-[2px] transition-all hover:border-white border-gray-500 h-10 w-32 rounded-lg grid place-content-center cursor-pointer"
        >
          <Image
            className=" z-10"
            src="/google.svg"
            height={30}
            width={30}
            alt="google logo"
          />
        </div>
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
};
export default page;
