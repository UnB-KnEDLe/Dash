import { Sidebar } from "../components/Sidebar";
import Header from "../components/Header";

export default function Search(){
  return(
    <>
      <Sidebar />
      <Header
          title="Pesquisar"
          description="Pesquise por informações sobre os mais diversos atos."
      />
    </>
  )
}