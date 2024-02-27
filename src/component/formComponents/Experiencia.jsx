import { FieldArray, useFormikContext,Field , ErrorMessage } from "formik";

export default function Experiencia(){
    const {values} = useFormikContext()
    return (
        <FieldArray
            name="experiencias"
            render={arrayHelpers => (
                <>
                    {values.experiencias.map((formacao,index) => (
                        <div key={index}>

                            <label htmlFor={`experiencias[${index}].empresa`}>Insira a empresa:</label>
                            <Field name={`experiencias[${index}].empresa`} type="text" />
                            <ErrorMessage name={`experiencias[${index}].empresa`} className="errorMessage" component="small" />

                            <label htmlFor={`experiencias[${index}].cargo`}>Insira o cargo:</label>
                            <Field name={`experiencias[${index}].cargo`} type="text" />
                            <ErrorMessage name={`experiencias[${index}].cargo`} className="errorMessage" component="small" />

                            <label htmlFor={`experiencias[${index}].atividades`}>Insira o atividades:</label>
                            <Field name={`experiencias[${index}].atividades`} type="text" />
                            <ErrorMessage name={`experiencias[${index}].atividades`} className="errorMessage" component="small" />

                            <label htmlFor={`experiencias[${index}].dataInicial`}>Insira a data do inicio:</label>
                            <Field name={`experiencias[${index}].dataInicial`} type="date" />
                            <ErrorMessage name={`experiencias[${index}].dataInicial`} className="errorMessage" component="small" />

                            <label htmlFor={`experiencias[${index}].dataFinal`}>Insira a data do fim:</label>
                            <Field name={`experiencias[${index}].dataFinal`} type="date" />
                            <ErrorMessage name={`experiencias[${index}].dataFinal`} className="errorMessage" component="small" />

                            <button type="button" onClick={()=>arrayHelpers.remove(index)}>Remover experiência</button>
                        </div>
                    ))}
                    <button type="button" onClick={()=> arrayHelpers.push({instituicao: "",curso:"",dataInicial: "",dataFinal:""})}>
                        Adicionar experiência
                    </button>
                </>
            )}
        >    
        </FieldArray>
    )
}