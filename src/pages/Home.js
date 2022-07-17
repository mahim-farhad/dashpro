import React from "react";

import { motion } from "framer-motion";

import CardOverview from "../components/Cards/CardOverview";

import LineChart from "../components/Charts/LineChart";
import PieChart from "../components/Charts/PieChart";
import BarChart from "../components/Charts/BarChart";

import JerseyImage from "../assets/images/products/jersey.png";

const Home = () => {
  return (
    <React.Fragment>
      <section className="section section--overview">
        <motion.div
          className="row"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
        >
          <div className="col--12 col--sm-6 col--md-4 col--lg-4 col--xl-3">
            <CardOverview
              service="Revenue"
              number="$250,789"
              icon="dollar-sign"
            />
          </div>

          <div className="col--12 col--sm-6 col--md-4 col--lg-4 col--xl-3 gy--4 gy--sm-0">
            <CardOverview service="Clients" number="$500,000" icon="users" />
          </div>

          <div className="col--12 col--sm-6 col--md-4 col--lg-4 col--xl-3 gy--4 gy--md-0">
            <CardOverview service="Products" number="$250,789" icon="list" />
          </div>

          <div className="col--12 col--sm-6 col--md-4 col--lg-4 col--xl-3 gy--4 gy--lg-0">
            <CardOverview service="Orders" number="$250,789" icon="clipboard" />
          </div>
        </motion.div>

        <motion.div
          className="row mt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
        >
          <div className="col--lg-9 gy--lg-0">
            <div className="card card--chart h-100">
              <div className="card__header">
                <h6 className="mb-0">Revenue</h6>
                <p className="text-sm text-muted mb-0">
                  View all the revenues earned for the hafl of this year.
                </p>
              </div>

              <div className="card__body">
                <div className="chart" style={{ height: "300px" }}>
                  <LineChart />
                </div>
              </div>
            </div>
          </div>

          <div className="col--lg-3 gy--md-4 gy--lg-0">
            <div className="card card--chart h-100">
              <div className="card__header">
                <h6 className="mb-0">Orders</h6>

                <p className="text-sm text-muted mb-0">
                  View status of the orders
                </p>

                <div className="d-flex align-items-center flex-wrap mt-4">
                  <span className="badge badge--dot me-4">
                    <i className="dot dot--success"></i>
                    <span className="text-xs">Completed</span>
                  </span>

                  <span className="badge badge--dot me-4">
                    <i className="dot dot--warning"></i>
                    <span className="text-xs">Pending</span>
                  </span>

                  <span className="badge badge--dot me-4">
                    <i className="dot dot--primary"></i>
                    <span className="text-xs">Active</span>
                  </span>
                </div>
              </div>

              <div className="card__body">
                <div className="chart" style={{ height: "300px" }}>
                  <PieChart />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="row mt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
        >
          <div className="col--lg-6">
            <div className="card card--chart h-100">
              <div className="card__header">
                <h6 className="mb-0">Channels</h6>

                <p className="text-sm text-muted mb-0">
                  Comparing between different channels of the orders
                </p>

                <div className="d-flex align-items-center flex-wrap mt-4">
                  <span className="badge badge--dot me-4">
                    <i className="dot dot--facebook"></i>
                    <span className="text-xs">Facebook</span>
                  </span>

                  <span className="badge badge--dot me-4">
                    <i className="dot dot--fiverr"></i>
                    <span className="text-xs">Fiverr</span>
                  </span>

                  <span className="badge badge--dot me-4">
                    <i className="dot dot--behance"></i>
                    <span className="text-xs">Behance</span>
                  </span>

                  <span className="badge badge--dot me-4">
                    <i className="dot dot--dribbble"></i>
                    <span className="text-xs">Dribbble</span>
                  </span>
                </div>
              </div>

              <div className="card__body">
                <div className="chart" style={{ height: "300px" }}>
                  <BarChart />
                </div>
              </div>
            </div>
          </div>

          <div className="col--lg-6 gy--sm-4 gy--lg-0">
            <div className="card card--calendar h-100">
              <div className="card__header p-4 pb-0">
                <div className="d-flex align-items-center justify-content-between flex-wrap">
                  <h6 className="mb-0">Calendar, July 2022</h6>

                  <div className="btn-group btn-group--space">
                    <button className="btn btn--contain-primary btn--sm btn--icon-only mb-0">
                      <i data-feather="arrow-left" className="fe"></i>
                    </button>

                    <button className="btn btn--contain-primary btn--sm mb-0">
                      Today
                    </button>

                    <button className="btn btn--contain-primary btn--sm btn--icon-only mb-0">
                      <i data-feather="arrow-right" className="fe"></i>
                    </button>
                  </div>
                </div>
              </div>

              <div className="card__body">
                <div className="table-responsive">
                  <table className="table table--calendar mb-0">
                    <thead className="table__head">
                      <tr className="table__row">
                        <th className="table__heading table__heading text-uppercase text-secondary text-xs font-weight-bolder">
                          sun
                        </th>

                        <th className="table__heading table__heading text-uppercase text-secondary text-xs font-weight-bolder">
                          mon
                        </th>

                        <th className="table__heading table__heading text-uppercase text-secondary text-xs font-weight-bolder">
                          tues
                        </th>

                        <th className="table__heading table__heading text-uppercase text-secondary text-xs font-weight-bolder">
                          wed
                        </th>

                        <th className="table__heading table__heading text-uppercase text-secondary text-xs font-weight-bolder">
                          thu
                        </th>

                        <th className="table__heading table__heading text-uppercase text-secondary text-xs font-weight-bolder">
                          fri
                        </th>

                        <th className="table__heading table__heading text-uppercase text-secondary text-xs font-weight-bolder">
                          sat
                        </th>
                      </tr>
                    </thead>

                    <tbody className="table__body">
                      <tr className="table__row">
                        <td className="table__data text-muted">27</td>
                        <td className="table__data text-muted">28</td>
                        <td className="table__data text-muted">29</td>
                        <td className="table__data text-muted">30</td>
                        <td className="table__data">1</td>
                        <td className="table__data">2</td>
                        <td className="table__data">3</td>
                      </tr>
                      <tr className="table__row">
                        <td className="table__data">4</td>
                        <td className="table__data">5</td>
                        <td className="table__data">6</td>
                        <td className="table__data">7</td>
                        <td className="table__data">8</td>
                        <td className="table__data">9</td>
                        <td className="table__data">10</td>
                      </tr>
                      <tr className="table__row">
                        <td className="table__data">11</td>
                        <td className="table__data">12</td>
                        <td className="table__data">13</td>
                        <td className="table__data">14</td>
                        <td className="table__data">15</td>
                        <td className="table__data">16</td>
                        <td className="table__data">17</td>
                      </tr>
                      <tr className="table__row">
                        <td className="table__data">18</td>
                        <td className="table__data">19</td>
                        <td className="table__data">20</td>
                        <td className="table__data">21</td>
                        <td className="table__data">22</td>
                        <td className="table__data">23</td>
                        <td className="table__data">24</td>
                      </tr>
                      <tr className="table__row">
                        <td className="table__data">25</td>
                        <td className="table__data">26</td>
                        <td className="table__data">27</td>
                        <td className="table__data">28</td>
                        <td className="table__data">29</td>
                        <td className="table__data">30</td>
                        <td className="table__data">31</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="row mt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
        >
          <div className="col--12 col--lg-6">
            <div className="card card--table">
              <div className="card__header">
                <div className="mb-0">
                  <h5 className="mb-0">Orders Table</h5>

                  <p className="text-sm text-muted mb-0">
                    View some of the orders
                  </p>
                </div>
              </div>

              <div className="card__body">
                <div className="table-responsive">
                  <table className="table mb-0">
                    <thead className="table__head">
                      <tr className="table__row">
                        <th className="table__heading table__heading text-uppercase text-secondary text-xs font-weight-bolder">
                          ID
                        </th>

                        <th className="table__heading table__heading text-uppercase text-secondary text-xs font-weight-bolder">
                          Client Info
                        </th>

                        <th className="table__heading table__heading text-uppercase text-secondary text-xs font-weight-bolder">
                          Due Date
                        </th>

                        <th className="table__heading table__heading text-uppercase text-secondary text-xs font-weight-bolder">
                          Status
                        </th>

                        <th className="table__heading table__heading text-uppercase text-secondary text-xs font-weight-bolder">
                          Revenue
                        </th>
                      </tr>
                    </thead>

                    <tbody className="table__body">
                      <tr className="table__row">
                        <td className="table__data">#1020</td>

                        <td className="table__data">
                          <div className="avatar">
                            <div>
                              <img
                                src="https://demos.creative-tim.com/material-dashboard/assets/img/team-4.jpg"
                                className="avatar__img"
                                alt="user"
                              />
                            </div>

                            <div className="avatar__content">
                              <h6 className="mb-0 text-sm">John Michael</h6>

                              <p className="text-xs mb-0">
                                john@creative-tim.com
                              </p>
                            </div>
                          </div>
                        </td>

                        <td className="table__data">25 June, 2022</td>

                        <td className="table__data">
                          <span className="badge bg-gradient-success">
                            Completed
                          </span>
                        </td>

                        <td className="table__data">$20,800</td>
                      </tr>
                      <tr className="table__row">
                        <td className="table__data">#1020</td>

                        <td className="table__data">
                          <div className="avatar">
                            <div>
                              <img
                                src="https://demos.creative-tim.com/material-dashboard/assets/img/team-4.jpg"
                                className="avatar__img"
                                alt="user"
                              />
                            </div>

                            <div className="avatar__content">
                              <h6 className="mb-0 text-sm">John Michael</h6>

                              <p className="text-xs mb-0">
                                john@creative-tim.com
                              </p>
                            </div>
                          </div>
                        </td>

                        <td className="table__data">25 June, 2022</td>

                        <td className="table__data">
                          <span className="badge bg-gradient-warning">
                            pending
                          </span>
                        </td>

                        <td className="table__data">$20,800</td>
                      </tr>
                      <tr className="table__row">
                        <td className="table__data">#1020</td>

                        <td className="table__data">
                          <div className="avatar">
                            <div>
                              <img
                                src="https://demos.creative-tim.com/material-dashboard/assets/img/team-4.jpg"
                                className="avatar__img"
                                alt="user"
                              />
                            </div>

                            <div className="avatar__content">
                              <h6 className="mb-0 text-sm">John Michael</h6>

                              <p className="text-xs mb-0">
                                john@creative-tim.com
                              </p>
                            </div>
                          </div>
                        </td>

                        <td className="table__data">25 June, 2022</td>

                        <td className="table__data">
                          <span className="badge bg-gradient-primary">
                            Active
                          </span>
                        </td>

                        <td className="table__data">$20,800</td>
                      </tr>
                      <tr className="table__row">
                        <td className="table__data">#1020</td>

                        <td className="table__data">
                          <div className="avatar">
                            <div>
                              <img
                                src="https://demos.creative-tim.com/material-dashboard/assets/img/team-4.jpg"
                                className="avatar__img"
                                alt="user"
                              />
                            </div>

                            <div className="avatar__content">
                              <h6 className="mb-0 text-sm">John Michael</h6>

                              <p className="text-xs mb-0">
                                john@creative-tim.com
                              </p>
                            </div>
                          </div>
                        </td>

                        <td className="table__data">25 June, 2022</td>

                        <td className="table__data">
                          <span className="badge bg-gradient-success">
                            Completed
                          </span>
                        </td>

                        <td className="table__data">$20,800</td>
                      </tr>
                      <tr className="table__row">
                        <td className="table__data">#1020</td>

                        <td className="table__data">
                          <div className="avatar">
                            <div>
                              <img
                                src="https://demos.creative-tim.com/material-dashboard/assets/img/team-4.jpg"
                                className="avatar__img"
                                alt="user"
                              />
                            </div>

                            <div className="avatar__content">
                              <h6 className="mb-0 text-sm">John Michael</h6>

                              <p className="text-xs mb-0">
                                john@creative-tim.com
                              </p>
                            </div>
                          </div>
                        </td>

                        <td className="table__data">25 June, 2022</td>

                        <td className="table__data">
                          <span className="badge bg-gradient-success">
                            Completed
                          </span>
                        </td>

                        <td className="table__data">$20,800</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="col--12 col--lg-6 gy--sm-4 gy--lg-0">
            <div className="card card--table">
              <div className="card__header">
                <div className="mb-0">
                  <h5 className="mb-0">Products Table</h5>

                  <p className="text-sm text-muted mb-0">
                    View some of the products
                  </p>
                </div>
              </div>

              <div className="card__body">
                <div className="table-responsive">
                  <table className="table table--striped mb-0">
                    <thead className="table__head">
                      <tr className="table__row">
                        <th className="table__heading table__heading text-uppercase text-secondary text-xs font-weight-bolder">
                          ID
                        </th>

                        <th className="table__heading table__heading text-uppercase text-secondary text-xs text-center font-weight-bolder">
                          Product Image
                        </th>

                        <th className="table__heading table__heading text-uppercase text-secondary text-xs font-weight-bolder">
                          Quantity
                        </th>

                        <th className="table__heading table__heading text-uppercase text-secondary text-xs font-weight-bolder">
                          Status
                        </th>

                        <th className="table__heading table__heading text-uppercase text-secondary text-xs font-weight-bolder">
                          Price
                        </th>
                      </tr>
                    </thead>

                    <tbody className="table__body">
                      <tr className="table__row">
                        <td className="table__data">#1020</td>

                        <td className="table__data text-center">
                          <div className="avatar">
                            <div>
                              <img
                                src={JerseyImage}
                                className="avatar__img"
                                alt="user"
                              />
                            </div>
                          </div>
                        </td>

                        <td className="table__data">0</td>

                        <td className="table__data">
                          <span className="badge bg-gradient-error">
                            Out of stock
                          </span>
                        </td>

                        <td className="table__data">$20,800</td>
                      </tr>
                      <tr className="table__row">
                        <td className="table__data">#1020</td>

                        <td className="table__data text-center">
                          <div className="avatar">
                            <div>
                              <img
                                src={JerseyImage}
                                className="avatar__img"
                                alt="user"
                              />
                            </div>
                          </div>
                        </td>

                        <td className="table__data">10</td>

                        <td className="table__data">
                          <span className="badge bg-gradient-success">
                            In stock
                          </span>
                        </td>

                        <td className="table__data">$20,800</td>
                      </tr>
                      <tr className="table__row">
                        <td className="table__data">#1020</td>

                        <td className="table__data text-center">
                          <div className="avatar">
                            <div>
                              <img
                                src={JerseyImage}
                                className="avatar__img"
                                alt="user"
                              />
                            </div>
                          </div>
                        </td>

                        <td className="table__data">2</td>

                        <td className="table__data">
                          <span className="badge bg-gradient-warning">
                            Only few left
                          </span>
                        </td>

                        <td className="table__data">$20,800</td>
                      </tr>
                      <tr className="table__row">
                        <td className="table__data">#1020</td>

                        <td className="table__data text-center">
                          <div className="avatar">
                            <div>
                              <img
                                src={JerseyImage}
                                className="avatar__img"
                                alt="user"
                              />
                            </div>
                          </div>
                        </td>

                        <td className="table__data">20</td>

                        <td className="table__data">
                          <span className="badge bg-gradient-success">
                            In stock
                          </span>
                        </td>

                        <td className="table__data">$20,800</td>
                      </tr>
                      <tr className="table__row">
                        <td className="table__data">#1020</td>

                        <td className="table__data text-center">
                          <div className="avatar">
                            <div>
                              <img
                                src={JerseyImage}
                                className="avatar__img"
                                alt="user"
                              />
                            </div>
                          </div>
                        </td>

                        <td className="table__data">15</td>

                        <td className="table__data">
                          <span className="badge bg-gradient-success">
                            In stock
                          </span>
                        </td>

                        <td className="table__data">$20,800</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </React.Fragment>
  );
};

export default Home;
