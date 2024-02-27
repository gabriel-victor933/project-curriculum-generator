import { Formik } from "formik"
import {  Packer } from "docx";
import { saveAs } from "file-saver";

import Forms from "./component/Forms"
import formSchema from "./schemas/formSchemas"
import gerarDocs from "./services/gerarDocs";

function App() {

  return (
    <Formik
    initialValues={{
      nome: "",
      telefone: "",
      dataNascimento: "",
      email: "",
      cidade: "",
      estado: "SP",
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
    onSubmit={(values)=>{
      const doc = gerarDocs(values)

      Packer.toBlob(doc).then((blob)=>{
        saveAs(blob,"resume.docx")
      })
    }}
    validationSchema={formSchema}
    >
      <Forms />
    </Formik>
  )
}

export default App
