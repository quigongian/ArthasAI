"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import page from "../page";
import { loginSchema } from "../utils/forms/zodTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { createClient } from "../utils/supabase/client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import { navigate } from "./actions";
import Reader from "../document/[doc]/reader";

function Login() {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    values: {
      email: "",
      password: "",
    },
  });

  const supabase = createClient();

  const onSubmit = async (data: z.infer<typeof loginSchema>) => {
    console.log(data);
    await supabase.auth
      .signInWithPassword({
        email: data.email,
        password: data.password,
      })
      .then((response) => {
        if (response.error) {
          console.log(response.error);
        } else {
          navigate();
        }
      });
  };

  return (
    <div>
      <Reader/>
    </div>
  );
}

export default Login;
