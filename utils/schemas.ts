import { z, ZodSchema } from "zod";

// const  profileSchema = z.string().min(2,{message: "Characters must contain more than 2 characters!!"})
export const profileSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "firstName must more than 2 characters!!" }),
  lastName: z
    .string()
    .min(2, { message: "lastName must more than 2 characters!!" }),
  userName: z
    .string()
    .min(2, { message: "userName must more than 2 characters!!" }),
});

export const landmarkSchema = z.object({
  name: z
    .string()
    .min(2, { message: "firstName must more than 2 characters!!" })
    .max(30, { message: "firstName must be less than 30 characters!!" }),
  category: z.string(),
  description: z
    .string()
    .min(2, { message: "description must more than 2 characters!!" })
    .max(400, { message: "description must be less than 400 characters!!" }),
  price: z.coerce.number().int().min(0, { message: "price must more than 0  " }),
  lat: z.coerce.number(),
  lng: z.coerce.number(),
});

const validateImage = () => {
  const maxFileSize = 1024 * 1024;
  return z.instanceof(File).refine((file) => {
    return file.size <= maxFileSize;
  }, "File size must be less than 1MB");
};
export const ImageSchema = z.object({
  image: validateImage(),
});

export const validateWithZod = <T>(schema: ZodSchema<T>, data: unknown): T => {
  const result = schema.safeParse(data);
  if (!result.success) {
    const errors = result.error?.errors.map((error) => error.message);
    throw new Error(errors.join(","));
  }
  return result.data;
};
