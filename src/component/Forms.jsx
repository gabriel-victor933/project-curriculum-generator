import {  Field, Form } from "formik"

export default function Forms(){
    return (
        <Form>
        <label htmlFor="nome">Insira seu nome:</label>
        <Field name="nome" type="text" />

        <label htmlFor="cargo">Insira o cargo desejado:</label>
        <Field name="cargo" type="text" />

        <button type="submit">ALERT</button>
      </Form>
    )
}