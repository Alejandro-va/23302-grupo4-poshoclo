import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";

function BarraLogin() {
  return (
    <>
       <div className="text-end mt-3 m-1">
       <Link to={`/LoginPelis`}><Button  variant="primary" size="lg"  className="p-2 m-1">
        Inicial Sesión
      </Button>{' '}</Link>
      <Button  variant="light" size="lg" className="p-2 m-1">
        Registrarse
      </Button>
      </div>
    </>
  );
}

export default BarraLogin;