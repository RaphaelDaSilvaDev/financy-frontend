import * as zod from "zod";

export const LoginSchema = zod.object({
  email: zod.string().nonempty("Insira o email!").email({ message: "O email deve ser válido!" }),
  password: zod.string().nonempty("Insira a senha"),
});

export type LoginSchemaType = zod.infer<typeof LoginSchema>;
