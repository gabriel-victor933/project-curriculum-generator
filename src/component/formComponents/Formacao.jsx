import { FieldArray, useFormikContext,Field , ErrorMessage } from "formik";

export default function Formacao(){
    const {values} = useFormikContext()
    return (
        <FieldArray
            name="formacoes"
            render={arrayHelpers => (
                <>
                    {values.formacoes.map((formacao,index) => (
                        <div key={index}>

                            <label htmlFor={`formacoes[${index}].instituicao`}>Insira a instituição:</label>
                            <Field name={`formacoes[${index}].instituicao`} type="text" />
                            <ErrorMessage name={`formacoes[${index}].instituicao`} className="errorMessage" component="small" />

                            <label htmlFor={`formacoes[${index}].curso`}>Insira o curso:</label>
                            <Field name={`formacoes[${index}].curso`} type="text" />
                            <ErrorMessage name={`formacoes[${index}].curso`} className="errorMessage" component="small" />

                            <label htmlFor={`formacoes[${index}].dataInicial`}>Insira a data do inicio:</label>
                            <Field name={`formacoes[${index}].dataInicial`} type="date" />
                            <ErrorMessage name={`formacoes[${index}].dataInicial`} className="errorMessage" component="small" />

                            <label htmlFor={`formacoes[${index}].dataFinal`}>Insira a data do fim:</label>
                            <Field name={`formacoes[${index}].dataFinal`} type="date" />
                            <ErrorMessage name={`formacoes[${index}].dataFinal`} className="errorMessage" component="small" />

                            <button type="button" onClick={()=>arrayHelpers.remove(index)}>Remover Formacão</button>
                        </div>
                    ))}
                    <button type="button" onClick={()=> arrayHelpers.push({instituicao: "",curso:"",dataInicial: "",dataFinal:""})}>
                        Adicionar Formação
                    </button>
                </>
            )}
        >    
        </FieldArray>
    )
}