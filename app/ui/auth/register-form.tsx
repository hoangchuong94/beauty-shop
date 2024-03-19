"use client";
import { lusitana } from "@/app/ui/fonts";
import {
  UserIcon,
  EnvelopeIcon,
  KeyIcon,
  ShieldExclamationIcon,
} from "@heroicons/react/24/outline";

import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { Button } from "@/app/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";

const schema = z.object({
  username: z.string().min(3).max(20),
  email: z.string().email(),
  password: z.string().min(6),
  confirmPassword: z.string().min(6),
});

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const handlers = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(handlers)}>
        <h1
          className={`${lusitana.className} p-5 text-4xl text-center text-zinc-800 border border-b-black mb-2`}
        >
          Register
        </h1>
        <div className="">
          <div className="mb-2">
            <div className="border border-b-black">
              <label htmlFor="username" className="flex items-center py-4">
                <input
                  id="username"
                  className="w-full font-serif bg-transparent placeholder-emerald-950 outline-none focus:animate-bounce mr-2"
                  type="text"
                  {...register("username")}
                  placeholder="User name"
                  required
                />
                <UserIcon className="h-6 w-6 text-black text-sm hover:cursor-pointer " />
              </label>
            </div>
            <div className="text-red-600 mt-1">
              {errors.username && <span>{errors.username.message as any}</span>}
            </div>
          </div>
          <div className="mb-2">
            <div className="border border-b-black">
              <label htmlFor="email" className="flex items-center py-4">
                <input
                  id="email"
                  className="w-full font-serif bg-transparent placeholder-emerald-950 outline-none focus:animate-bounce mr-2"
                  type="email"
                  {...register("email")}
                  placeholder="Email address"
                  required
                />
                <EnvelopeIcon className="h-6 w-6 text-black text-sm hover:cursor-pointer " />
              </label>
            </div>
            <div className="text-red-600 mt-1">
              {errors.email && <span>{errors.email.message as any}</span>}
            </div>
          </div>
          <div className="mb-2">
            <div className="border border-b-black">
              <label htmlFor="password" className="flex items-center py-4">
                <input
                  id="password"
                  className="w-full font-serif bg-transparent placeholder-emerald-950 outline-none focus:animate-bounce mr-2"
                  type="password"
                  {...register("password")}
                  placeholder="Password"
                  required
                />
                <KeyIcon className="h-6 w-6 text-black text-sm hover:cursor-pointer " />
              </label>
            </div>
            <div className="text-red-600 mt-1">
              {errors.password && <span>{errors.password.message as any}</span>}
            </div>
          </div>
          <div className="mb-2">
            <div className="border border-b-black">
              <label
                htmlFor="confirmPassword"
                className="flex items-center py-4"
              >
                <input
                  id="confirmPassword"
                  className="w-full font-serif bg-transparent placeholder-emerald-950 outline-none focus:animate-bounce mr-2"
                  type="password"
                  {...register("confirmPassword")}
                  placeholder="Confirm Password"
                  required
                />
                <ShieldExclamationIcon className="h-6 w-6 text-black text-sm hover:cursor-pointer " />
              </label>
            </div>
            <div className="text-red-600 mt-1">
              {errors.confirmPassword && (
                <span>{errors.confirmPassword.message as any}</span>
              )}
            </div>
          </div>
        </div>
        <RegisterButton />
        <LoginButton />
        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {/* {state && (
              <>
                <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                <p className="text-sm text-red-500">{state}</p>
              </>
            )} */}
        </div>
      </form>
    </>
  );
}

function RegisterButton() {
  return (
    <Button className="mt-8 w-full bg-gray-700 " type="submit">
      <>
        Register
        <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
      </>
    </Button>
  );
}

function LoginButton() {
  return (
    <Link href={"/login"}>
      <Button className="mt-2 w-full bg-gray-700 " type="button">
        Login
        <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
      </Button>
    </Link>
  );
}
