// import React, { useContext } from 'react';
// import { When } from 'react-if';

// import { LoginContext } from './context';

// export default function Auth(props) {
//     const { loginStatus, can } = useContext(LoginContext);
//     const conditionAout = useContext(LoginContext);

//   const isLoggedIn = conditionAout.loginStatus;
//   const canDo = props.capability ? can(props.action) : true;
//   const okToRender = isLoggedIn && canDo;

//   return (
//     <When condition={okToRender}>
//       {props.children}
//     </When>
//   );
// };

