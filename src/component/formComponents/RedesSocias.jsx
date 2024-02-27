import { FieldArray, useFormikContext,Field , ErrorMessage } from "formik";

export default function RedesSociais(){
    const {values} = useFormikContext()
    return (
        <FieldArray
            name="redesSociais"
            render={arrayHelpers => (
                <>
                    {values.redesSociais.map((rede,index) => (
                        <div key={index}>
                            <label htmlFor={`redesSociais[${index}].tipo`}>Insira o tipo:</label>
                            <Field name={`redesSociais[${index}].tipo`} as="select">
                                <option value="Linkedin">Linkedin</option>
                                <option value="Github">Github</option>
                                <option value="outros">Outros</option>
                            </ Field>
                            <ErrorMessage name={`redesSociais[${index}].tipo`} className="errorMessage" component="small" />

                            <label htmlFor={`redesSociais[${index}].link`}>Insira o link:</label>
                            <Field name={`redesSociais[${index}].link`} type="text" />
                            <ErrorMessage name={`redesSociais[${index}].link`} className="errorMessage" component="small" />

                            <button type="button" onClick={()=>arrayHelpers.remove(index)}>Remover Rede Social</button>
                        </div>
                    ))}
                    <button type="button" onClick={()=> arrayHelpers.push({instituicao: "",curso:"",dataInicial: "",dataFinal:""})}>
                        Adicionar Rede Social
                    </button>
                </>
            )}
        >    
        </FieldArray>
    )
}