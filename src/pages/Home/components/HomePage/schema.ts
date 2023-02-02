import zod from "zod";

export const EntrySchema = zod.object({
  income: zod.preprocess(
    (a) => parseInt(zod.string().parse(a), 10),
    zod
      .number({
        required_error: "Insira um valor para a receita",
        invalid_type_error: "Insira um valor para a receita",
      })
      .nonnegative({ message: "Insira um valor positivo para a receita" })
  ),
  outcome: zod.preprocess(
    (a) => parseInt(zod.string().parse(a), 10),
    zod
      .number({
        required_error: "Insira um valor para a despesa",
        invalid_type_error: "Insira um valor para a despesa",
      })
      .nonnegative({ message: "Insira um valor positivo para a despesa" })
  ),
});

export type EntrySchemaType = zod.infer<typeof EntrySchema>;
