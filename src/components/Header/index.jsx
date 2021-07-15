import { ContainerHeader } from "./style";
import imgUser from "../../assets/icone usuario.png";
import { BiWallet, BiSearch } from "react-icons/bi";
import { IconContext } from "react-icons";
import { useUsers } from "../../providers/Users";
import { useEffect } from "react";

const Header = () => {
  const { user, handleUser } = useUsers();
  useEffect(() => {
    handleUser();
  }, []);

  return (
    <ContainerHeader>
      <div className="inputContainer">
        <div className="input">
          <span className="search">
            <IconContext.Provider value={{ size: "28px" }}>
              <BiSearch />
            </IconContext.Provider>
          </span>
          <input type="text" placeholder="Procurar Curso" />
        </div>
      </div>
      <div className="profileContainer">
        <div className="icon">
          <span>
            <IconContext.Provider value={{ size: "30px" }}>
              <BiWallet />
            </IconContext.Provider>
          </span>
        </div>
        <div className="name">
          {user.isStudent ? (
            <h2>{user.name}</h2>
          ) : user.name ? (
            <h2>Prof {user.surname}</h2>
          ) : (
            <h2>Username</h2>
          )}
        </div>
        <div className="imgContainer">
          <img src={imgUser} alt="" />
        </div>
      </div>
    </ContainerHeader>
  );
};

export default Header;
