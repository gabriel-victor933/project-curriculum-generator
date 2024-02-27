import { Formik } from "formik"
import Forms from "./component/Forms"
import formSchema from "./schemas/formSchemas"

function App() {

  return (
    <Formik
    initialValues={{
      nome: "",
      telefone: "",
      email: "",
      cargo: "",
      objetivo: "",
      redesSociais: [{
        tipo: "",
        link: ""
      }],
      formacoes: [{
        instituicao: "",
        curso: "",
        dataInicial: "",
        dataFinal: ""
      }],
      experiencias: [{
        empresa: "",
        cargo: "",
        dataInicial: "",
        dataFinal: "",
        atividades: "",
      }]
    }}
    onSubmit={(values,actions)=>{
      console.log(actions)
      alert(JSON.stringify(values,null, 2))
    }}
    validationSchema={formSchema}
    >
      <Forms />
    </Formik>
  )
}

export default App
