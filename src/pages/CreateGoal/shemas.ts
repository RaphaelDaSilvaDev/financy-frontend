import zod, { z } from "zod";

export const CreateGoalSchema = zod.object({
  name: zod.string().min(1, { message: "Insira o nome da meta" }),
  color: zod.string().min(1, { message: "Insira uma cor para a meta" }),
  incomeType: zod.string().min(1, { message: "Escolha o tipo de entrada" }),
  incomeValue: zod
    .number({ required_error: "Insira um valor para a entrada" })
    .positive()
    .transform((e) => e.toFixed(2)),
});

export type CreateGoalSchemaType = zod.infer<typeof CreateGoalSchema>;
