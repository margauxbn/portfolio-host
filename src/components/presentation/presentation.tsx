import "./presentation.css"
import ImgPresentation from "../presentation/imgPresentation/imgPresentation.tsx"
import TitlePresentation from "./titlePresentation/titlePresentation.tsx"

function Presentation() {

  return (
    <>
      <div id="presentation" className="container-presentation">
        <ImgPresentation />
        <TitlePresentation />
      </div>
    </>
  )
}

export default Presentation
