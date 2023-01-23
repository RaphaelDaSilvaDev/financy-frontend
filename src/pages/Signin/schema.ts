import zod from "zod";

export const SigninSchema = zod.object({
  name: zod.string().nonempty({ message: "Insira um nome!" }),
  email: zod.string().email({ message: "Insira um email válido!" }),
  password: zod.string().min(6, { message: "A senha deve ter pelo menos 6 caracteres!" }),
  terms: zod.literal(true, {
    errorMap: () => ({ message: "Você deve aceitar os termos de uso!" }),
  }),
});

export type SigninSchemaType = zod.infer<typeof SigninSchema>;
