import * as yup from "yup"

const formSchema = yup.object({
    nome: yup.string().required(),
    telefone: yup.number().min(10).max(11).required(),
    email: yup.string().email().required(),
    cargo: yup.string().required(),
    objetivo: yup.string().optional(),
    formacao: yup.array().of(yup.object({
        
    })),
    experiencia: yup.array().of(yup.object({})),
})

export default formSchema