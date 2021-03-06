import React, { Fragment } from "react";
import ListQuery from "../../microComponents/listQuery";
import "./index.css";


const ProductOverView = (props) => {
  return (
    <Fragment>
      <section className="ths">
        <header className="prov">
          <p>PRODUCT OVERVIEW</p>
          <div className="searchArea">
            <div className="filter">
              <a href="#">All Products</a>
              <a href="#">Women</a>
              <a href="#">Men</a>
              <a href="#">Bag</a>
              <a href="#">Shoes</a>
              <a href="#">Watchs</a>
            </div>
            <div className="filterSearch">
              <a className="click">
                <i className="fas fa-caret-down"></i>
                <span>Filter</span>
              </a>
              <a>
                <i className="fas fa-search "></i>
                <span>Search</span>
              </a>
            </div>
          </div>
        </header>
        <div className="querySection" style={{width:"100%"}}>
        <ListQuery
        firstList = {[
          <li>Sort By</li>,
                <li>Default</li>,
                <li>Popularity</li>,
                <li>Average rating</li>,
                <li>Newness</li>,
                <li>Price: Low to High</li>,
                <li>Price: High to Low</li>
        ]}
        secondeList = {[
          <li>Color</li>,
          <li>Black</li>,
          <li>Blue</li>,
          <li>Grey</li>,
          <li>Green</li>,
          <li>Red</li>,
          <li>White</li>
        ]}
        thirdList = {[
          <li>Price</li>,
          <li>All</li>,
          <li>$0.00 - $50.00</li>,
          <li>$50.00 - $100.00</li>,
          <li>$100.00 - $150.00</li>,
          <li>$150.00 - $200.00</li>,
          <li>$200.00+</li>
        ]}
        forthList = {[
          <li>Tags</li>,
                <li>
                  <a href="#" className="butn">
                    Fashion
                  </a>
                </li>,
                <li>
                  <a href="#" className="butn">
                    Lifestyle
                  </a>
                </li>,
                <li>
                  <a href="#" className="butn">
                    Denim
                  </a>
                </li>,
                <li>
                  <a href="#" className="butn">
                    Streetstyle
                  </a>
                </li>
        ]}
        />
        </div>

      </section>
    </Fragment>
  );
};

export default ProductOverView;
