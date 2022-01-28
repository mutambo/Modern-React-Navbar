import React, {useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import '../Navbar.css';
import $ from 'jquery';
const Navbar = () => {
  function animation () {
    var tabsNewAnim = $ ('#navbarSupportedContent');
    var activeItemNewAnim = tabsNewAnim.find ('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight ();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth ();
    var itemPosNewAnimTop = activeItemNewAnim.position ();
    var itemPosNewAnimLeft = activeItemNewAnim.position ();
    $ ('.hori-selector').css ({
      top: itemPosNewAnimTop.top + 'px',
      left: itemPosNewAnimLeft.left + 'px',
      height: activeWidthNewAnimHeight + 'px',
      width: activeWidthNewAnimWidth + 'px',
    });
    $("#navbarSupportedContent").on("click","li",function(e){
        $('#navbarSupportedContent ul li').removeClass("active");
        $(this).addClass('active');
        var activeWidthNewAnimHeight = $(this).innerHeight();
        var activeWidthNewAnimWidth = $(this).innerWidth();
        var itemPosNewAnimTop = $(this).position();
        var itemPosNewAnimLeft = $(this).position();
        $(".hori-selector").css({
          "top":itemPosNewAnimTop.top + "px", 
          "left":itemPosNewAnimLeft.left + "px",
          "height": activeWidthNewAnimHeight + "px",
          "width": activeWidthNewAnimWidth + "px"
        });
      });
  }
    useEffect(() => {
      animation();
      $(window).on('resize', function(){
        setTimeout(function(){ test(); }, 500);
      });
    }, []);
  return (
    <nav className="navbar navbar-expand-lg navbar-mainbg">
      <NavLink className="navbar-brand navbar-logo" to="/" exact>
        Web solutions
      </NavLink>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars text-white" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <div className="hori-selector">
            <div className="left" />
            <div className="right" />
          </div>

          <li className="nav-item active">
            <NavLink className="nav-link" to="/" exact>
              <i className="fas fa-tachometer-alt" /> Home
            </NavLink>

          </li>

          <li className="nav-item active">
            <NavLink className="nav-link" to="/about" exact>
              <i className="far fa-address-book" />About
            </NavLink>

          </li>
          <li className="nav-item active">
            <NavLink className="nav-link" to="/services" exact>
              <i className="fas fa-tachometer-alt" /> Services
            </NavLink>

          </li>
          <li className="nav-item active">
            <NavLink className="nav-link" to="/contact" exact>
              <i className="fas fa-tachometer-alt" /> Contact
            </NavLink>

          </li>
          <li className="nav-item active">
            <NavLink className="nav-link" to="/testimonial" exact>
              <i className="fas fa-tachometer-alt" />Testimonials
            </NavLink>

          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
