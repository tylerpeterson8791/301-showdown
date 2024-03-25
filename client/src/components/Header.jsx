import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';




const Header = () => {
  // const userName = useSelector((state) => state.name);
 

  
  return (
    <>
    <Navbar className="bg-green-800 flex w-full" style={{ height: "15%" }}>
      <div className="w-full flex flex-wrap justify-between items-center header-container px-8 press-start">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/game" className="text-white">
            Play!
          </Nav.Link>
        </Nav>
        <div className="flex text-center">
        <Nav.Link as={Link} to="/" className="text-yellow-600">301 SHOWDOWN!</Nav.Link>
        </div>
        
      </div>
    </Navbar>
    </>
  );
};

export default Header;