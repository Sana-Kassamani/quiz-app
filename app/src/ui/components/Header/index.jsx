import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((state) => state.users);

  return (
    <div className="flex space-between pd-20">
      <h3>{user.name}</h3>
      <h3>Score :{user.score}</h3>
    </div>
  );
};
export default Header;
