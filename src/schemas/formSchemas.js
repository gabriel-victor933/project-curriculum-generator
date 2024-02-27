import * as yup from "yup"

const formSchema = yup.object({
    nome: yup.string().min(2).max(120).required(),
    cargo: yup.string().min(2).max(120).required(),
    email: yup.string().email().required(),
    objetivo: yup.string().min(5).max(500).notRequired(),
    redesSociais: yup.array().of(yup.object({
        tipo: yup.oneOf(["Linkedin","Github","outros"]),
        link: yup.string().url().required()
    })),
    formacoes: yup.array().of(yup.object({
        instituicao: yup.string().required(),
        curso: yup.string().required(),
        dataInicial: yup.date(),
        dataFinal: yup.date()
    })).min(1),
    experiencias: yup.array().of(yup.object({
        empresa: yup.string().required(),
        dataInicial: yup.date().required(),
        dataFinal: yup.date().required(),
        atividades: yup.string().required(),
    }))
})

export default formSchema