"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Phone } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "O nome deve ter pelo menos 2 caracteres."),
  email: z.string().email("Por favor, insira um email válido."),
  phone: z.string().optional(),
  message: z.string().min(10, "A mensagem deve ter pelo menos 10 caracteres."),
});

export function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Mensagem Enviada!",
      description: "Obrigado por entrar em contato. Retornaremos em breve.",
    });
    form.reset();
  }

  return (
    <section id="contato" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-headline font-extrabold text-secondary mb-4">
            Fale Conosco
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
            Tem alguma dúvida ou quer um orçamento personalizado? Preencha o formulário abaixo ou entre em contato pelos nossos canais.
            </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <MessageSquare className="text-primary"/>
                        Envie uma Mensagem
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Nome</FormLabel>
                            <FormControl>
                                <Input placeholder="Seu nome completo" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <div className="grid sm:grid-cols-2 gap-6">
                            <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="seu@email.com" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                            <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Telefone (Opcional)</FormLabel>
                                <FormControl>
                                    <Input placeholder="(00) 90000-0000" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                        </div>
                        <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Mensagem</FormLabel>
                            <FormControl>
                                <Textarea
                                placeholder="Como podemos ajudar?"
                                className="min-h-[120px]"
                                {...field}
                                />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <Button type="submit" size="lg" className="w-full">Enviar Mensagem</Button>
                    </form>
                    </Form>
                </CardContent>
            </Card>

            <div className="space-y-8">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Phone className="text-primary"/>
                            Outros Canais
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-secondary">
                        <p><strong>Telefone/WhatsApp:</strong> <a href="tel:+5516997864805" className="hover:text-primary">(16) 99786-4805</a></p>
                        <p><strong>Email:</strong> <a href="mailto:nilotravesseiros@gmail.com" className="hover:text-primary">nilotravesseiros@gmail.com</a></p>
                        <p><strong>Endereço:</strong> Itápolis - SP, Brasil</p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            Horário de Atendimento
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="text-secondary">
                        <p>Segunda a Sexta: 08:00 - 18:00</p>
                        <p>Sábado: 08:00 - 12:00</p>
                    </CardContent>
                </Card>
            </div>
        </div>
      </div>
    </section>
  );
}
