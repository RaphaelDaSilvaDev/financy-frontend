import zod from "zod";

export const UserSchema = zod.object({
  name: zod.string().optional(),
  password: zod
    .union([
      zod.string(),
      zod.string().min(6, { message: "A senha deve ter pelo menos 6 caracteres" }),
    ])
    .optional()
    .transform((e) => (e === "" ? undefined : e)),
});

export type UserSchemaType = zod.infer<typeof UserSchema>;
