import { Typography } from "@mui/material";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((state) => state.users);

  return (
    <div className="flex space-between pd-20">
      <Typography variant="h4"> {user.name}</Typography>
      <Typography variant="h4">Score: {user.score}</Typography>
    </div>
  );
};
export default Header;
