import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import FeatherIcon from "feather-icons-react";

const Products = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("/api/products");

      const json = await response.json();

      if (response.ok) {
        setProducts(json);
      }
    };

    fetchProducts();
  }, []);

  return (
    <React.Fragment>
      <div className="container-fluid">
        <section className="section section--overview">
          <div className="row">
            <div className="col--12">
              <div className="card card--table">
                <div className="card__header">
                  <div className="d-md-flex">
                    <div>
                      <h5 className="mb-0">All Products</h5>

                      <p className="text-sm mb-0">Showing the Products</p>
                    </div>

                    <div className="ms-auto mt-4 mt-md-0">
                      <div className="btn-group btn-group--space">
                        <button className="btn btn--contain-primary btn--extended btn--sm mb-0">
                          <FeatherIcon
                            icon="plus"
                            className="fe btn__icon btn__icon--leading "
                          />
                          Add Products
                        </button>

                        <button className="btn btn--tonal-primary btn--extended btn--sm mb-0">
                          <FeatherIcon
                            icon="archive"
                            className="fe btn__icon btn__icon--leading "
                          />
                          Export CSV
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="row w-50 mt-4">
                    <div className="col--lg-6">
                      <div className="form-group form-group--sm">
                        <input
                          type="text"
                          className="form-group__input"
                          placeholder="Sort the table"
                        />

                        <FeatherIcon
                          icon="search"
                          className="form-group__icon form-group__icon--trailing fe"
                        />
                      </div>
                    </div>

                    <div className="col--lg-3 gy--4 gy--lg-0">
                      <div className="form-group form-group--sm">
                        <select
                          name=""
                          id=""
                          className="form-group__input form-group__input--select"
                        >
                          <option value="10">10 entries per page</option>
                          <option value="20">20</option>
                          <option value="30">30</option>
                          <option value="40">40</option>
                          <option value="50">50</option>
                        </select>
                      </div>
                    </div>

                    <div className="col--lg-3 gy--4 gy--lg-0">
                      <div className="form-group form-group--sm">
                        <select
                          name=""
                          id=""
                          className="form-group__input form-group__input--select"
                        >
                          <option value="0">All Products</option>
                          <option value="1">In stock</option>
                          <option value="2">Out of stock</option>
                          <option value="3">Most rated</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card__body">
                  <div className="table-responsive">
                    <table className="table mb-0">
                      <thead className="table__head">
                        <tr className="table__row">
                          <th className="table__heading">
                            <div className="form-group form-group--check">
                              <input
                                type="checkbox"
                                name=""
                                id="check"
                                className="form-group__check-input form-group__check-input--checkbox"
                              />
                            </div>
                          </th>

                          <th className="table__heading table__heading text-uppercase text-secondary text-xs font-weight-bolder">
                            ID
                          </th>

                          <th className="table__heading table__heading text-uppercase text-secondary text-xs font-weight-bolder">
                            Title
                          </th>

                          <th className="table__heading table__heading text-uppercase text-secondary text-xs font-weight-bolder">
                            Product Image
                          </th>

                          <th className="table__heading table__heading text-uppercase text-secondary text-xs font-weight-bolder">
                            Product Description
                          </th>

                          <th className="table__heading table__heading text-uppercase text-secondary text-xs font-weight-bolder">
                            Category
                          </th>

                          <th className="table__heading table__heading text-uppercase text-secondary text-xs font-weight-bolder">
                            Quantity
                          </th>

                          <th className="table__heading table__heading text-uppercase text-secondary text-xs font-weight-bolder">
                            Price
                          </th>

                          <th className="table__heading table__heading text-uppercase text-secondary text-xs font-weight-bolder">
                            Ratings
                          </th>

                          <th className="table__heading table__heading text-uppercase text-secondary text-xs font-weight-bolder">
                            Status
                          </th>

                          <th className="table__heading table__heading text-uppercase text-secondary text-xs font-weight-bolder text-center">
                            Actions
                          </th>
                        </tr>
                      </thead>

                      <tbody className="table__body">
                        {products &&
                          products.map((product) => {
                            return (
                              <tr key={product._id} className="table__row">
                                <td className="table__data">
                                  <div className="form-group form-group--check">
                                    <input
                                      type="checkbox"
                                      name=""
                                      id="check"
                                      className="form-group__check-input form-group__check-input--checkbox"
                                    />
                                  </div>
                                </td>

                                <td className="table__data">{product.id}</td>

                                <td className="table__data">{product.title}</td>

                                <td className="table__data">
                                  <div className="avatar">
                                    {/* <img
                                    src={product.image}
                                    className="avatar__img"
                                    alt={product.title}
                                  /> */}

                                    <div className="avatar__content">
                                      <h6 className="mb-0 text-sm">
                                        E-Sports logo
                                      </h6>

                                      <p className="text-xs mb-0">
                                        illustrator
                                      </p>
                                    </div>
                                  </div>
                                </td>

                                <td className="table__data">
                                  <p className="description text-sm text-truncate mb-0">
                                    {product.description}
                                  </p>
                                </td>

                                <td className="table__data">
                                  {product.category}
                                </td>

                                <td className="table__data">
                                  {product.quantity}
                                </td>

                                <td className="table__data">
                                  ${product.price}
                                </td>

                                <td className="table__data">
                                  <span className="text-sm text-primary">
                                    <FeatherIcon icon="star" className="fe" />
                                  </span>

                                  <span className="text-sm text-primary">
                                    <FeatherIcon icon="star" className="fe" />
                                  </span>

                                  <span className="text-sm text-primary">
                                    <FeatherIcon icon="star" className="fe" />
                                  </span>
                                </td>

                                <td className="table__data">
                                  <span className="badge badge-sm bg-gradient-success">
                                    {product.status}
                                  </span>
                                </td>

                                <td className="table__data text-center">
                                  <div className="btn-group btn-group--space flex-nowrap">
                                    <button
                                      type="button"
                                      className="btn btn--text-primary btn--sm btn--icon-only mb-0"
                                    >
                                      <FeatherIcon
                                        icon="settings"
                                        className="fe btn__icon"
                                      />
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="card__footer">
                  <div className="">Showing 1 to 10 of 50 entries</div>
                  <ul className="pagination ps-0 mt-2 mt-sm-0 ms-auto mb-0">
                    <li className="page-item">
                      <Link to="/" className="page-link" aria-label="Previous">
                        <FeatherIcon
                          icon="arrow-left"
                          className="fe nav__icon"
                        />
                      </Link>
                    </li>

                    <li className="page-item">
                      <Link to="/" className="page-link">
                        1
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link to="/" className="page-link">
                        2
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link to="/" className="page-link">
                        3
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link to="/" className="page-link">
                        4
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link to="/" className="page-link">
                        5
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link to="/" className="page-link" aria-label="Previous">
                        <FeatherIcon
                          icon="arrow-right"
                          className="fe nav__icon"
                        />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default Products;
