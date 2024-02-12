import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-center my-8">
      <p className="px-8 text-center text-sm text-muted-foreground w-80">
        By clicking continue, you agree to our{" "}
        <a
          className="underline underline-offset-4 hover:text-primary"
          href="/terms"
        >
          Terms of Service
        </a>{" "}
        and{" "}
        <a
          className="underline underline-offset-4 hover:text-primary"
          href="/privacy"
        >
          Privacy Policy
        </a>
        .
      </p>
    </div>
  );
};

export default Footer;
