import { z } from "zod";

export const menuSchema = z.object({
  Caseira: z.array(z.string()), 
  "Lanches Ceia": z.array(z.string()), 
});