import {  Field, FieldArray, Form, useFormikContext } from "formik"

export default function Forms(){

  const {values,errors} = useFormikContext()
  console.log(values)
  console.log(errors)
  
    return (
      <Form>
        <div>
          <label htmlFor="nome">Insira seu nome:</label>
          <Field name="nome" type="text" />


          <label htmlFor="cargo">Insira o cargo desejado:</label>
          <Field name="cargo" type="text" />
        </div>
        <h2>FORMAÇÃO:</h2>

        <FieldArray
          name="formacoes"
          render={arrayHelpers => (
            <div >
              {values.formacoes.map((formacao, index) => (
                
                <div key={index}>
                  
                  <label htmlFor={`formacoes[${index}].curso`}>Curso:</label>
                  <Field name={`formacoes[${index}].curso`} type="text" />
                  <label htmlFor={`formacoes[${index}].instituicao`}>Instituição:</label>
                  <Field name={`formacoes[${index}].instituicao`} type="text" />

                  <button type="button" onClick={()=>arrayHelpers.remove(index)}>
                      Remover formação
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => arrayHelpers.push({ curso: '', instituicao: '' })}
              >
                +
              </button>
            </div>
          )}
          >

        </FieldArray>


        <button type="submit">ALERT</button>
      </Form>
    )
}