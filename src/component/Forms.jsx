import {  Field, ErrorMessage, Form } from "formik"
import Formacao from "./formComponents/Formacao"
import Experiencia from "./formComponents/Experiencia"
import RedesSociais from "./formComponents/RedesSocias"

export default function Forms(){

  
    return (
      <Form>
        <h2>Informações Básicas:</h2>
        <div>
          <label htmlFor="nome">Insira seu nome:</label>
          <Field name="nome" type="text" />
          <ErrorMessage name="nome" className="errorMessage" component="small"/>

          <label htmlFor="cargo">Insira o cargo desejado:</label>
          <Field name="cargo" type="text" />
          <ErrorMessage name="cargo" className="errorMessage"  component="small"/>
        </div>

        <h2>Redes Sociais</h2>
        <RedesSociais />

        <h2>Formacao:</h2>
        <Formacao />

        <h2>Experiencia:</h2>
        <Experiencia />


        <button type="submit">ALERT</button>
      </Form>
    )
}