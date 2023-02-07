import zod, { boolean } from "zod";

export const CreateGoalSchema = zod.object({
  name: zod.string().min(1, { message: "Insira o nome da meta" }),
  color: zod
    .string({ required_error: "Insira uma cor para a meta" })
    .min(1, { message: "Insira uma cor para a meta" }),
  income_type: zod.string().min(1, { message: "Escolha o tipo de entrada" }),
  income_value: zod.coerce
    .number({ required_error: "Insira um valor para a entrada" })
    .min(1, { message: "Insira um valor para a entrada maior que 0" })
    .transform((e) => (e ? Number(e).toFixed(2) : "")),
  end_by: zod.string({ required_error: "Escolha uma finalização para a meta" }),
  end_by_value: zod.coerce.number().min(1, { message: "Insira uma finalização maior que 0" }),
  finishedGoal: zod.coerce.boolean().optional(),
});

export type CreateGoalSchemaType = zod.infer<typeof CreateGoalSchema>;
