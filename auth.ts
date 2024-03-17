import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import google from "next-auth/providers/google";
import github from "next-auth/providers/github";
import facebook from "next-auth/providers/facebook";
import prisma from "@/app/lib/prisma/prisma";
import bcrypt from "bcryptjs";
import NextAuth from "next-auth";
import { UserAuth } from "@/app/lib/definitions";

export const { handlers, auth, signIn, signOut } = NextAuth({
  pages: {
    signIn: "/login",
  },
  session: { strategy: "jwt" },
  adapter: PrismaAdapter(prisma),
  providers: [
    facebook,
    github,
    google,
    CredentialsProvider({
      name: "Sign in",
      id: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }
        const user = await prisma.user.findUnique({
          where: {
            email: String(credentials.email),
          },
          include: {
            roles: {
              select: {
                role: true,
              },
            },
          },
        });
        if (
          !user ||
          !(await bcrypt.compare(String(credentials.password), user.password!))
        ) {
          return null;
        }
        const randomKey = "Hey cool";
        const roles = user.roles.map((role) => role.role.name);
        return { ...user, randomKey, roles } as UserAuth;
      },
    }),
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
    authorized({ auth, request: { nextUrl } }) {
      console.log("auh");
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false;
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/dashboard", nextUrl));
      }
      return true;
    },
    session: async ({ session, token }) => {
      const data = {
        ...session,
        user: {
          ...session.user,
          id: token.id as string,
          randomKey: token.randomKey as string,
          roles: token.roles as string[],
        },
      };
      return data;
    },
    jwt: async ({ token, user }) => {
      if (user) {
        const u = user as unknown as any;
        return {
          ...token,
          id: u.id as string,
          randomKey: u.randomKey as string,
          roles: u.roles as string[],
        };
      }
      return token;
    },
  },
});
