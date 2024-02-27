import * as yup from "yup"

const formSchema = yup.object({
    nome: yup.string().min(2).max(120).required("Este campo é obrigatório"),
    cargo: yup.string().min(2).max(120).required("Este campo é obrigatório"),
    dataNascimento: yup.date().required("Este campo é obrigatório"),
    estado: yup.string().required(),
    cidade: yup.string().required(),
    email: yup.string().email().required("Este campo é obrigatório"),
    objetivo: yup.string().min(5).max(500).notRequired(),
    redesSociais: yup.array().of(yup.object({
        tipo: yup.mixed().oneOf(["Linkedin","Github","outros"]),
        link: yup.string().url().required("Este campo é obrigatório")
    })),
    formacoes: yup.array().of(yup.object({
        instituicao: yup.string().required("Este campo é obrigatório"),
        curso: yup.string().required("Este campo é obrigatório"),
        dataInicial: yup.date().required("Este campo é obrigatório"),
        dataFinal: yup.date().required("Este campo é obrigatório")
    })).min(1),
    experiencias: yup.array().of(yup.object({
        empresa: yup.string().required("Este campo é obrigatório"),
        cargo: yup.string().required(),
        atividades: yup.string().required("Este campo é obrigatório"),
        dataInicial: yup.date().required("Este campo é obrigatório"),
        dataFinal: yup.date().required("Este campo é obrigatório"),
        
    }))
})

export default formSchema