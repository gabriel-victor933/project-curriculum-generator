import {  Field, ErrorMessage } from "formik"

export default function Localizacao(){
    const estados = [
        "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", 
        "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", 
        "SP", "SE", "TO"
    ]

    return (
        <div>
            <label htmlFor="Cidade">Insira a Cidade:</label>
            <Field name="Cidade" type="text" />
            <ErrorMessage name="Cidade" className="errorMessage" component="small" />

            <label htmlFor="estado">Insira o estado:</label>
            <Field name="estado"  as="select">
                {estados.map((estado, index)=> (<option key={index} value={estado}>{estado}</option>))}
            </Field>
            <ErrorMessage name="estado" className="errorMessage" component="small" />
        </div>
    )
}