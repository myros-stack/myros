import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-semibold tracking-tight">
            Reset your password
          </CardTitle>
          <CardDescription>
            Enter your email address and we&apos;ll send you a password reset link
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              required
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button className="w-full bg-ink hover:bg-ink/90">
            Send Reset Link
          </Button>
          <div className="text-center text-sm text-muted">
            Remember your password?{" "}
            <Link
              href="/login"
              className="font-medium text-ink hover:underline"
            >
              Sign in
            </Link>
          </div>
          <div className="text-center">
            <Link
              href="/"
              className="text-sm text-muted hover:text-ink transition-colors"
            >
              ← Back to home
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}