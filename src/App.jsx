import { Formik, Field, Form } from "formik"

function App() {

  return (
    <Formik
    initialValues={{
      nome: "",
      cargo: ""
    }}
    onSubmit={(values,actions)=>{
      console.log(actions)
      alert(JSON.stringify(values,null, 2))
    }}
    >
      <Form>
        <label htmlFor="nome">Insira seu nome:</label>
        <Field name="nome" type="text" />

        <label htmlFor="cargo">Insira o cargo desejado:</label>
        <Field name="cargo" type="text" />

        <button type="submit">ALERT</button>
      </Form>
    </Formik>
  )
}

export default App
