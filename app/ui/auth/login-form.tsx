'use client';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import {
  KeyIcon,
  EnvelopeIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { useFormState, useFormStatus } from 'react-dom';

import { Button } from '@/app/ui/button';
import { authenticate } from '@/app/lib/actions';
import { StateError } from '@/app/lib/definitions';

export default function LoginForm() {
  const [state, dispatch] = useFormState(authenticate, undefined);
  return (
    <>
      <form action={dispatch} className="">
        <h1
          className={`${lusitana.className} mb-2 border border-b-black p-5 text-center text-4xl text-zinc-800`}
        >
          Login
        </h1>
        <div className="">
          <div className="mb-2">
            <div className="border border-b-black">
              <label htmlFor="email" className="flex items-center p-4">
                <input
                  id="email"
                  className="mr-2 w-full bg-transparent font-serif placeholder-emerald-950 outline-none focus:animate-bounce"
                  type="email"
                  name="email"
                  placeholder="Email address"
                  required
                />
                <EnvelopeIcon className="h-6 w-6 text-sm text-black hover:cursor-pointer  " />
              </label>
            </div>
            {/* <div className="mt-1 text-red-600">
              {errors.email && <span>{errors.email.message as any}</span>}
            </div> */}
          </div>
          <div className="mb-2">
            <div className="border border-b-black">
              <label htmlFor="password" className="flex items-center p-4">
                <input
                  id="password"
                  className="mr-2 w-full bg-transparent font-serif placeholder-emerald-950 outline-none focus:animate-bounce"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
                <KeyIcon className="h-6 w-6 text-sm text-black hover:cursor-pointer " />
              </label>
            </div>
            {/* <div className="mt-1 text-red-600">
              {errors.password && <span>{errors.password.message as any}</span>}
            </div> */}
          </div>
        </div>
        <LoginButton />
        <RegisterButton />
        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {state && (
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{state}</p>
            </>
          )}
        </div>
      </form>
    </>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      className={`mt-8 w-full ${!pending && 'bg-gray-700'}`}
      aria-disabled={pending}
      disabled={pending}
      type="submit"
    >
      {pending ? (
        <p>Loading...</p>
      ) : (
        <>
          <p>Login</p>
          <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
        </>
      )}
    </Button>
  );
}

function RegisterButton() {
  return (
    <Link href={'/register'}>
      <Button className="mt-2 w-full bg-gray-700" type="button">
        Register
        <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
      </Button>
    </Link>
  );
}
