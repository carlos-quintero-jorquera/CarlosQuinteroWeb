import React from 'react';

import {
  Link
} from "react-router-dom";

function NavergadorRouter() {
  return (
    <div>
     <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/otro">Otro</Link>
            </li>
          </ul>
        </nav>
    </div>
  );
}

export default NavergadorRouter;

