"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/Button";
import { CheckIcon, ArrowRightIcon } from "@/components/ui/Icons";
import {
  contactSchema,
  serviceOptions,
  type ContactInput,
} from "@/components/contact/contactSchema";
import { cn } from "@/lib/utils";

type FormStatus = "idle" | "submitting" | "success" | "error";

type FieldProps = {
  label: string;
  htmlFor: string;
  error?: string;
  hint?: string;
  required?: boolean;
  children: React.ReactNode;
};

function Field({ label, htmlFor, error, hint, required, children }: FieldProps) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 flex items-center justify-between text-sm font-medium text-navy-900"
      >
        <span>
          {label}
          {required && <span className="ml-1 text-accent-600">*</span>}
        </span>
        {hint && <span className="text-xs text-steel-400">{hint}</span>}
      </label>
      {children}
      <AnimatePresence initial={false}>
        {error && (
          <motion.p
            key={error}
            initial={{ opacity: 0, y: -4, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -4, height: 0 }}
            transition={{ duration: 0.2 }}
            className="mt-1.5 text-xs font-medium text-red-600"
            role="alert"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

const inputBase =
  "block w-full rounded-xl border border-steel-200 bg-white px-4 py-3 text-sm text-navy-900 placeholder-steel-400 transition-colors focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20";

const errorInput = "border-red-400 focus:border-red-500 focus:ring-red-500/20";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      service: "construction",
      message: "",
    },
  });

  async function onSubmit(data: ContactInput) {
    setStatus("submitting");
    try {
      // TODO: wire up to a server action or API route
      // e.g. await submitContactAction(data)
      await new Promise((r) => setTimeout(r, 1100));
      console.info("Contact form submission:", data);
      setStatus("success");
      reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-2xl border border-accent-500/30 bg-accent-500/5 p-10 text-center"
        role="status"
      >
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent-500 text-navy-900">
          <CheckIcon className="h-6 w-6" />
        </div>
        <h3 className="mt-5 text-2xl font-bold text-navy-900">
          Thanks — we got it.
        </h3>
        <p className="mt-3 text-pretty text-sm text-steel-600">
          A member of our team will be in touch within one business day. In the
          meantime, feel free to call us directly on the number to the right.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-accent-600 underline-offset-4 hover:underline"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <motion.form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-5"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Full name"
          htmlFor="name"
          error={errors.name?.message}
          required
        >
          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder="Jane Mokoena"
            aria-invalid={!!errors.name}
            className={cn(inputBase, errors.name && errorInput)}
            {...register("name")}
          />
        </Field>

        <Field
          label="Company"
          htmlFor="company"
          error={errors.company?.message}
          hint="Optional"
        >
          <input
            id="company"
            type="text"
            autoComplete="organization"
            placeholder="Mokoena Developments"
            aria-invalid={!!errors.company}
            className={cn(inputBase, errors.company && errorInput)}
            {...register("company")}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Email"
          htmlFor="email"
          error={errors.email?.message}
          required
        >
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            aria-invalid={!!errors.email}
            className={cn(inputBase, errors.email && errorInput)}
            {...register("email")}
          />
        </Field>

        <Field
          label="Phone"
          htmlFor="phone"
          error={errors.phone?.message}
          hint="Optional"
        >
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+27 11 000 0000"
            aria-invalid={!!errors.phone}
            className={cn(inputBase, errors.phone && errorInput)}
            {...register("phone")}
          />
        </Field>
      </div>

      <Field
        label="Service of interest"
        htmlFor="service"
        error={errors.service?.message}
        required
      >
        <select
          id="service"
          aria-invalid={!!errors.service}
          className={cn(inputBase, "pr-10", errors.service && errorInput)}
          {...register("service")}
        >
          {serviceOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </Field>

      <Field
        label="Tell us about your project"
        htmlFor="message"
        error={errors.message?.message}
        hint={`${`Max 2000 characters`}`}
        required
      >
        <textarea
          id="message"
          rows={5}
          placeholder="Site location, scope, approximate budget and timeline — anything you can share helps us respond faster."
          aria-invalid={!!errors.message}
          className={cn(inputBase, "resize-y", errors.message && errorInput)}
          {...register("message")}
        />
      </Field>

      <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
        <p className="text-xs text-steel-500">
          By submitting, you agree to be contacted about your enquiry.
        </p>
        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting || status === "submitting"}
          className="min-w-[180px]"
        >
          {status === "submitting" ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-navy-900/30 border-t-navy-900" />
              Sending…
            </>
          ) : (
            <>
              Send message
              <ArrowRightIcon className="h-4 w-4" />
            </>
          )}
        </Button>
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600" role="alert">
          Something went wrong. Please try again, or call us directly.
        </p>
      )}
    </motion.form>
  );
}
