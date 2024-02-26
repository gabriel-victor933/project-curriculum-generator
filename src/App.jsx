import { Formik } from "formik"
import Forms from "./component/Forms"

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
    validationSchema={null}
    >
      <Forms />
    </Formik>
  )
}

export default App
