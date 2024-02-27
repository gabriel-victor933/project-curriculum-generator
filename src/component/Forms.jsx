import {  Field, ErrorMessage, Form } from "formik"
import Formacao from "./formComponents/Formacao"
import Experiencia from "./formComponents/Experiencia"
import RedesSociais from "./formComponents/RedesSocias"
import Localizacao from "./formComponents/Localizacao"

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

          <label htmlFor="dataNascimento">Insira a data de nascimento:</label>
          <Field name="dataNascimento" type="date" />
          <ErrorMessage name="dataNascimento" className="errorMessage"  component="small"/>

          <label htmlFor="email">Insira o email:</label>
          <Field name="email" type="text" />
          <ErrorMessage name="email" className="errorMessage"  component="small"/>


          <label htmlFor="objetivo">Insira o objetivo:</label>
          <Field name="objetivo" type="text" />
          <ErrorMessage name="objetivo" className="errorMessage"  component="small"/>
        </div>
      
        <Localizacao />

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