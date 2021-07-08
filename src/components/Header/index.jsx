import { ContainerHeader } from "./style"
import imgUser from "../../assets/icone usuario.png"
import { BiWallet, BiSearch } from "react-icons/bi"
import { IconContext } from "react-icons"


const Header = () => {
  return(
    <ContainerHeader>
      
      <div className="inputContainer">
        <div className="input">
        <span className="search">
            <IconContext.Provider value={{size: "28px"}}>
              <BiSearch/>
            </IconContext.Provider>
          </span>
        <input type="text" placeholder="Search Groups"/>
        </div>
      </div>
      <div className="profileContainer">
        <div className="icon">
          <span>
            <IconContext.Provider value={{size: "30px"}}>
            <BiWallet/>
            </IconContext.Provider>
            
          </span>
        </div>
        <div className="name">
          <p>Prof Jubileu</p>
        </div>
        <div className="imgContainer">
          <img src={imgUser} alt="" />
        </div>
      </div>
    </ContainerHeader>
  )
}


export default Header