import React from "react";

function Button(props) {
  return (
    <div>
      <a
        onClick={props.onClick}
        href={props.href}
        className='bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent cursor-pointer'>
        {props.children}
      </a>
    </div>
  );
}

export default Button;
